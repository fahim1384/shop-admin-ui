using System;
using System.Collections.Generic;
using System.Text;

namespace HandCraftBaseUI.Models
{
   public class CatProductDto
    {
        public long id { get; set; }
        public long? pid { get; set; }
        public string name { get; set; }
        public long? coding { get; set; }
        public long? rkey { get; set; }
        public string icon { get; set; }
        public string url { get; set; }

    }
}
