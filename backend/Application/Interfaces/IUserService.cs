
using Models.DTOs;

namespace Application.Interfaces
{
    public interface IUserService
    {
        ResultDTO Register(RegisterDTO request);
        
        ResultDTO Login(LoginDTO request);
    }
}