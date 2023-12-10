#pragma warning disable IDE1006 // 命名樣式
namespace AutoGenerator.Models;

public class Request
{
    public required string channel_id { get; set; }

    public bool paginated { get; set; }
    public int limit { get; set; }
    public int offset { get; set; }
}
