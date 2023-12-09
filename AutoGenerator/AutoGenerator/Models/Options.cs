using System.Diagnostics.CodeAnalysis;

namespace AutoGenerator.Models;

public interface IOptions
{
    public Channel[] Channels { get; set; }
}

[DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.All)]
public class Options : IOptions
{
    public Channel[] Channels { get; set; } = [];
}
