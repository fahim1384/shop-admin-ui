#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Slider.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "ed5f9826e3792def2fcf8e2b963edb71ce6d7e92"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Slider), @"mvc.1.0.view", @"/Views/Home/Slider.cshtml")]
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
#nullable restore
#line 1 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\_ViewImports.cshtml"
using HandCraftBaseUI;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\_ViewImports.cshtml"
using HandCraftBaseUI.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"ed5f9826e3792def2fcf8e2b963edb71ce6d7e92", @"/Views/Home/Slider.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Slider : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/Slider.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("<!-- Content Header (Page header) -->\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 6 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Slider.cshtml"
                                     Write(ViewData["Title"]);

#line default
#line hidden
#nullable disable
            WriteLiteral(@"</h1>
            </div>
            <!-- /.col -->
            <div class=""col-sm-6""></div>
            <!-- /.col -->
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<div class=""card card-primary"" id=""PnlList"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست اسلایدر ها</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
            <div class=""col text-center"">
                <input type=""button"" value=""افزودن اسلایدر جدید"" class=""btn btn-primary"" id=""btnJadid"" />
            </div>
        </div>
        <hr />
        <div class=""row table table-responsive"">
            <div class=""w-100 TblList"">

            </div>
        </div>
    </div>
    <!-- /.card-body -->
</div>


<div class=""modal fade"" id=""InsertModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog modal-lg"" role=""");
            WriteLiteral(@"document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">ثبت/ویرایش </h5>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""CmbSliderPlace"" class=""control-label"">محل اسلایدر:</label>
                    <select class=""form-control"" id=""CmbSliderPlace"">
                    </select>
                </div>
                <div class=""form-group"">
                    <label for=""txtName"" class=""col-sm-2 control-label"">نام:</label>
                    <input type=""text"" class=""form-control"" id=""txtName"" placeholder=""نام"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtOrder"" class=""col-sm-2 control-label"">ردیف:</label>
                    <input type=""number"" class=""form-control"" id=""txtOrder"" placeholder=""ردیف"" />
                </div>
                <div class=""form-gro");
            WriteLiteral(@"up"">
                    <label for=""txtLink"" class=""col-sm-2 control-label"">لینک:</label>
                    <input type=""text"" class=""form-control"" id=""txtLink"" placeholder=""لینک"" />
                </div>
               
                <div class=""form-group"">
                    <label for=""ImageUplodaer"">انتخاب تصویر</label>
                    <div class=""input-group"">
                        <div class=""custom-file"">
                            <input type=""file"" class=""custom-file-input"" id=""ImageUplodaer"">
                            <label class=""custom-file-label btn btn-info"" for=""ImageUplodaer"">انتخاب تصویر</label>
                        </div>

                    </div>
                </div>
            
            </div>
            <div class=""modal-footer btn-group"">
                <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismi");
            WriteLiteral("ss=\"modal\"><i class=\"fa fa-remove\"></i>&nbsp; انصراف</button>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "ed5f9826e3792def2fcf8e2b963edb71ce6d7e927560", async() => {
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
                WriteLiteral("\r\n\r\n");
            }
            );
            WriteLiteral("\r\n");
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
