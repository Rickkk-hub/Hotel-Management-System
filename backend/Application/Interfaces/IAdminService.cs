using Models.DTOs;
using Models.Entities;

namespace Application.Interfaces
{
    public interface IAdminService
    {
        string CreateAdmin(CreateAdminDTO request);
        ResultDTO AdminLogin(LoginAdminDTO request);
    
    }
}