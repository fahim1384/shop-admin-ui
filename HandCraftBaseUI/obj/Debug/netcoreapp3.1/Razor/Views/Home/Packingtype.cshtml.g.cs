#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Packingtype.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "5a1191b8e8b1b85c0c1eeeb084443cc4366dd1e0"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Packingtype), @"mvc.1.0.view", @"/Views/Home/Packingtype.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"5a1191b8e8b1b85c0c1eeeb084443cc4366dd1e0", @"/Views/Home/Packingtype.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Packingtype : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("enctype", new global::Microsoft.AspNetCore.Html.HtmlString("multipart/form-data"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("method", "post", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("action", new global::Microsoft.AspNetCore.Html.HtmlString("/api/Services/UploadImage"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/PackingType.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!-- Content Header (Page header) -->\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 6 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Packingtype.cshtml"
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
        <h3 class=""card-title"">لیست انواع بسته بندی</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
            <div class=""col text-center"">
                <input type=""button"" value=""افزودن بسته بندی جدید"" class=""btn btn-primary"" id=""btnJadid"" />
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

<div class=""card card-primary"" id=""pnlJoziyat"" style=""display: none;"">
    <div class=""card-header"">
        <h3 class=""card-title"">جزئیات</h3>
    </div>
    <!-");
            WriteLiteral(@"- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
            <div class=""col-lg-12 col-md-12 col-sm-12 ImageList"">
                <div class=""row align-items-center"">
                    <div class=""col-lg-10 col-md-10 col-sm-10"">
                        <h4 class=""mx-auto"" id=""imgTitle""></h4>
                    </div>
                    <div class=""col-lg-2 col-md-2 col-sm-2"">
                        <i class=""fa fa-remove fa-2x text-danger"" id=""RemoveImage"" style=""cursor: pointer"" title=""حذف تصویر""></i>
                    </div>

                </div>
                <div class=""row"">
                    <img class=""img-thumbnail MainImage mx-auto d-block"" width=""500px"" height=""500px"" />
                </div>

                <div class=""row mt-4 align-items-center ImageContainer"">

                </div>
            </div>

        </div>
        <div class=""row mt-2 align-content-center"">
            <button type=""button"" class=""btn btn-warning mx-aut");
            WriteLiteral(@"o btnClose""><i class=""fa fa-remove""></i>&nbsp; بازگشت</button>
        </div>


    </div>
    <!-- /.card-body -->
</div>

<div class=""modal fade"" id=""InsertModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog modal-lg"" role=""document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">ثبت/ویرایش محصول</h5>
            </div>
            <div class=""modal-body"">
                <div class=""form-group"">
                    <label for=""txtName"" class=""col-sm-2 control-label"">نام:</label>
                    <input type=""text"" class=""form-control"" id=""txtName"" placeholder=""نام"" />
                </div>
                <div class=""form-group"">
                    <label for=""txtPrice"" class=""col-sm-2 control-label"">قیمت:</label>
                    <input type=""text"" class=""form-control"" id=""txtPrice"" placeholder=""قیمت"" />
              ");
            WriteLiteral(@"  </div>
                <div class=""form-group"">
                    <label for=""txtWeight"" class=""col-sm-2 control-label"">وزن:</label>
                    <input type=""text"" class=""form-control"" id=""txtWeight"" placeholder=""وزن"" />
                </div>

            </div>
            <div class=""modal-footer btn-group"">
                <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

            </div>
        </div>
    </div>
</div>

<div class=""modal fade"" id=""ImageModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("form", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5a1191b8e8b1b85c0c1eeeb084443cc4366dd1e09483", async() => {
                WriteLiteral(@"
        <div class=""modal-dialog"" role=""document"">
            <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">افزودن تصویر جدید</h5>
                </div>
                <div class=""modal-body"">
                    <div class=""form-group"">
                        <label for=""txtOnvanTasvir"" class=""col-sm-3 control-label"">عنوان تصویر:</label>
                        <input type=""text"" class=""form-control"" id=""txtOnvanTasvir"" placeholder=""عنوان تصویر"" />
                    </div>
                    <div class=""form-group"">
                        <label for=""txtTozihat"" class=""col-sm-2 control-label"">توضیحات:</label>
                        <textarea class=""form-control"" cols=""3"" rows=""5"" id=""txtTozihat"" placeholder=""توضیحات""></textarea>
                    </div>
                    <div class=""form-group"">
                        <label for=""exampleInputFile"">انتخاب تصویر</label>
                  ");
                WriteLiteral(@"      <div class=""input-group"">
                            <div class=""custom-file"">
                                <input type=""file"" class=""custom-file-input"" id=""exampleInputFile"">
                                <label class=""custom-file-label btn btn-info"" for=""exampleInputFile"">انتخاب تصویر</label>
                            </div>

                        </div>
                    </div>

                </div>
                <div class=""modal-footer btn-group"">
                    <button type=""button"" id=""btnSabtTasvir"" class=""btn btn-success w-25""><i class=""fa fa-upload""></i>&nbsp; بارگذاری</button>
                    <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

                </div>
            </div>
        </div>
    ");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.FormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.RenderAtEndOfFormTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_RenderAtEndOfFormTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __Microsoft_AspNetCore_Mvc_TagHelpers_FormTagHelper.Method = (string)__tagHelperAttribute_1.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral("\r\n</div>\r\n\r\n\r\n");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "5a1191b8e8b1b85c0c1eeeb084443cc4366dd1e013185", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
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
