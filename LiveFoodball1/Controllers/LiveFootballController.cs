using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace LiveFoodball1.Controllers
{
    [Route("api/LiveFoodball")]
    [ApiController]
    public class LiveFootballController : Controller
    {
        [HttpGet("Data")]
        public async Task<IActionResult> GetLiveStreamData()
        {
            string apiUrl = "https://api.cafethethao11.com/v1/football/livestream/live";
            string jsonData = "";

            using (HttpClient client = new HttpClient())
            {
                HttpResponseMessage response = await client.GetAsync(apiUrl);

                if (response.IsSuccessStatusCode)
                {
                    jsonData = await response.Content.ReadAsStringAsync();
                    return View("~/Views/Home/Index.cshtml", jsonData);
                }
                else
                {
                    return StatusCode((int)response.StatusCode, response.ReasonPhrase);
                }
            }
        }
    }
}
