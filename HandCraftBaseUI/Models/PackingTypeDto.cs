using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandCraftBaseUI.Models
{
    public class PackingTypeDto
    {
        public long id { get; set; }
        public string name { get; set; }
        public long? price { get; set; }
        public long? weight { get; set; }
        public List<PackingTypeImageDto> packingTypeImage { get; set; }
    }
}
