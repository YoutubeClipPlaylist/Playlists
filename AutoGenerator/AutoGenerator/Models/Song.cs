using System.Text.Json;
using System.Text.Json.Serialization;
namespace AutoGenerator.Models;

[JsonConverter(typeof(SongConverter))]
public interface ISong
{
    public string VideoId { get; set; }
    public int StartTime { get; set; }
    public int EndTime { get; set; }
    public string Title { get; set; }
    public string SubSrc { get; set; }
}

public class Song : ISong
{
    public string VideoId { get; set; } = "";
    public int StartTime { get; set; }
    public int EndTime { get; set; }
    public string Title { get; set; } = "";
    public string SubSrc { get; set; } = "";
}

class SongConverter : JsonConverter<ISong>
{
    public override Song Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        List<JsonElement> dto = JsonSerializer.Deserialize<List<JsonElement>>(ref reader, options) ?? new();
        Queue<JsonElement> queue = new(dto);
        Song song = new();
        try
        {
            song.VideoId = queue.Dequeue().GetString() ?? "";
            song.StartTime = queue.Dequeue().GetInt32();
            song.EndTime = queue.Dequeue().GetInt32();
            song.Title = queue.Dequeue().GetString()?.Split('/')[0].Trim() ?? "";
            song.SubSrc = queue.Dequeue().GetString() ?? "";
        }
        catch (InvalidOperationException) { }

        return song;
    }

    public override void Write(Utf8JsonWriter writer, ISong value, JsonSerializerOptions options) =>
        JsonSerializer.Serialize(writer, new dynamic[]
        {
            value.VideoId,
            value.StartTime,
            value.EndTime,
            value.Title,
            value.SubSrc
        }, options);
}
