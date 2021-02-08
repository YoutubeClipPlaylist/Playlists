using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;
using System.Threading.Tasks;

namespace CreateRadioQTamaSubtitles {
    class Program {
        static async Task<int> Main(string[] args) {
            string jsoncPath = @"QuonTama/QuonTamaRadioQTamaList.jsonc";
            if (!File.Exists(jsoncPath)) {
                Console.WriteLine("ERROR_FILE_NOT_FOUND: This file should be called directly in the project directory (Playlist).");
                Environment.Exit(2);    // ERROR_FILE_NOT_FOUND
            }
            List<Element> subElements = new List<Element>();
            try {
                string responseBody = await new HttpClient().GetStringAsync(@"https://gitlab.com/api/v4/projects/23810267/repository/tree?path=Qtama");
                subElements = JsonSerializer.Deserialize<List<Element>>(responseBody);
            } catch (HttpRequestException) {
                Environment.Exit(59);   // ERROR_UNEXP_NET_ERR
            } catch (JsonException) {
                Environment.Exit(13);   // ERROR_INVALID_DATA
            }

            List<Track> playlist = new List<Track>();

            try {
                string str = File.ReadAllText(jsoncPath, Encoding.UTF8);
                using (JsonDocument document = JsonDocument.Parse(str, new JsonDocumentOptions {
                    CommentHandling = JsonCommentHandling.Skip,
                    AllowTrailingCommas = true
                })) {
                    JsonElement root = document.RootElement;
                    foreach (JsonElement rootElement in root.EnumerateArray()) {
                        Track track = new Track();
                        int i = 0;
                        foreach (JsonElement trackElement in rootElement.EnumerateArray()) {
                            switch (i) {
                                case 0:
                                    track.id = trackElement.GetString();
                                    break;
                                case 1:
                                    track.startTime = trackElement.GetInt32();
                                    break;
                                case 2:
                                    track.endTime = trackElement.GetInt32();
                                    break;
                                case 3:
                                    track.name = trackElement.GetString();
                                    break;
                                case 4:
                                    track.path = trackElement.GetString();
                                    break;
                                default:
                                    break;
                            }
                            i++;
                        }
                        playlist.Add(track);
                    }

                }
            } catch (JsonException) {
                Environment.Exit(13);   // ERROR_INVALID_DATA
            } catch (InvalidOperationException) {
                Environment.Exit(13);   // ERROR_INVALID_DATA
            }

            bool Changed = false;
            for (int i = 0; i < playlist.Count; i++) {
                string blobID = subElements.Where(sub => sub.name.Contains(playlist[i].id)).Select(sub => sub.id).FirstOrDefault();
                if (!string.IsNullOrEmpty(blobID)) {
                    string newPath = $"https://gitlab.com/api/v4/projects/23810267/repository/blobs/{blobID}/raw";
                    if (newPath != playlist[i].path) {
                        Changed = true;
                        playlist[i].path = newPath;
                    }
                }
            }

            if (!Changed) {
                Environment.Exit(80);   // ERROR_FILE_EXISTS
            }

            using (StreamWriter sw = new StreamWriter(jsoncPath)) {
                using (Utf8JsonWriter jw = new Utf8JsonWriter(sw.BaseStream, new JsonWriterOptions {
                    Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
                    Indented = true
                })) {
                    jw.WriteStartArray();
                    foreach (var track in playlist) {
                        jw.WriteStartArray();
                        jw.WriteStringValue(track.id);
                        jw.WriteNumberValue(track.startTime);
                        jw.WriteNumberValue(track.endTime);
                        jw.WriteStringValue(track.name);
                        if (null != track.path) {
                            jw.WriteStringValue(track.path);
                        }
                        jw.WriteEndArray();
                    }
                    jw.WriteEndArray();
                    jw.Flush();
                }
            }
            return 0;
        }
    }

    class Element {
        public string id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string path { get; set; }
        public string mode { get; set; }
    }

    class Track {
        public string id { get; set; }
        public int startTime { get; set; }
        public int endTime { get; set; }
        public string name { get; set; }
        public string path { get; set; }
    }
}
