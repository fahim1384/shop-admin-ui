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
using RestSharp.Authenticators;

namespace HandCraftBaseUI.Controllers.ApiControllers
{
    [Route("api/")]
    [ApiController]
    public class CatProductController : ControllerBase
    {
        public IConfiguration _configuration;

        public CatProductController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        [Route("CatProduct/GetCatProductList")]
        public IActionResult GetCatProductList()
        {

            var client = new RestClient(_configuration["HandCraftBaseServer"] + "CatProduct/GetCatProductList");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            if (response.IsSuccessful)
            {

                var result = JsonSerializer.Deserialize<List<CatProductDto>>(response.Content);




                var str = "[";

                foreach (var item in result)
                {
                    str += "{";
                    str += "'mid':" + item.id + ",";
                    str += "'text':" + "'" + item.name + "'";
                    str += GetSecondNode(item.inverseP);
                    str += "},";
                }

                str += "]";


                return Ok(str);

            }

            return BadRequest("");
        }

        [HttpPost]
        [Route("CatProduct/InserCatProduct")]
        public IActionResult InserCatProduct(CatProductDto catProduct)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(catProduct);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "CatProduct/InserCatProduct");
                var request = new RestRequest(Method.POST);
                request.AddJsonBody(body);
                request.AddHeader("authorization", "Bearer " + token);

                IRestResponse response = client.Execute(request);
                if (response.IsSuccessful)
                {
                    return Ok("");
                }
                else
                {
                    return BadRequest("");
                }
            }
            catch (Exception e)
            {
                return BadRequest("");
            }


        }

        [HttpGet]
        [Route("CatProduct/GetCatProductById")]
        public IActionResult GetCatProductById(long catProductId)
        {
            try
            {
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "CatProduct/GetCatProductById?catProductId=" + catProductId);
                var request = new RestRequest(Method.GET);
                IRestResponse response = client.Execute(request);

                if (response.IsSuccessful)
                {

                    var result = JsonSerializer.Deserialize<CatProductDto>(response.Content);
                    return Ok(result);
                }

                return BadRequest(response.Content);

            }
            catch (Exception e)
            {
                return BadRequest("");
            }
        }

        [HttpPut]
        [Route("CatProduct/UpdateCatProduct")]
        public IActionResult UpdateCatProduct(CatProductDto catProduct)
        {
            try
            {
                var token = Request.Cookies["token"];
                var body = JsonSerializer.Serialize(catProduct);
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "CatProduct/UpdateCatProduct");
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

        [HttpDelete]
        [Route("CatProduct/DeleteCatProduct")]
        public IActionResult DeleteCatProduct(long catProductId)
        {
            try
            {
                var token = Request.Cookies["token"];
                var client = new RestClient(_configuration["HandCraftBaseServer"] + "CatProduct/DeleteCatProduct?catProductId="+catProductId);
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

        public virtual string GetSecondNode(List<CatProductDto> list)
        {

            var str = "";
            if (list.Count > 0)
            {
                str += ",'nodes':";
                str += "[";
                foreach (var item in list)
                {
                    str += "{";
                    str += "'mid':" + item.id + ",";
                    str += "'text':'" + item.name + "',";
                    str += GetSecondNode(item.inverseP);
                    str += "},";
                }

                str += "]";

            }


            return str;
        }
    }
}
