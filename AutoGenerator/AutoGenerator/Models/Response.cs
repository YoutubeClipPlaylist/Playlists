#pragma warning disable IDE1006 // 命名樣式
namespace AutoGenerator.Models;

public class Response
{
    public int? total { get; set; }
    public Item[]? items { get; set; }
}

public class Item
{
    public string? channel_id { get; set; }
    public string? video_id { get; set; }
    public string? name { get; set; }
    public int? start { get; set; }
    public int? end { get; set; }
    public int? itunesid { get; set; }
    public string? art { get; set; }
    public string? amUrl { get; set; }
    public DateTime? available_at { get; set; }
    public string? status { get; set; }
    public bool? is_mv { get; set; }
    public string? original_artist { get; set; }
    public int? creator_id { get; set; }
    public string? id { get; set; }
    public Channel2? channel { get; set; }
}

public class Channel2
{
    public string? name { get; set; }
    public string? english_name { get; set; }
}

