#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Seller.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "82c4a618fc2c39f7d890342f848da86a4bf4b65c"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Seller), @"mvc.1.0.view", @"/Views/Home/Seller.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"82c4a618fc2c39f7d890342f848da86a4bf4b65c", @"/Views/Home/Seller.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Seller : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/Seller.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 6 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Seller.cshtml"
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

<div class=""card card-primary"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست رنگ ها</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
            <div class=""col text-center"">
                <input type=""button"" value=""افزودن رنگ جدید"" class=""btn btn-primary"" id=""btnJadid"" />
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


<!-- Modal -->
<div class=""modal fade"" id=""InsertModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog"" role=""document"">
  ");
            WriteLiteral(@"      <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">افزودن رنگ جدید</h5>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""txtName"" class=""col-sm-2 control-label"">نام:</label>
                    <input type=""text"" class=""form-control"" id=""txtName"" placeholder=""نام"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtCode"" class=""col-sm-2 control-label"">کد رنگ:</label>
                    <input type=""text"" class=""form-control"" id=""txtCode"" placeholder=""کد رنگ"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtRkey"" class=""col-sm-2 control-label"">Rkey:</label>
                    <input type=""text"" class=""form-control"" id=""txtRkey"" placeholder=""Rkey"" />
                </div>

            </div>
            <div class=""modal-foote");
            WriteLiteral(@"r btn-group"">
                <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

            </div>
        </div>
    </div>
</div>


");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "82c4a618fc2c39f7d890342f848da86a4bf4b65c6683", async() => {
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
                WriteLiteral("\r\n");
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
