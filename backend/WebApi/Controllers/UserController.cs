using Microsoft.AspNetCore.Mvc;
using Application.Interfaces;
using Models.DTOs;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDTO request)
        {
            try
            {
                var result = _userService.Register(request);

                if (!result.Success)
                    return BadRequest(new { error = result.Message });

                return StatusCode(201, new
                {
                    fullname = request.Fullname,
                    email = request.Email,
                    message = result.Message
                });
            }
            catch
            {
                return StatusCode(500, new { error = "An error occurred while processing the request." });
            }
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginDTO request)
        {
            try
            {
                var result = _userService.Login(request);

                if (!result.Success)
                    return BadRequest(new { error = result.Message });

                return Ok(new
                {
                    email = result.User?.Email, // Get from result.User
                    message = result.Message,
                    user = result.User // Return the User object
                });
            }
            catch
            {
                return StatusCode(500, new { error = "An error occurred while processing the request." });
            }
        }
    }
}