using Microsoft.AspNetCore.Mvc;
using qaeryhub.Data;
using qaeryhub.Models.DtoAuth;
using qaeryhub.Services.Auth;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace qaeryhub.Controllers
{
    [Route("api/Auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApplicationDbContext _ctx;
        private IAuthIdentity _authIdentity;

        public AuthController(ApplicationDbContext ctx, IAuthIdentity authIdentity)
        {
            _ctx = ctx;
            _authIdentity = authIdentity;
        }



        // GET: api/<AuthController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new List<string>() { "asdasd" };
        }

        // GET api/<AuthController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<AuthController>
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn([FromBody] DtoSignInUser dtoSignInUser)
        {
            var newUser = await _authIdentity.SignIn(dtoSignInUser);
            if(newUser != null)
            {
                await _ctx.AddAsync(newUser);
                await _ctx.SaveChangesAsync();
                return Ok(newUser);
            }
            return BadRequest("User not correct");

        }

        // POST api/<AuthController>
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] DtoLoginUser dtoLoginUser)
        {
            var loginedUser = await _authIdentity.Login(dtoLoginUser);
            if (loginedUser == null)
            {
                return BadRequest("Login or password is wrong");
            }
            DtoAuthUserCred dtoAuthUserCred = new DtoAuthUserCred()
            {
                Email = loginedUser.Email,
                Password = loginedUser.Password,
                RoleName = "Admin",
                UserName = loginedUser.UserName,
            };
            var token = _authIdentity.GetJwtToken(dtoAuthUserCred);


            return Ok(token);

        }
        // PUT api/<AuthController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<AuthController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
