using Application.Interfaces;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;
using Models.DTOs;
using Models.Entities;

namespace Application.Services
{
    public class AdminService : IAdminService
    {
        private readonly IUserRepository _repo;
        private readonly IPasswordHasher<User> _passwordHasher;

        public AdminService(IUserRepository repo, IPasswordHasher<User> passwordHasher)
        {
            _repo = repo;
            _passwordHasher = passwordHasher;
        }

        public string CreateAdmin(CreateAdminDTO request)
        {
            var admin = new User
            {
                Fullname = request.Fullname,
                Email = request.Email,
                Role = "Admin",
            };

            admin.Password = _passwordHasher.HashPassword(admin, request.Password);
            _repo.Add(admin);

            return "Admin Created Successfully!";

        }

        public ResultDTO AdminLogin(LoginAdminDTO request)
        {
            var user = _repo.GetByEmail(request.Email);
            if (user == null)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Invalid Email!"
                };
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, request.Password);
            if (result == PasswordVerificationResult.Failed)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Invalid Password!"
                };
            }

            if (user.Role != "Admin")
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Access Denied! You are not an admin."
                };
            }

            return new ResultDTO
            {
                Success = true,
                Message = "Admin Login Successfully!",
                User = user
            };
        }
    }
}
