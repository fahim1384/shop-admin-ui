#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\CatProduct.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "903f37942719838164cc1ed532b01f67948b1854"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_CatProduct), @"mvc.1.0.view", @"/Views/Home/CatProduct.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"903f37942719838164cc1ed532b01f67948b1854", @"/Views/Home/CatProduct.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_CatProduct : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/bootstrap-treeview.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/CatProduct.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("\r\n\r\n\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 8 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\CatProduct.cshtml"
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
        <h3 class=""card-title"">لیست دسته بندی محصولات</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">

        <hr />
        <div class=""row"">
            <div class=""col-sm-4"">
                <div id=""treeview1""");
            BeginWriteAttribute("class", " class=\"", 754, "\"", 762, 0);
            EndWriteAttribute();
            WriteLiteral(@"></div>
            </div>
            <div class=""col-sm-6"">
                <div class=""selectedmenu"" style=""display: none;"">
                    <strong>دسته انتخابی :</strong>
                    <p id=""lblMenuName""></p><br />
                    <div class=""row"">
                        <button type=""button"" id=""btnAdd"" class=""btn btn-success ""><i class=""fa fa-plus""></i>&nbsp; افزودن زیر دسته</button> &nbsp;&nbsp;&nbsp;
                        <button type=""button"" id=""btnEdit"" class=""btn btn-primary""><i class=""fa fa-edit""></i>&nbsp; ویرایش</button> &nbsp;&nbsp;&nbsp;
                        <button type=""button"" id=""btnRemove"" class=""btn btn-danger ""><i class=""fa fa-trash""></i>&nbsp; حذف</button>&nbsp;&nbsp;&nbsp;
                        <button type=""button"" id=""btnAddParams"" class=""btn btn-warning ""><i class=""fa fa-book""></i>&nbsp; افزودن پارامتر</button>
                    </div>
                </div>
                <div class=""nonselectedmenu"">
                    <p>برای افزودن زیر");
            WriteLiteral(@"دسته و ویرایش و حذف دسته ای را انتخاب کنید.</p><br />
                    <div class=""row"">
                        <button type=""button"" id=""btnAddMain"" class=""btn btn-success ""><i class=""fa fa-plus""></i>&nbsp; افزودن دسته</button> &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.card-body -->
</div>

<!-- Modal -->
<div class=""modal fade"" id=""exampleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog"" role=""document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">افزودن دسته جدید</h5>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""txtName"" class=""col-sm-2 control-label"">نام:</label>
                    <input type=""text"" class=""form-control"" id=""txtName"" placeholder=""نام"" />");
            WriteLiteral(@"
                </div>
                <div class=""form-group"">
                    <label for=""txtCodding"" class=""col-sm-2 control-label"">کدینگ:</label>
                    <input type=""text"" class=""form-control"" id=""txtCodding"" placeholder=""کدینگ"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtRkey"" class=""col-sm-2 control-label"">Rkey:</label>
                    <input type=""text"" class=""form-control"" id=""txtRkey"" placeholder=""Rkey"" />
                </div>
                <div class=""form-group"">
                    <label for=""exampleInputFile"">آیکون :</label>
                    <div class=""input-group"">
                        <div class=""custom-file"">
                            <input type=""file"" class=""custom-file-input"" id=""exampleInputFile"">
                            <label class=""custom-file-label btn btn-info"" for=""exampleInputFile"">انتخاب تصویر</label>
                        </div>

                    </div>
       ");
            WriteLiteral(@"         </div>

                <div class=""form-group"">
                    <label for=""txtURL"" class=""col-sm-2 control-label"">URL:</label>
                    <input type=""text"" class=""form-control"" dir=""ltr"" id=""txtURL"" placeholder=""URL"" />
                </div>

            </div>
            <div class=""modal-footer btn-group"">
                <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

            </div>
        </div>
    </div>
</div>

<div class=""card card-success"" id=""ParametersDiv"" style=""display: none;"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست پارامتر ها</h3>
    </div>
    <div class=""card-body"">
        <div class=""row"">
            <hr>

            <div class=""col-sm-6"">
                <div id=""treeview-checkable""");
            BeginWriteAttribute("class", " class=\"", 4836, "\"", 4844, 0);
            EndWriteAttribute();
            WriteLiteral(@"></div>
            </div>
            <div class=""col-sm-6"">
                <button type=""button"" id=""btnAddparams"" class=""btn btn-success ""><i class=""fa fa-plus""></i>&nbsp; ثبت انخاب شده ها</button> &nbsp;&nbsp;&nbsp;
                <button type=""button"" id=""btncloseparam"" class=""btn btn-warning""><i class=""fa fa-remove""></i>&nbsp; بازگشت</button> &nbsp;&nbsp;&nbsp;
            </div>

        </div>
    </div>
</div>

");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "903f37942719838164cc1ed532b01f67948b185410140", async() => {
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
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "903f37942719838164cc1ed532b01f67948b185411240", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
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
