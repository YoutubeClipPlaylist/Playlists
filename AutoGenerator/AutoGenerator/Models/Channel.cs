namespace AutoGenerator.Models;

public interface IChannel
{
    public string? ChannelId { get; set; }
    public string? Singer { get; set; }
    public string? Singer_eng { get; set; }
    public string[] ExcludeKeywords { get; set; }
}

public class Channel : IChannel
{
    public string? ChannelId { get; set; }
    public string? Singer { get; set; }
    public string? Singer_eng { get; set; }
    public string[] ExcludeKeywords { get; set; } = [];
}
