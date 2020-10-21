#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Product.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "824c08ccbedc1ffa02bff72af903762506023f22"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Product), @"mvc.1.0.view", @"/Views/Home/Product.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"824c08ccbedc1ffa02bff72af903762506023f22", @"/Views/Home/Product.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Product : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "-1", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/bootstrap-treeview.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/Product.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
        private global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper;
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("<!-- Content Header (Page header) -->\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 6 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\Product.cshtml"
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
        <h3 class=""card-title"">لیست محصولات</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
            <div class=""col text-center"">
                <input type=""button"" value=""افزودن محصول جدید"" class=""btn btn-primary"" id=""btnJadid"" />
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

<div class=""card card-info"">
    <div class=""card-header"">
        <h3 class=""card-title"">ثبت و ویرایش محصول</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
     ");
            WriteLiteral(@"   <div class=""row"">
            <div class=""col-md-3"">
                <div class=""card card-light"">
                    <div class=""card-header"">
                        <h3 class=""card-title"">دسته بندی محصول</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class=""card-body"">

                        <hr />
                        <div class=""row"">
                            <div class=""selectedmenu"" style=""display: none;"">
                                <strong>دسته انتخابی :</strong>
                                <p id=""lblMenuName""></p><br />
                            </div>
                            <div id=""treeview1"" class=""w-100""></div>

                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
            <div class=""col-md-9"">
                <div class=""card card-light"">
                    <div class=""card-header"">
                 ");
            WriteLiteral(@"       <h3 class=""card-title""> مشخصات محصول</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class=""card-body"">

                        <div class=""row"">
                            <div class=""col-md-4 form-group"">
                                <label>نام :</label>
                                <input id=""txtname"" type=""text"" class=""form-control"" placeholder=""نام"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <label>فروشنده :</label>
                                <select id=""cmbSeller"" dir=""rtl"" class=""js-example-basic-single w-100 form-control"" name=""state"">
                                    ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824c08ccbedc1ffa02bff72af903762506023f227763", async() => {
                WriteLiteral("انتخاب کنید");
            }
            );
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.TagHelpers.OptionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper);
            __Microsoft_AspNetCore_Mvc_TagHelpers_OptionTagHelper.Value = (string)__tagHelperAttribute_0.Value;
            __tagHelperExecutionContext.AddTagHelperAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            WriteLiteral(@"
                                </select>
                            </div>
                            <div class=""col-md-4 form-group"">
                                <label>کد محصول :</label>
                                <input id=""txtcoding"" type=""text"" class=""form-control"" placeholder=""کد محصول"" disabled>
                            </div>

                            <div class=""col-md-4 form-group"">
                                <label>قیمت :</label>
                                <input id=""txtprice"" type=""text"" class=""form-control"" placeholder=""قیمت"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <label>تعداد اولیه :</label>
                                <input id=""txtcount"" type=""text"" class=""form-control"" placeholder=""تعداد اولیه"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <label>وزن :</label>
         ");
            WriteLiteral(@"                       <input id=""txtweight"" type=""text"" class=""form-control"" placeholder=""وزن"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <input id=""mellicode"" type=""checkbox"" checked>&nbsp;&nbsp;<label for=""mellicode"">شناسه ملی </label>
                                <input id=""txtmellicode"" type=""text"" class=""form-control"" placeholder=""شناسه ملی"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <input id=""unesco"" type=""checkbox"" checked>&nbsp;&nbsp;<label for=""unesco"">شناسه یونسکو</label>
                                <input id=""txtunescocode"" type=""text"" class=""form-control"" placeholder=""شناسه یونسکو"">

                            </div>
                            <div class=""col-md-4 form-group"">
                                <label>کلمه کلیدی :</label>
                                <input id=""txtkeyword"" type=""text"" c");
            WriteLiteral(@"lass=""form-control"" placeholder=""کلمه کلیدی"">
                            </div>
                            <div class=""col-md-4 form-group"">
                                <label for=""exampleInputFile"">تصویر کاور :</label>
                                <div class=""input-group"">
                                    <div class=""custom-file"">
                                        <input type=""file"" class=""custom-file-input"" id=""exampleInputFile"">
                                        <label class=""custom-file-label btn btn-info"" for=""exampleInputFile"">انتخاب تصویر</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class=""row"">
                            <div class=""col-md-6 form-group"">
                                <label>رنگ ها :</label>
                                <select id=""cmbColor"" dir=""rtl"" class=""js-example-basic-multiple w-100"" name=""state");
            WriteLiteral(@"s[]"" multiple=""multiple"">
                                </select>
                            </div>
                            <div class=""col-md-6 form-group"">
                                <label>نوع بسته بندی :</label>
                                <select id=""cmbPacking"" dir=""rtl"" class=""js-example-basic-multiple w-100"" name=""states[]"" multiple=""multiple"">
                                </select>
                            </div>
                            <div class=""col-md-12 form-group"">
                                <label>محصولات مرتبط :</label>
                                <select id=""cmbrelevent"" dir=""rtl"" class=""js-example-basic-multiple w-100"" name=""states[]"" multiple=""multiple"">
                                </select>
                            </div>

                        </div>
                    </div>
                    <!-- /.card-body -->
                </div>
            </div>
        </div>

        <div class=""card-footer text-center"">
   ");
            WriteLiteral(@"         <button type=""button"" id=""btnSabt"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
            <button type=""button"" class=""btn btn-warning w-25""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

        </div>
    </div>
    <!-- /.card-body -->
</div>

<div class=""card card-warning"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست پارامترها</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">

        <div class=""row"" id=""paramsDiv"">
                       
        </div>
    </div>
    <!-- /.card-body -->
</div>





");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824c08ccbedc1ffa02bff72af903762506023f2214040", async() => {
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
                WriteLiteral("\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "824c08ccbedc1ffa02bff72af903762506023f2215140", async() => {
                }
                );
                __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
                __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
                __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
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
            WriteLiteral("\r\n\r\n");
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
