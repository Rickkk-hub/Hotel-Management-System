using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Models.Entities;
using Infrastructure.Data;
using Infrastructure.Interfaces;
using Infrastructure.Repository;
using Application.Interfaces;
using Application.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IAdminService, AdminService>();

// Add services to the container
builder.Services.AddControllers(); // Enables controller-based APIs
builder.Services.AddEndpointsApiExplorer(); // Enables Swagger/OpenAPI

//connection in my database
builder.Services.AddDbContext<AppDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("Connectmoko")));


// CORS connect to react app
builder.Services.AddCors(option =>
{
    option.AddPolicy("AllowReactApp",
    policy => policy.WithOrigins("http://localhost:3000")
       .AllowAnyHeader()
       .AllowAnyMethod());
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())

//app.UseHttpsRedirection();
app.UseCors("AllowReactApp"); // CORS must be before MapControllers
app.UseAuthorization();

app.MapControllers(); // Enable attribute-based routing (like [HttpGet], [HttpPost])

app.Run();
