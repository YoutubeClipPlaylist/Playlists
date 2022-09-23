namespace AutoGenerator.Models;

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
    public string VideoId { get; set; }
    public int StartTime { get; set; }
    public int EndTime { get; set; }
    public string Title { get; set; }
    public string SubSrc { get; set; }

    public Song(string videoId, int startTime, int endTime, string title, string subSrc)
    {
        VideoId = videoId;
        StartTime = startTime;
        EndTime = endTime;
        Title = title.Split('/')[0].Trim();
        SubSrc = subSrc;
    }
}
