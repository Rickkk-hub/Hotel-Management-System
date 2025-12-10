using Models.Entities;

namespace Infrastructure.Interfaces
{
    public interface IUserRepository
    {
        User? GetByEmail(string email);
        User? Add(User user);
    }
}