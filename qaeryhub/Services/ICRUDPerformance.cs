using Microsoft.AspNetCore.Mvc;
using qaeryhub.Models;
using qaeryhub.Models.Dto;

namespace qaeryhub.Services
{
    public interface ICRUDPerformance
    {
        public Task<List<DtoGetGeneralPerformance>> GetAll();
        public Task<DtoGetPerformance> Get(int id);
        public Task<GeneralPerformance> Create([FromBody] DtoCreateGeneralPerformane DtoGeneralPerformance);
        public Task<string> Delete(int id);
    }
}
