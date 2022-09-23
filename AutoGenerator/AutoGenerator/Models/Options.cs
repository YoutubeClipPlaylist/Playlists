namespace AutoGenerator.Models;

public interface IOptions
{
    public Channel[] Channels { get; set; }
}

public class Options : IOptions
{
    public Channel[] Channels { get; set; } = Array.Empty<Channel>();
}
