using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using HandCraftBaseUI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using RestSharp;

namespace HandCraftBaseUI.Controllers
{
    public class AccountController : Controller
    {


        public IConfiguration _configuration;

        public AccountController(IConfiguration configuration)
        {

            _configuration = configuration;
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(string username, string password, string returnUrl = null)
        {

            var login = new {username = username, Password = password};
            var body = JsonSerializer.Serialize(login);

            var client = new RestClient(_configuration["HandCraftBaseServer"] + "Account/Login");
            var request = new RestRequest(Method.POST);
            request.AddJsonBody(body);

            IRestResponse response = client.Execute(request);
            if (response.IsSuccessful)
            {
                var result = JsonSerializer.Deserialize<User>(response.Content);
                Response.Cookies.Append(
                    "token",
                    result.token,
                    new CookieOptions()
                    {
                        Expires = DateTime.Now.AddMinutes(30),
                        // Marking the cookie as essential
                        IsEssential = true
                    });
                Response.Cookies.Append(
                    "fullname",
                    result.fullname,
                    new CookieOptions()
                    {
                        Expires = DateTime.Now.AddMinutes(30),
                        // Marking the cookie as essential
                        IsEssential = true
                    });
                return RedirectToAction("Index", "Home");
            }

            return BadRequest("Invalid Username And Password");



        }
    }
}
