using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAPI.ViewModels;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<EmployeeVM> GetAll()
        {
            IEnumerable<EmployeeVM> _data = new List<EmployeeVM>
            {
                new EmployeeVM()
                {
                    Id = 1,
                    Name = "Imran",
                    Department = "IT",
                    JobTitle = "Senior Dot Net Develope",
                    Email = "imran@test.com",
                },
                new EmployeeVM()
                {
                    Id = 2,
                    Name = "Asad",
                    Department = "IT",
                    JobTitle = "Senior Mobile Develope",
                    Email = "asad@test.com",
                },
                new EmployeeVM()
                {
                    Id = 3,
                    Name = "Jabar",
                    Department = "IT",
                    JobTitle = "Project Manager",
                    Email = "jabar@test.com",
                },
                new EmployeeVM()
                {
                    Id = 4,
                    Name = "Marie",
                    Department = "HR",
                    JobTitle = "HR Exective",
                    Email = "marie@test.com",
                },
                new EmployeeVM()
                {
                    Id = 5,
                    Name = "Shama",
                    Department = "Admin",
                    JobTitle = "Admin",
                    Email = "shama@test.com",
                }
            };
            return _data;
        }
    }
}
