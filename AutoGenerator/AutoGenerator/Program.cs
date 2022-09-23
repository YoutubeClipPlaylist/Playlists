﻿using AutoGenerator.Models;
using Microsoft.Extensions.Configuration;
using RestSharp;
using System.Text;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Unicode;

Console.WriteLine("Application starts.");

IOptions? option = null;

option = Start(option);

foreach (Channel channel in option.Channels)
{
    if (string.IsNullOrEmpty(channel.ChannelId)) continue;

    Console.WriteLine("Start to get the channel: " + channel.ChannelId);

    List<string> handmadeVideos = ReadHandmadePlaylists(channel).ToList();

    Console.WriteLine("Start to fetch the api.");
    List<ISong> newPlaylist = new();
    try
    {
        RestClient client = new("https://music.holodex.net/api/v2");

        while (FetchAPIAsync(channel, client, ref newPlaylist) > 0)
        {
            await Task.Delay(TimeSpan.FromSeconds(1));
        }
        Console.WriteLine("Finish to fetch the api.");
        Console.WriteLine($"Get {newPlaylist.Count} songs.");
    }
    catch (HttpRequestException e)
    {
        Console.WriteLine($"Failure while performing channel {channel.Singer}.");
        Console.WriteLine(e.Message);
        Console.WriteLine("Skip to the next channel.");
        continue;

        //Environment.Exit(12029);    // ERROR_INTERNET_CANNOT_CONNECT
    }
    WriteJsoncFile(channel, handmadeVideos, newPlaylist);
    Console.WriteLine($"Finish {channel.Singer}: {channel.ChannelId}");
}

static IOptions Start(IOptions? option)
{
    try
    {
        IConfiguration configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
#if DEBUG
            .AddJsonFile("appsettings.Development.json", optional: true, reloadOnChange: true)
#endif
            .AddEnvironmentVariables()
            .Build();

        option = configuration.Get<Options>();
        if (null == option
            || null == option.Channels
            || option.Channels.Length == 0)
        {
            throw new ApplicationException("Settings file is not valid.");
        }
        Console.WriteLine($"Get {option.Channels.Length} channels.");
    }
    catch (Exception e)
    {
        Console.WriteLine(e.Message);
        Console.WriteLine("ERROR_BAD_CONFIGURATION");
        Environment.Exit(1610); // ERROR_BAD_CONFIGURATION
    }

    return option;
}

static IEnumerable<string> ReadHandmadePlaylists(Channel channel)
{
    HashSet<string> handmadeVideos = new(channel.ExcludeKeywords);
    if (Directory.Exists(channel.Singer_eng))
    {
        foreach (var file in Directory.GetFiles(channel.Singer_eng, "*.jsonc?"))
        {
            try
            {
                string str = File.ReadAllText(file, Encoding.UTF8);
                using JsonDocument document = JsonDocument.Parse(str, new JsonDocumentOptions
                {
                    CommentHandling = JsonCommentHandling.Skip,
                    AllowTrailingCommas = true
                });
                foreach (JsonElement songElement in document.RootElement.EnumerateArray())
                {
                    var songEnumerator = songElement.EnumerateArray();
                    songEnumerator.MoveNext();
                    var videoId = songEnumerator.Current.ToString();
                    if (!string.IsNullOrEmpty(videoId)) handmadeVideos.Add(videoId);
                    songEnumerator.MoveNext();
                    songEnumerator.MoveNext();
                    songEnumerator.MoveNext();
                    var title = songEnumerator.Current.ToString();
                    if (!string.IsNullOrEmpty(title)) handmadeVideos.Add(title);
                }
            }
            catch (JsonException)
            {
                Console.WriteLine("Failed to read the file.");
                Console.WriteLine(file);
                //Environment.Exit(13);   // ERROR_INVALID_DATA
            }
            catch (NotSupportedException)
            {
                Console.WriteLine("Failed to read the file.");
                Console.WriteLine(file);
                //Environment.Exit(13);   // ERROR_INVALID_DATA
            }
        }
        Console.WriteLine($"Get {handmadeVideos.Count} exclude key words.");
    }
    else
    {
        Console.WriteLine($"Directory {channel.Singer_eng} does not exist.");
    }

    return handmadeVideos;
}

static int FetchAPIAsync(IChannel channel, RestClient client, ref List<ISong> newPlaylist)
{
    if (string.IsNullOrEmpty(channel.ChannelId)) return 0;

    var request = new RestRequest("songs/latest", Method.Post);

    request.AddJsonBody<Request>(new()
    {
        channel_id = channel.ChannelId,
        paginated = true,
        limit = 50,
        offset = newPlaylist.Count
    });
    request.AddOrUpdateHeader("referer", $"https://music.holodex.net/channel/{channel.ChannelId}/songs");
    request.AddOrUpdateHeader("origin", "https://music.holodex.net");
    request.AddOrUpdateHeader("cookie", "HOLODEX_JWT=");
    request.AddOrUpdateHeader("content-type", "application/json");
    request.AddOrUpdateHeader("cache-control", "no-cache");
    request.AddOrUpdateHeader("accept", "application/json, text/plain, */*");
    request.AddOrUpdateHeader("authority", "music.holodex.net");
    request.AddOrUpdateHeader("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36");

    var response = client.Post<Response>(request);
    if (null == response
        || null == response.items)
    {
        throw new HttpRequestException("API response invalid.");
    }

    newPlaylist.AddRange(response.items.Select(p =>
        new Song(p.video_id ?? "", p.start ?? 0, p.end ?? 0, p.name ?? "", "")));

    Console.WriteLine($"Progress: {newPlaylist.Count}/{response.total}");
    return (response.total ?? 0) - newPlaylist.Count;
}

static void WriteJsoncFile(Channel channel, List<string> handmadeVideos, List<ISong> newPlaylist)
{
    Console.WriteLine("Start to generate jsonc file.");
    string jsoncPath = @$"AutoGenerator/{channel.Singer_eng}AutoGeneratedSonglist.jsonc";
    jsoncPath = Path.GetFullPath(jsoncPath);
    Console.WriteLine(jsoncPath);

    Directory.CreateDirectory(Directory.GetParent(jsoncPath)?.FullName ?? "");

    using StreamWriter sw = new(jsoncPath, false, Encoding.UTF8);
    using Utf8JsonWriter jw = new(sw.BaseStream, new JsonWriterOptions
    {
        Encoder = JavaScriptEncoder.Create(UnicodeRanges.All),
        Indented = true
    });

    sw.WriteLine("/*");
    sw.WriteLine(" * This file is automatically generated, please do not edit it manually.");
    sw.WriteLine(" * All manual changes will be discarded on the next run.");
    sw.WriteLine(" */");
    sw.WriteLine("");
    sw.Flush();

    int count = 0;
    jw.WriteStartArray();
    foreach (ISong song in newPlaylist)
    {
        if (handmadeVideos.Contains(song.VideoId)
            || handmadeVideos.Contains(song.Title))
            continue;

        jw.WriteStartArray();
        jw.WriteStringValue(song.VideoId);
        jw.WriteNumberValue(song.StartTime);
        jw.WriteNumberValue(song.EndTime);
        jw.WriteStringValue(song.Title);
        jw.WriteEndArray();
        jw.Flush();
        count++;
    }
    jw.WriteEndArray();
    jw.Flush();
    Console.WriteLine($"Write {count} songs to jsonc file.");

    Console.WriteLine("Finish to generate jsonc file.");
}