#pragma checksum "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\CustomerOrder.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d0b30ea6fcf311f82c7f2ba43897fbe8ea7cbad5"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_CustomerOrder), @"mvc.1.0.view", @"/Views/Home/CustomerOrder.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d0b30ea6fcf311f82c7f2ba43897fbe8ea7cbad5", @"/Views/Home/CustomerOrder.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2f9e8c7b510a2e66db691b412bba8c13eba71224", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_CustomerOrder : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("value", "-1", global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/FormScripts/CustomerOrder.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            WriteLiteral("\r\n");
#nullable restore
#line 2 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\CustomerOrder.cshtml"
  
    ViewData["Title"] = "CustomerOrder";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n\r\n<div class=\"content-header\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row mb-2\">\r\n            <div class=\"col-sm-6\">\r\n                <h1 class=\"m-0 text-dark\">");
#nullable restore
#line 11 "C:\Users\Sahand\source\repos\fahim1384\shop-admin-ui\HandCraftBaseUI\Views\Home\CustomerOrder.cshtml"
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

<div class=""card card-primary"" id=""PanelList"">
    <div class=""card-header"">
        <h3 class=""card-title"">لیست سفارشات</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">
        <div class=""row"">
        </div>
        <hr />
        <div class=""row table table-responsive"">
            <div class=""w-100 TblList"">

            </div>
        </div>
    </div>
    <!-- /.card-body -->
</div>

<div class=""card card-info"" style=""display: none;"" id=""DetailesPanel"">
    <div class=""card-header"">
        <h3 class=""card-title"">جزئیات سفارش</h3>
    </div>
    <!-- /.card-header -->
    <div class=""card-body"">

        <div class=""row"">

            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> شماره سفارش</strong>
                <p class=""text-muted"" id=""lblOrderNo"">

                </p>
            </div>
     ");
            WriteLiteral(@"       <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> تاریخ سفارش</strong>
                <p class=""text-muted"" id=""lblOrderDate"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> نوع سفارش</strong>
                <p class=""text-muted"" id=""lblOrderType"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> سفارش دهنده</strong>
                <p class=""text-muted"" id=""lblCustomerName"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> قیمت نهایی</strong>
                <p class=""text-muted"" id=""lblFinalPrice"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> وزن بسته بندی</st");
            WriteLiteral(@"rong>
                <p class=""text-muted"" id=""lblPackingWeight"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> وزن نهایی</strong>
                <p class=""text-muted"" id=""lblFinalWeight"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> وضعیت سفارش</strong>
                <p class=""text-muted"" id=""lblOrderStatus"">

                </p>
            </div>
            <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> وضعیت پرداخت</strong>
                <p class=""text-muted"" id=""lblPaymentStatus"">

                </p>
            </div>
            <div class=""col-md-6 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> آدرس ارسال</strong>
                <p class=""text-muted"" id=""lblAddress"">
                </p>
            </div>
 ");
            WriteLiteral(@"           <div class=""col-md-3 form-group"">
                <strong><i class=""fa fa-book mr-1""></i> شماره تماس</strong>
                <p class=""text-muted"" id=""lblMobile"">
                </p>
            </div>

        </div>

        <div class=""row table table-responsive"">
            <div class=""w-100 TblProductList"">

            </div>
        </div>
        <!-- /.card-body -->
    </div>


    <div class=""card-footer text-center"">
        <button type=""button"" class=""btn btn-warning w-25"" id=""btnBazgasht""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>
    </div>
</div>

<div class=""modal fade"" id=""ChangeStatusModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
    <div class=""modal-dialog"" role=""document"">
        <div class=""modal-content"">
            <div class=""modal-header"">
                <h5 class=""modal-title"" id=""exampleModalLabel"">تغییر وضعیت سفارش</h5>
            </div>
            <div class=""modal-body"">


   ");
            WriteLiteral(@"             <div class=""form-group"">
                   
                    <label for=""txtName"" class=""control-label"">وضعیت سفارش:</label>
                    <select id=""cmbStatus"" dir=""rtl"" class=""js-example-basic-single w-100 form-control"" name=""state"">
                        ");
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("option", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b30ea6fcf311f82c7f2ba43897fbe8ea7cbad59397", async() => {
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

                <div id=""DivStatus20"" style=""display: none;"">
                    <div class=""form-group"">
                        <label for=""txtSentDate"" class=""control-label"">تاریخ ارسال:</label>
                        <input type=""text"" class=""form-control"" id=""txtSentDate"" placeholder=""تاریخ ارسال"" />
                        <input id=""SentDateObserver"" type=""hidden"" />
                    </div>
                    <div class=""form-group"">
                        <label>کد رهگیری :</label>
                        <input id=""txtTrackingCode"" type=""text"" class=""form-control"" placeholder=""کد رهگیری"" />
                    </div>
                </div>

                <div id=""DivStatus21"" style=""display: none;"">
                    <div class=""form-group"">
                        <label for=""txtDeliveridDate"" class=""control-label"">تاریخ تحویل:</label>
                        <input type=""text"" class=""form-control"" id=""txtDeliveridD");
            WriteLiteral(@"ate"" placeholder=""تاریخ تحویل"" />
                        <input id=""DeliveridDateObserver"" type=""hidden"" />
                    </div>
                </div>

            </div>
            <div class=""modal-footer btn-group"">
                <button type=""button"" id=""btnChangeStatus"" class=""btn btn-success w-25""><i class=""fa fa-check""></i>&nbsp; ثبت</button>
                <button type=""button"" class=""btn btn-warning w-25"" data-dismiss=""modal""><i class=""fa fa-remove""></i>&nbsp; انصراف</button>

            </div>
        </div>
    </div>
</div>


");
            DefineSection("scripts", async() => {
                WriteLiteral("\r\n\r\n\r\n    ");
                __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "d0b30ea6fcf311f82c7f2ba43897fbe8ea7cbad512365", async() => {
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
                WriteLiteral("\r\n");
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
