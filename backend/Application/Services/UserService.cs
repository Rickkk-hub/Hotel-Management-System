using Application.Interfaces;
using Infrastructure.Interfaces;
using Microsoft.AspNetCore.Identity;
using Models.DTOs;
using Models.Entities;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repo;
        private readonly IPasswordHasher<User> _passwordHasher;

        public UserService(IUserRepository repo, IPasswordHasher<User> passwordHasher)
        {
            _repo = repo;
            _passwordHasher = passwordHasher;
        }

        public ResultDTO Register(RegisterDTO request)
        {
            var exEmail = _repo.GetByEmail(request.Email);
            if (exEmail != null)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Email is Already Taken!",
                };
            }

            if (request.Password != request.ConfirmPassword)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Password do not match!"
                };
            }

            var user = new User
            {
                Fullname = request.Fullname,
                Email = request.Email,
            };

            user.Password = _passwordHasher.HashPassword(user, request.Password);
            _repo.Add(user);

            return new ResultDTO
            {
                Success = true,
                Message = "Registration Successfully!"
            };
        }

        public ResultDTO Login(LoginDTO request)
        {
            var user = _repo.GetByEmail(request.Email);
            if (user == null)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Invalid Email",
                };
            }

            var result = _passwordHasher.VerifyHashedPassword(user, user.Password, request.Password);
            if (result == PasswordVerificationResult.Failed)
            {
                return new ResultDTO
                {
                    Success = false,
                    Message = "Invalid Password!",
                };
            }

            return new ResultDTO
            {
                Success = true,
                Message = $"Login Successfully! Welcome {user.Fullname}",
                User = user // Set the User property
            };
        }
    }
}