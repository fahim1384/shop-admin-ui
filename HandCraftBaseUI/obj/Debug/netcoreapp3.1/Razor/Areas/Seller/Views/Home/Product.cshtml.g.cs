#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Areas\Seller\Views\Home\Product.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "98296b44034a481ff032aa8b7fe7a0b64fbcd5e8"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Areas_Seller_Views_Home_Product), @"mvc.1.0.view", @"/Areas/Seller/Views/Home/Product.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"98296b44034a481ff032aa8b7fe7a0b64fbcd5e8", @"/Areas/Seller/Views/Home/Product.cshtml")]
    public class Areas_Seller_Views_Home_Product : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/Seller/FormScripts/Product.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        #pragma warning restore 0649
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Areas\Seller\Views\Home\Product.cshtml"
  
    ViewData["Title"] = "محصولات";
    Layout = "~/Views/Shared/_LayoutSeller.cshtml";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<!-- Content Header (Page header) -->\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 12 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Areas\Seller\Views\Home\Product.cshtml"
                                     Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h1>
            </div>
            <div class=""col-sm-6""></div>
        </div>
    </div>
</div>


<div class=""card card-primary"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست محصولات</h3>
    </div>
    <div class=""card-body"">
        <hr />
        <div class=""row table table-responsive"">
            <div class=""w-100 TblList"">

            </div>
        </div>
    </div>
</div>


<!-- Modal -->
<div class=""modal fade"" id=""InsertModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog"" role=""document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">ثبت قیمت</h5>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""txtPrice"" class=""control-label"">قیمت محصول:</label>
                    <input type=""number"" class=""form-control""");
            WriteLiteral(@" id=""txtPrice"" placeholder=""قیمت محصول"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtProducePrice"" class=""control-label"">قیمت سفارش:</label>
                    <input type=""number"" class=""form-control"" id=""txtProducePrice"" placeholder=""قیمت سفارش"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtProduceDuration"" class=""control-label"">مدت تولید (روز):</label>
                    <input type=""number"" class=""form-control"" id=""txtProduceDuration"" placeholder=""مدت تولید"" />
                </div>

            </div>
            <div class=""modal-footer btn-group"">
                <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

            </div>
        </div>
    </div>
</div>


");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "98296b44034a481ff032aa8b7fe7a0b64fbcd5e86130", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
                await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
                if (!__tagHelperExecutionContext.Output.IsContentModified)
                {
                    await __tagHelperExecutionContext.SetOutputContentAsync();
                }
                Write(__tagHelperExecutionContext.Output);
                __tagHelperExecutionContext = __tagHelperScopeManager.End();
                WriteLiteral("\r\n   \r\n");
            }
            );
            WriteLiteral("\r\n\r\n\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
