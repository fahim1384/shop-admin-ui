using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace HandCraftBaseUI.Models
{
    public class User:IdentityUser
    {
        public string fullname { get; set; }
        public string token { get; set; }
   
    }
}
