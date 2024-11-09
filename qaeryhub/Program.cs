using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using qaeryhub.Data;
using qaeryhub.Services;
using qaeryhub.Services.Auth;
using System.Text;

namespace qaeryhub
{
    public class Program
    {
        public static void Main(string[] args)

        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddHttpContextAccessor();


            //jwt
            var jwtIssuer = builder.Configuration.GetSection("Jwt:Issuer").Get<string>();
            var jwtKey = builder.Configuration.GetSection("Jwt:Key").Get<string>();

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                .AddJwtBearer(options =>
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = jwtIssuer,
                    ValidAudience = jwtIssuer,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey)),
                }

                );


            builder.Services.AddScoped<ICRUDPerformance, CRUDPerformance>();
            builder.Services.AddScoped<IAuthIdentity, AuthIdentity>();
            builder.Services.AddControllers();
            builder.Services.AddCors(options => options
                .AddPolicy("allowReactApp", optPolicy => optPolicy
                    .WithOrigins("http://localhost:3000", "https://localhost:3000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()));
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            var ConnectionString = builder.Configuration.GetConnectionString("DefaultConnectionPostgresqlString");
            builder.Services.AddDbContext<ApplicationDbContext>(options=>options
                .UseNpgsql(ConnectionString));

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseCors("allowReactApp");

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
