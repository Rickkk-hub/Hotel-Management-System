using Infrastructure.Data;
using Infrastructure.Interfaces;
using Models.Entities;


namespace Infrastructure.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly AppDbContext _context;
       public UserRepository(AppDbContext context)
        {
            _context = context;
        }
        public User? GetByEmail(string email) =>
        _context.Users.FirstOrDefault(e => e.Email == email);

        public User? Add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return user;
        }
       
    }
}