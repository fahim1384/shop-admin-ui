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
    public class PackingTypeController : ControllerBase
    {
        public IConfiguration _configuration;

        public PackingTypeController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("PackingType/GetPackingTypeList")]
        public IActionResult GetPackingTypeList()
        {
            var client = new RestClient(_configuration["HandCraftBaseServer"] + "PackingType/GetPackingTypeList");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            if (response.IsSuccessful)
            {
                var res = JsonSerializer.Deserialize<List<PackingTypeDto>>(response.Content);
                return Ok(res);
            }

            return BadRequest("");
        }

        [HttpPost]
        [Route("PackingType/InsertPackingType")]
        public IActionResult InsertPackingType(PackingTypeDto packingTypeDto)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(packingTypeDto);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "PackingType/InsertPackingType");
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
        [Route("PackingType/UpdatePackingType")]
        public IActionResult UpdatePackingType(PackingTypeDto packingTypeDto)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(packingTypeDto);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "PackingType/UpdatePackingType");
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
        [Route("PackingType/GetPackingTypeById")]
        public IActionResult GetPackingTypeById(long packingTypeId)
        {
            try
            {
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "PackingType/GetPackingTypeById?packingTypeId=" + packingTypeId);
                var request = new RestRequest(Method.GET);
                IRestResponse response = client.Execute(request);

                if (response.IsSuccessful)
                {

                    var result = JsonSerializer.Deserialize<PackingTypeDto>(response.Content);
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
        [Route("PackingType/DeletePackingType")]
        public IActionResult DeletePackingType(long packingTypeId)
        {
            try
            {
                var token = Request.Cookies["token"];
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "PackingType/DeletePackingType?packingTypeId=" + packingTypeId);
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
