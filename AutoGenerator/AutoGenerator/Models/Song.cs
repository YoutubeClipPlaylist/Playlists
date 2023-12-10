using AutoGenerator.Json;
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
