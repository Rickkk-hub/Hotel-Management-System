using Models.Entities;

namespace Models.DTOs
{
    public class ResultDTO
    {
        public bool Success { get; set; }
        public string Message { get; set; } = "";
        public User? User { get; set; }
    }
}