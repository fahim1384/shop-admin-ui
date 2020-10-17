using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandCraftBaseUI.Models
{
    public class PackingTypeImageDto
    {
        public long id { get; set; }
        public long? packingTypeId { get; set; }
        public string title { get; set; }
        public string decription { get; set; }
        public string imageFileUrl { get; set; }
    }
}
