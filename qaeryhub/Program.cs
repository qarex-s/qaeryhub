using Microsoft.EntityFrameworkCore;
using qaeryhub.Data;
using qaeryhub.Services;

namespace qaeryhub
{
    public class Program
    {
        public static void Main(string[] args)

        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddScoped<ICRUDPerformance, CRUDPerformance>();
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

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
