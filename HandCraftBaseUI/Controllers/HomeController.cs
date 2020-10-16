using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using HandCraftBaseUI.Models;

namespace HandCraftBaseUI.Controllers
{
    public class HomeController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Color()
        {
          
            return View();
        }

        public IActionResult CatProduct()
        {
            
            return View();
        }


    }
}
