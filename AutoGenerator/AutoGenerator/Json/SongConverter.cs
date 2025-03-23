using AutoGenerator.Models;
using System.Diagnostics.CodeAnalysis;
using System.Text.Json;
using System.Text.Json.Serialization;
namespace AutoGenerator.Json;

[RequiresUnreferencedCode($"{nameof(SourceGenerationContext)} should be set for JsonOption TypeInfoResolver.")]
[RequiresDynamicCode($"{nameof(SourceGenerationContext)} should be set for JsonOption TypeInfoResolver.")]
class SongConverter : JsonConverter<ISong>
{
    public override Song Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
    {
        List<JsonElement> dto = JsonSerializer.Deserialize<List<JsonElement>>(ref reader, options) ?? [];
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

    public override void Write(Utf8JsonWriter writer, ISong value, JsonSerializerOptions options)
    {
        List<JsonElement> dto = [];
        dto.Add(JsonDocument.Parse($"\"{value.VideoId}\"").RootElement);
        dto.Add(JsonDocument.Parse($"{value.StartTime}").RootElement);
        dto.Add(JsonDocument.Parse($"{value.EndTime}").RootElement);
        dto.Add(JsonDocument.Parse($"\"{value.Title.Replace("\\", "").Replace("\"", "\\\"")}\"").RootElement);
        dto.Add(JsonDocument.Parse($"\"{value.SubSrc}\"").RootElement);

        JsonSerializer.Serialize(writer, dto, options);
    }
}
