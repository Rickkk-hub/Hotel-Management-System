using System;

namespace Models.DTOs
{
    public class CreateAdminDTO
    {
        public string Fullname { get; set; } = "";
        public string Email { get; set; } = "";
        public string Password { get; set; } = "";
        public string Role { get; set; } = "Admin";
    }
}