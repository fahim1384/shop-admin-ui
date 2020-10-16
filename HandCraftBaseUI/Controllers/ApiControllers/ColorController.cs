using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using HandCraftBaseUI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace HandCraftBaseUI.Controllers.ApiControllers
{
    [Route("api/")]
    [ApiController]
    public class ColorController : ControllerBase
    {
        public IConfiguration _configuration;

        public ColorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("Color/GetColorList")]
        public IActionResult GetColorList()
        {
            var client = new RestClient(_configuration["HandCraftBaseServer"] + "Color/GetColorList");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            if (response.IsSuccessful)
            {
                var res = JsonSerializer.Deserialize<List<ColorDto>>(response.Content);
                return Ok(res);
            }

            return BadRequest("");
        }

        [HttpPost]
        [Route("Color/InserColor")]
        public IActionResult InserColor(ColorDto colorDto)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(colorDto);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "Color/InsertColor");
                var request = new RestRequest(Method.POST);
                request.AddJsonBody(body);
                request.AddHeader("authorization", "Bearer " + token);

                IRestResponse response = client.Execute(request);
                if (response.IsSuccessful)
                {
                    return Ok("");
                }

                return BadRequest("");

            }
            catch (Exception e)
            {
                return BadRequest("");
            }


        }

        [HttpPut]
        [Route("Color/UpdateColor")]
        public IActionResult UpdateColor(ColorDto colorDto)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(colorDto);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "Color/UpdateColor");
                var request = new RestRequest(Method.PUT);
                request.AddJsonBody(body);
                request.AddHeader("authorization", "Bearer " + token);

                IRestResponse response = client.Execute(request);
                if (response.IsSuccessful)
                {
                    return Ok("");
                }

                return BadRequest("");

            }
            catch (Exception e)
            {
                return BadRequest("");
            }


        }

        [HttpGet]
        [Route("Color/GetColorById")]
        public IActionResult GetColorById(long colorId)
        {
            try
            {
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "Color/GetColorById?colorId=" + colorId);
                var request = new RestRequest(Method.GET);
                IRestResponse response = client.Execute(request);

                if (response.IsSuccessful)
                {

                    var result = JsonSerializer.Deserialize<ColorDto>(response.Content);
                    return Ok(result);
                }

                return BadRequest(response.Content);

            }
            catch (Exception e)
            {
                return BadRequest("");
            }
        }

        [HttpDelete]
        [Route("Color/DeleteColor")]
        public IActionResult DeleteColor(long colorId)
        {
            try
            {
                var token = Request.Cookies["token"];
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "Color/DeleteColor?colorId=" + colorId);
                var request = new RestRequest(Method.DELETE);
                request.AddHeader("authorization", "Bearer " + token);
                IRestResponse response = client.Execute(request);
                if (response.IsSuccessful)
                {
                    return NoContent();
                }

                return BadRequest("");
            }
            catch (Exception e)
            {
                return BadRequest("");
            }


        }

    }
}
