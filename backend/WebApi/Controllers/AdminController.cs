using Microsoft.AspNetCore.Mvc;
using Application.Interfaces;
using Models.DTOs;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly IAdminService _adminService;

        public AdminController(IAdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpPost("create-admin")]
        public IActionResult CreateAdmin([FromBody] CreateAdminDTO request)
        {
            try
            {
                var result = _adminService.CreateAdmin(request);

                if (result != "Admin Created Successfully!")
                    return BadRequest(new { error = result });

                return StatusCode(201, new
                {
                    Fullname = request.Fullname,
                    Email = request.Email,
                    Role = "Admin",
                    message = result
                });
            }
            catch
            {
                return StatusCode(500, new { error = "An error occurred while creating the admin." });
            }
        }

        [HttpPost("admin-login")]
        public IActionResult AdminLogin([FromBody] LoginAdminDTO request)
        {
            try
            {
                var result = _adminService.AdminLogin(request);

                if (!result.Success)
                {
                    if (result.Message.Contains("Access Denied"))
                        return Unauthorized(new { error = result.Message });

                    return BadRequest(new { error = result.Message });
                }

                if (result.User == null)
                    return StatusCode(500, new { error = "Unexpected error: user data is missing." });


                return Ok(new
                {
                    admin = new
                    {
                        Id = result.User.Id,
                        Fullname = result.User.Fullname,
                        Email = result.User.Email,
                        Role = result.User.Role ?? "Admin" 
                   
                    },
                    message = result.Message
                });
            }
            catch
            {
                return StatusCode(500, new { error = "An error occurred while processing the login." });
            }
        }
    }
}
