
let Id = 0;
let catProductId = 0;
let productColorId = 0;
let productPackingTypeId = 0;
let productPackingImageId = 0;

//================================================================================
const GetSellerList = () => {


    let html = ` <option coding="" value="-1">انتخاب کنید</option>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Seller/GetSellerList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {
                html += ` <option coding="${item.sellerCode}" value="${item.id}">${item.name + " " + item.fname}</option>`;
            });



            $('#cmbSeller').html(html);



        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {


        }
    });
}

const GetCatProductList = () => {


    let html = ` <option coding="" value="-1">انتخاب کنید</option>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("CatProduct/GetCatProductListForCmb"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            jQuery.each(response, (i, item) => {
                html += ` <option coding="${item.coding}" value="${item.id}">${item.name}</option>`;
            });



            $('#cmbCatProduct').html(html);
        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {


        }
    });
}
//================================================================================


//================================================================================
const GetPackingTypeList = () => {


    let html = ` <option value="-1">انتخاب کنید</option>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("PackingType/GetPackingTypeList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                html += `<option value="${item.id}">${item.name}</option>`;


            });



            $('#cmbPacking').html(html);


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

        }
    });
}

const GetPackingTypeByProductId = () => {

    let html = `<table id="tblPacking" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>وزن</th>
                    <th>قیمت</th>
                    <th>تصاویر</th>
                    <th>ویرایش</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductPacking/GetPackingTypeByProductId?productId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.packingName}</td>
                            <td>${item.weight}</td>
                            <td>${item.price}</td>
                            <td class="tdTextCenter"><span class="PhotoPacking" productPackingTypeId="${item.id}" ><i class="fa fa-photo text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="EditPacking" productPackingTypeId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                       </tr>`;
            });



            $('.TblPackingList').html(html);
            $("#PackingPanel").show();
            $("#PanelList").hide();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('tblPacking');
            $('.js-example-basic-single').select2();
        }
    });
}

const InsertProductPackingType = () => {

    const productPackingType = {
        Id: 0,
        ProductId: Id,
        PackinggTypeId: parseInt($("#cmbPacking").val()),
        Price: parseInt($("#txtPackingPrice").val()),
        Weight: parseInt($("#txtPackingWeight").val()),
        CuserId: null,
        Cdate: null,
        DuserId: null,
        Ddate: null,
        MuserId: null,
        Mdate: null,
        DaUserId: null,
        DaDate: null


    };


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("ProductPacking/InsertProductPackingType"),
        data: JSON.stringify(productPackingType),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "json",
        success: (response) => {
            EndLoader();
            Swal.fire(
                "ثبت شد !",
                "نوع بسته بندی با موفقیت ثبت شد",
                "success"
            );
            GetPackingTypeByProductId();
            productPackingTypeId = 0;
            $("#txtPackingPrice").val("");
            $("#txtPackingWeight").val("");
            $("#cmbPacking").val(-1);
            $("#cmbPacking").trigger("change");


        },
        error: (response) => {
            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: "error",
                title: "خطا در ثبت نوع بسته بندی محصول !",
                text: response.responseText

            });

        },
        complete: () => {
            EndLoader();
        }
    });
};

const GetProductPackingById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductPacking/GetProductPackingById?productPackingTypeId=${productPackingTypeId}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            $("#txtPackingPrice").val(response.price);
            $("#txtPackingWeight").val(response.weight);
            $("#cmbPacking").val(response.packinggTypeId);
            $("#cmbPacking").trigger("change");


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}

const UpdateProductPackingType = () => {

    const productPackingType = {
        Id: productPackingTypeId,
        ProductId: Id,
        PackinggTypeId: parseInt($("#cmbPacking").val()),
        Price: parseInt($("#txtPackingPrice").val()),
        Weight: parseInt($("#txtPackingWeight").val()),
        CuserId: null,
        Cdate: null,
        DuserId: null,
        Ddate: null,
        MuserId: null,
        Mdate: null,
        DaUserId: null,
        DaDate: null


    };



    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl("ProductPacking/UpdateProductPackingType"),
        data: JSON.stringify(productPackingType),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                "ثبت شد !",
                "نوع بسته بندی با موفقیت بروز رسانی شد",
                "success"
            );
            GetPackingTypeByProductId();
            productPackingTypeId = 0;
            $("#txtPackingPrice").val("");
            $("#txtPackingWeight").val("");
            $("#cmbPacking").val(-1);
            $("#cmbPacking").trigger("change");


        },
        error: (response) => {
            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: "error",
                title: "خطا در ثبت بسته بندی محصول !",
                text: response.responseText

            });

        },
        complete: () => {
            EndLoader();
        }
    });
};

const GetProductPackingImageList = () => {


    let html = `<p>تصویری جهت نمایش وجود ندارد !</p>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductPacking/GetProductPackingImageList?productPackingTypeId=${productPackingTypeId}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "json",
        success: (response) => {

            if (response.length > 0) {
                html = ``;
            }

            jQuery.each(response, (i, item) => {

                html += `<div class="col-md-4">
                        <div class="card" style="width: 18rem;"><img class="card-img-top" src="${item.imageFileUrl}" alt="Card image cap" style="height:300px;" >
                            <div class="card-body text-center">
                                <p class="card-text">${item.title}</p>
                                <button type="button"  imageId="${item.id}" class="btn btn-danger btnRemovePackingImage"><i class="fa fa-trash"></i>&nbsp; حذف</button>
                            </div>
                         </div>
                        </div>`;
            });



            $('#packageImagelistss').html(html);

        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: () => {


        }
    });

};

const UploadPackingImage = () => {


    let productPackingTypeImage = {

        Id: 0,
        ProductPackingTypeId: productPackingTypeId,
        Title: $("#txtPackingImageTitle").val(),
        Decription: $("#txtPackingImageDesc").val(),
        ImageFileUrl: "",
        CuserId: null,
        Cdate: null,
        DuserId: null,
        Ddate: null,
        MuserId: null,
        Mdate: null,
        DaUserId: null,
        DaDate: null,

    }


    var myfile = $("#PackingImageInputFile");
    var formData = new FormData();

    formData.append("ProductPackingTypeImage", JSON.stringify(productPackingTypeImage));
    formData.append("PackingTypeImage", myfile[0].files[0]);


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl(`ProductPacking/UploadPackingImage`),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {
            EndLoader();

            Swal.fire(
                'ثبت شد !',
                'فایل با موفقیت ثبت شد',
                'success'
            );

            GetProductPackingImageList();

            $('#txtPackingImageTitle').val('');
            $('#txtPackingImageDesc').val('');
            $('#PackingImageInputFilelbl').text('انتخاب فایل');
            $("#PackingImageInputFile").val('');


        },
        error: function (response) {


            EndLoader();
            let textalert = response.responseText;
            Swal.fire({
                icon: 'error',
                title: 'خطا در بازگذاری !',
                text: textalert

            });

        },
        complete: function () {

        }
    });
}

const DeleteProductPackingImage = (productimageId) => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl("ProductPacking/DeleteProductPackingImage?productPackingImageId=" + productimageId),
        data: "",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {

            Swal.fire(
                'حدف شد !',
                'فایل مورد نظر حذف شد',
                'success'
            );
            GetProductPackingImageList();
            EndLoader();
        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);
            EndLoader();

        },
        complete: function () {



        }
    });

}
//================================================================================


//================================================================================
const GetProductParamList = () => {


    let html = ``;


    jQuery.ajax({
        type: "Get",
        url: SetUrl(`Product/GetProductParamList?productId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {


                html += `<div class="col-md-3 form-group">
                                <label>${item.parameterName} :</label>`;
                if (item.value == null) {

                    html += `<input id="txtParam${item.id}" type="text" catId="${item.catProductParametersId}" paramId="${item.id}" class="form-control paramtext" placeholder="${item.parameterName}" />
                              </div>`;
                } else {
                    html += `<input id="txtParam${item.id}" type="text" catId="${item.catProductParametersId}" paramId="${item.id}" class="form-control paramtext" placeholder="${item.parameterName}" value="${item.value}" />
                              </div>`;
                }


            });



            $('#paramsDiv').html(html);
            $("#ParamPanel").show();
            $("#PanelList").hide();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

        }
    });
}

const GetProductStatusList = () => {


    let html = ` <option value="-1">انتخاب کنید</option>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Product/GetProductStatusList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {
                html += ` <option value="${item.id}">${item.name}</option>`;
            });



            $('#cmbStatus').html(html);



        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

        }
    });
}
//================================================================================


//================================================================================
const GetProductList = () => {


    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>دسته بندی محصول</th>
                    <th>فروشنده</th>
                    <th>کدینگ</th>
                    <th>قیمت</th>
                    <th>وزن</th>
                    <th>رنگها</th>
                    <th>بسته بندی</th>
                    <th>پارامترها</th>
                    <th>فیلم و عکس</th>
                    <th>تخفیفات</th>
                    <th>ویرایش</th>
                    <th>حدف</th>
                  </tr>
               </thead>
             <tbody>`;
    let cmbrelevent = ``;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Product/GetProductList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                cmbrelevent += ` <option value="${item.id}">${item.name}</option>`;

                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.catProductName}</td>
                             <td>${item.seller}</td>
                             <td>${item.coding}</td>
                             <td>${item.price}</td>
                             <td>${item.weight}</td>                           
                            <td class="tdTextCenter"><span class="Colors" productId="${item.id}" ><i class="fa fa-paint-brush" style="color:#bb34bd;"></i></span></td>
                            <td class="tdTextCenter"><span class="Packing" productId="${item.id}" ><i class="fa fa-gift text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Parameters" catProductId="${item.catProductId}" productId="${item.id}" ><i class="fa fa-book text text-primary"></i></span></td>
                            <td class="tdTextCenter"><span class="Photos" productId="${item.id}" ><i class="fa fa-file-image-o text text-warning"></i></span></td> 
                            <td class="tdTextCenter"><span class="Offer" productId="${item.id}" ><i class="fa fa-percent text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Edit" productId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" productId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
                       </tr>`;
            });

            html += `</tbody></table>`;

            $('.TblList').html(html);
            $('#cmbrelevent').html(cmbrelevent);
            $('#cmbrelevent').select2();

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('example2');

        }
    });
}

const InsertProduct = () => {


    let releventList = [];
    let releven = $("#cmbrelevent").select2("val");
    for (var i = 0; i < releven.length; i++) {
        releventList.push(parseInt(releven[i]));
    }

    let product = {

        Id: 0,
        CatProductId: parseInt($("#cmbCatProduct").val()),
        SellerId: parseInt($("#cmbSeller").val()),
        ProductMeterId: null,
        Name: $("#txtname").val(),
        enName: "",
        rkey: 0,
        Coding: parseInt($("#txtCodding").val()),
        Price: parseInt($("#txtprice").val()),
        producePrice: 0,
        FinalStatusId: parseInt($("#cmbStatus").val()),
        FirstCount: parseInt($("#txtcount").val()),
        Count: parseInt($("#txtcount").val()),
        coverImageUrl: "",
        coverImageHurl: null,
        seenCount: null,
        lastSeenDate: null,
        Description: $('#txtdesc').val(),
        KeyWords: $("#txtkeyword").val(),
        aparatUrl: null,
        Weight: parseFloat($("#txtweight").val()),
        produceDuration: null,
        OredrDuration: parseInt($("#txtOrderDuration").val()),
        UnescoFlag: $("#unesco").prop('checked'),
        UnescoCode: parseInt($("#txtunescocode").val()),
        MelliFlag: $("#mellicode").prop('checked'),
        MelliCode: parseInt($("#txtmellicode").val()),
        AuthorName: $("#txtAuthor").val(),
        MetaTitle: $("#txtMetaData").val(),
        MetaDescription: $("#txtMetadesc").val(),
        VirtualProduct: $("#virtualCheck").prop("checked"),
        DownloadLink: "",
        CompareDescription: $('#txtAuthor').val(),
        cuserId: null,
        cdate: null,
        duserId: null,
        ddate: null,
        muserId: null,
        mdate: null,
        daUserId: null,
        daDate: null,
        finalStatus: null,
        productCatProductParameters: [],
        productColor: [],
        productLanguage: [],
        productPackingType: [],
        productStatusLog: [],
        relatedProductDestinProduct: [],
        relatedProductOriginProduct: []

    }


    var myfile = $("#exampleInputFile");
    var myfile1 = $("#VirtualInputFile");


    var formData = new FormData();


    formData.append('CoverImage', myfile[0].files[0]);
    formData.append('DownloadLink', myfile[0].files[0]);
    formData.append('Product', JSON.stringify(product));
    formData.append('releventList', JSON.stringify(releventList));


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl(`Product/InsertProduct`),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {

            EndLoader();


            Swal.fire(
                'ثبت شد !',
                'محصول با موفقیت ثبت شد',
                'success'
            );

            setTimeout(function () { window.location.reload(); });


        },
        error: function (response) {


            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            let textalert = response.responseText;
            Swal.fire({
                icon: 'error',
                title: 'خطا در بازگذاری !',
                text: textalert

            });

        },
        complete: function () {

        }
    });

}

const DeleteProduct = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`Product/DeleteProduct?productId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            Swal.fire(
                'ثبت شد !',
                'محصول با موفقیت حذف شد',
                'success'
            );
            GetProductList();

        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });

}

const UpdateParams = () => {


    let paramList = [];
    $(".paramtext").each(function (item, i) {

        let param = {
            id: parseInt($(this).attr("paramId")),
            catProductParametersId: parseInt($(this).attr("catId")),
            productId: Id,
            parameterName: '',
            value: $(this).val()
        }
        paramList.push(param);

    });



    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl("Product/UpdateProductParam"),
        data: JSON.stringify(paramList),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'اطلاعات با موفقیت ثبت شد',
                'success'
            );

            $("#ParamPanel").hide();
            $("#PanelList").show();
            GetProductList();

        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }

        },
        complete: () => {

        }
    });



}
//================================================================================


//================================================================================
const GetImageListByProductId = () => {


    let html = ``;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductImage/GetImageListByProductId?productId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                html += `<div class="col-md-4">
                        <div class="card" style="width: 18rem;">`;
                if (item.fileType === 1) {

                    html += ` <img class="card-img-top" src="${item.imageUrl}" alt="Card image cap" style="height:300px;" >`;
                }

                else {

                    html += `<video id="Video" src="${item.imageUrl}" class="embed-responsive-item" controls style="height:300px;">
                                <source src="/video/video.mp4" type="video/mp4" />
                                <source src="/video/video.ogv" type="video/ogg" />
                                <source src="/video/video.webm" type="video/webm" />
                            </video>`;
                }


                html += `       <div class="card-body text-center">
                                <p class="card-text">${item.title}</p>
                                <button type="button"  imageId="${item.id}" class="btn btn-danger btnRemoveImage"><i class="fa fa-trash"></i>&nbsp; حذف</button>
                            </div>
                         </div>
                        </div>`;
            });



            $('#FileDiv').html(html);
            $("#ImagePanel").show();
            $("#PanelList").hide();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {


        }
    });
}

const UploadImage = () => {


    var myfile = $("#SmallInputFile");
    var formData = new FormData();

    formData.append('ImageFile', myfile[0].files[0]);


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl(`ProductImage/UploadImage?productId=${Id}&type=${$('#CmbFileType').val()}&title=${$('#txtOnvanTasvir').val()}`),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {
            EndLoader();

            Swal.fire(
                'ثبت شد !',
                'فایل با موفقیت ثبت شد',
                'success'
            );

            GetImageListByProductId();

            $('#txtOnvanTasvir').val('');
            $('#CmbType').val(1);
            $('.custom-file-label').text('انتخاب فایل');
            $("#SmallInputFile").val('');


        },
        error: function (response) {


            EndLoader();
            let textalert = response.responseText;
            Swal.fire({
                icon: 'error',
                title: 'خطا در بازگذاری !',
                text: textalert

            });

        },
        complete: function () {

        }
    });
}

const DeleteProductImage = (imageId) => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl("ProductImage/DeleteProductImage?productImageId=" + imageId),
        data: "",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {

            Swal.fire(
                'حدف شد !',
                'فایل مورد نظر حذف شد',
                'success'
            );
            GetImageListByProductId();
            EndLoader();
        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);
            EndLoader();

        },
        complete: function () {



        }
    });

}
//================================================================================


//================================================================================
const GetColorList = () => {


    let html = ` <option value="-1">انتخاب کنید</option>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Color/GetColorList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {
                html += ` <option value="${item.id}">${item.name}</option>`;
            });



            $('#cmbColor').html(html);



        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {


        }
    });
}

const GetColorListByProductId = () => {


    let html = `<table id="tblColor" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>تعداد</th>
                    <th>قیمت</th>
                    <th>ویرایش</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductColor/GetColorListByProductId?productId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.colorName}</td>
                            <td>${item.count}</td>
                             <td>${item.price}</td>
                            <td class="tdTextCenter"><span class="EditColor" productColorId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                       </tr>`;
            });



            $('.TblColorList').html(html);
            $("#ColorPanel").show();
            $("#PanelList").hide();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('tblColor');
            $('.js-example-basic-single').select2();
        }
    });
}

const InsertProductColor = () => {

    const productColor = {
        Id: 0,
        ProductId: Id,
        ColorId: parseInt($("#cmbColor").val()),
        Price: parseInt($("#txtColorPrice").val()),
        ProducePrice: null,
        ProduceDuration: null,
        Count: parseInt($("#txtColorCount").val()),
        Coding: null,
        FinalStatusId: null,
        CuserId: null,
        Cdate: null,
        DuserId: null,
        Ddate: null,
        MuserId: null,
        Mdate: null,
        DaUserId: null,
        DaDate: null


    };


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("ProductColor/InsertProductColor"),
        data: JSON.stringify(productColor),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "json",
        success: (response) => {
            EndLoader();
            Swal.fire(
                "ثبت شد !",
                "رنگ با موفقیت ثبت شد",
                "success"
            );
            GetColorListByProductId();
            productColorId = 0;
            $("#txtColorCount").val("");
            $("#txtColorPrice").val("");
            $("#cmbColor").val(-1);
            $("#cmbColor").trigger("change");


        },
        error: (response) => {
            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: "error",
                title: "خطا در ثبت رنگ محصول !",
                text: response.responseText

            });

        },
        complete: () => {
            EndLoader();
        }
    });
};

const GetProductColorById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`ProductColor/GetProductColorById?productColorId=${productColorId}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            $("#txtColorCount").val(response.count);
            $("#txtColorPrice").val(response.price);
            $("#cmbColor").val(response.colorId);
            $("#cmbColor").trigger("change");


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}

const UpdateProductColor = () => {

    const productColor = {
        Id: productColorId,
        ProductId: Id,
        ColorId: parseInt($("#cmbColor").val()),
        Price: parseInt($("#txtColorPrice").val()),
        ProducePrice: null,
        ProduceDuration: null,
        Count: parseInt($("#txtColorCount").val()),
        Coding: null,
        FinalStatusId: null,
        CuserId: null,
        Cdate: null,
        DuserId: null,
        Ddate: null,
        MuserId: null,
        Mdate: null,
        DaUserId: null,
        DaDate: null


    };


    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl("ProductColor/UpdateProductColor"),
        data: JSON.stringify(productColor),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                "ثبت شد !",
                "رنگ با موفقیت بروز رسانی شد",
                "success"
            );
            GetColorListByProductId();
            productColorId = 0;
            $("#txtColorCount").val("");
            $("#txtColorPrice").val("");
            $("#cmbColor").val(-1);
            $("#cmbColor").trigger("change");


        },
        error: (response) => {
            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: "error",
                title: "خطا در ثبت رنگ محصول !",
                text: response.responseText

            });

        },
        complete: () => {
            EndLoader();
        }
    });
};
//================================================================================


$(document).ready(() => {

    ShowLoader();
    GetProductList();
    GetCatProductList();
    EndLoader();


    $(".editor").wysihtml5({
        toolbar: {
            "font-styles": true, //Font styling, e.g. h1, h2, etc. Default true
            "emphasis": true, //Italics, bold, etc. Default true
            "lists": true, //(Un)ordered lists, e.g. Bullets, Numbers. Default true
            "html": false, //Button which allows you to edit the generated HTML. Default false
            "link": true, //Button to insert a link. Default true
            "image": true, //Button to insert an image. Default true,
            "color": false, //Button to change color of font  
            "blockquote": true, //Blockquote  
            "size": "sm", //default: none, other options are xs, sm, lg
            "fa": true
        }
    });

    $(document.body).on("change", "#exampleInputFile", function () {


        if ($(this).val() == "") {
            $(".custom-file-label").text("انتخاب تصویر");
        }
        else {
            var myfile = $("#exampleInputFile");

            $(".custom-file-label").text(myfile[0].files[0].name);

        }


    });

    $("#mellicode").on("ifChecked", function (event) {
        $("#txtmellicode").prop("disabled", 0);
        $("#txtmellicode").val("");
    });

    $("#unesco").on("ifChecked", function (event) {
        $("#txtunescocode").prop("disabled", 0);
        $("#txtunescocode").val("");
    });

    $("#mellicode").on("ifUnchecked", function (event) {
        $("#txtmellicode").prop("disabled", 1);
        $("#txtmellicode").val("");
    });

    $("#unesco").on("ifUnchecked", function (event) {
        $("#txtunescocode").prop("disabled", 1);
        $("#txtunescocode").val("");
    });

    $("#virtualCheck").on("ifUnchecked", function (event) {
        $("#cmbSeller").val(-1);
        $("#cmbSeller").prop("disabled", 0);
        $("#divVirtual").hide();
        $("#divSeller").show();
    });

    $("#virtualCheck").on("ifChecked", function (event) {
        $("#cmbSeller").val(-1);
        $("#cmbSeller").prop("disabled", 1);
        $("#divSeller").hide();
        $("#divVirtual").show();
    });

    $(document.body).on("click", ".Parameters", function () {


        Id = parseInt($(this).attr("productId"));
        GetProductParamList();

    });

    $(document.body).on("click", "#btnSabt", () => {

        let textalert = "";

        if (parseInt($("#cmbCatProduct").val()) == -1) {
            textalert += `دسته بندی را انتخاب نمایید`;
        }
        else if ($("#txtname").val().length == 0) {
            textalert += `عنوان را وارد نمایید`;
        }
        else if (($("#cmbSeller").val() == -1) && ($("#virtualCheck").prop("checked") == false)) {
            textalert += `فروشنده را انتخاب نمایید !`;
        }
        else if ($("#cmbStatus").val() == -1) {
            textalert += `وضعیت کالا را انتخاب نمایید`;
        }
        else if ($("#txtprice").val().length == 0) {
            textalert += `قیمت را وارد نمایید`;
        }
        else if ($("#txtcount").val().length == 0) {
            textalert += `تعداد را وارد نمایید`;
        }
        else if ($("#txtweight").val().length == 0) {
            textalert += `وزن را وارد نمایید`;
        }
        else if ($("#exampleInputFile").val() === "") {
            textalert += `تصویر کاور را انتخاب نمایید`;
        }



        if (textalert !== "") {

            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        } else {
            if (Id === 0) {
                InsertProduct();
            } else {
                UpdateColor();
            }

        }


    });

    $(document.body).on("click", "#btnJadid", () => {


        GetSellerList();
        GetProductStatusList();
        GetCatProductList();
        $("#EditPanel").show();
        $("#PanelList").hide();
        $(".js-example-basic-multiple").select2();
        $(".js-example-basic-single").select2();

    });

    $(document.body).on("click", "#btnBazgasht", () => {

        $("#EditPanel").hide();
        $("#PanelList").show();

    });

    $(document.body).on("click", "#btnBazgashtParams", () => {

        $("#ParamPanel").hide();
        $("#PanelList").show();

    });

    $(document.body).on("click", "#btnSabtParams", () => {

        UpdateParams();

    });

    $(document.body).on("click", ".Photos", function () {


        Id = parseInt($(this).attr("productId"));
        GetImageListByProductId();

    });

    $(document.body).on("click", "#btnSabtImage", () => {


        let textalert = "";

        if ($("#txtOnvanTasvir").val().length === 0) {
            textalert += `عنوان را وارد نمایید`;
        }
        else if ($("#SmallInputFile").val().length === 0) {
            textalert += `فایلی جهت بارگزاری انتخاب نشده است !`;
            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        }


        if (textalert !== "") {

            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        } else {

            UploadImage();
        }


    });

    $(document.body).on("click", ".btnRemoveImage", function () {


        let imageId = parseInt($(this).attr("imageId"));
        Swal.fire({
            title: "آیا اطمینان دارید؟",
            text: "بعد از حذف امکان بازگردانی وجود ندارد!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "خیر",
            confirmButtonText: "بله !"
        }).then((result) => {
            if (result.value) {
                DeleteProductImage(imageId);
            }
        });


    });

    $(document.body).on("change", "#SmallInputFile", function () {


        if ($(this).val() == "") {
            $(".custom-file-label").text("انتخاب فایل");
        }
        else {
            var myfile = $("#SmallInputFile");

            $(".custom-file-label").text(myfile[0].files[0].name);

        }


    });

    $(document.body).on("change", "#VirtualInputFile", function () {


        if ($(this).val() == "") {
            $("#VirtualInputFilelbl").text("انتخاب فایل");
        }
        else {
            var myfile = $("#VirtualInputFile");

            $("#VirtualInputFilelbl").text(myfile[0].files[0].name);

        }


    });

    $(document.body).on("click", "#btnBazgashtImage", () => {

        $("#ImagePanel").hide();
        $("#PanelList").show();

    });

    $(document.body).on("click", ".Trash", function () {

        Id = parseInt($(this).attr("productId"));

        Swal.fire({
            title: "آیا اطمینان دارید؟",
            text: "بعد از حذف امکان بازگردانی وجود ندارد!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "خیر",
            confirmButtonText: "بله !"
        }).then((result) => {
            if (result.value) {
                DeleteProduct();
            }
        });


    });

    $(document.body).on("click", ".Colors", function () {


        Id = parseInt($(this).attr("productId"));
        GetColorList();
        GetColorListByProductId();

    });

    $(document.body).on("click", "#btnSabtColor", function () {

        let textalert = "";

        if ($("#cmbColor").val() == -1) {
            textalert += `رنگ را انتخاب نمایید`;
        }
        else if ($("#txtColorPrice").val().length == 0) {
            textalert += `قیمت را وارد نمایید`;
        }
        else if (parseInt($("#txtColorPrice").val()) == NaN) {
            textalert += `قیمت باید عدد باشد`;
        }
        else if ($("#txtColorCount").val().length == 0) {
            textalert += `تعداد را وارد نمایید`;
        }
        else if (parseInt($("#txtColorCount").val()) == NaN) {
            textalert += `تعداد باید عدد باشد`;
        }



        if (textalert !== "") {

            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        } else {
            if (productColorId === 0) {
                InsertProductColor();
            } else {
                UpdateProductColor();
            }

        }

    });

    $(document.body).on("click", "#btnBazgashtColor", function () {

        Id = 0;
        catProductId = 0;
        productColorId = 0;
        $("#txtColorCount").val("");
        $("#txtColorPrice").val("");
        $("#cmbColor").val(-1);
        $("#cmbColor").trigger("change");
        $("#ColorPanel").hide();
        $("#PanelList").show();


    });

    $(document.body).on("click", ".EditColor", function () {


        productColorId = parseInt($(this).attr("productColorId"));
        GetProductColorById();


    });

    $(document.body).on("change", "#cmbCatProduct", function () {

        let catcoding = $("#cmbCatProduct option:selected").attr("coding");
        let sellercoding = $("#cmbSeller option:selected").attr("coding");
        let pishCode = catcoding + sellercoding;
        $("#txtCodding").val(catcoding + sellercoding);

    });

    $(document.body).on("change", "#cmbSeller", function () {

        let catcoding = $("#cmbCatProduct option:selected").attr("coding");
        if (catcoding === "undefined" || catcoding == null) {
            catcoding = "";
        }
        let sellercoding = $("#cmbSeller option:selected").attr("coding");
        if (sellercoding === "undefined" || sellercoding == null) {
            sellercoding = "";
        }
        let pishCode = catcoding + sellercoding;
        $("#txtCodding").val(pishCode);

    });

    $(document.body).on("click", ".Packing", function () {


        Id = parseInt($(this).attr("productId"));
        GetPackingTypeList();
        GetPackingTypeByProductId();

    });

    $(document.body).on("click", "#btnSabtPacking", function () {

        let textalert = "";

        if ($("#cmbPacking").val() == -1) {
            textalert += `نوع بسته بندی را انتخاب نمایید`;
        }
        else if ($("#txtPackingPrice").val().length == 0) {
            textalert += `قیمت را وارد نمایید`;
        }
        else if (parseInt($("#txtColorPrice").val()) == NaN) {
            textalert += `قیمت باید عدد باشد`;
        }
        else if ($("#txtPackingWeight").val().length == 0) {
            textalert += `وزن را وارد نمایید`;
        }
        else if (parseInt($("#txtPackingWeight").val()) == NaN) {
            textalert += `وزن باید عدد باشد`;
        }



        if (textalert !== "") {

            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        } else {
            if (productPackingTypeId === 0) {
                InsertProductPackingType();
            } else {
                UpdateProductPackingType();
            }

        }

    });

    $(document.body).on("click", "#btnBazgashtPacking", function () {

        Id = 0;
        catProductId = 0;
        productPackingTypeId = 0;
        $("#txtPackingPrice").val("");
        $("#txtPackingWeight").val("");
        $("#cmbPacking").val(-1);
        $("#cmbPacking").trigger("change");
        $("#PackingPanel").hide();
        $("#PanelList").show();


    });

    $(document.body).on("click", ".EditPacking", function () {


        productPackingTypeId = parseInt($(this).attr("productPackingTypeId"));
        GetProductPackingById();


    });

    $(document.body).on("click", ".PhotoPacking", function () {


        productPackingTypeId = parseInt($(this).attr("productPackingTypeId"));
        GetProductPackingImageList();

        $("#txtPackingImageTitle").val("");
        $("#txtPackingImageDesc").val("");
        $("#PackingImageInputFilelbl").text("انتخاب فایل");
        $("#PackingImageInputFile").val("");
        $("#PackingImageDiv").show();
        $("#PackingPanel").hide();

    });

    $(document.body).on("click", "#btnBazgashtPackingImage", function () {


        productPackingImageId = 0;
        $("#txtPackingImageTitle").val("");
        $("#txtPackingImageDesc").val("");
        $("#PackingImageInputFilelbl").text("انتخاب فایل");
        $("#PackingImageInputFile").val("");
        $("#PackingImageDiv").hide();
        $("#PackingPanel").show();

    });

    $(document.body).on("change", "#PackingImageInputFile", function () {


        if ($(this).val() == "") {
            $("#PackingImageInputFilelbl").text("انتخاب فایل");
        }
        else {
            var myfile = $("#PackingImageInputFile");

            $("#PackingImageInputFilelbl").text(myfile[0].files[0].name);

        }


    });

    $(document.body).on("click", "#btnSabtPackingImage", function () {

        UploadPackingImage();
    });

    $(document.body).on("click", ".btnRemovePackingImage", function () {


        let imageId = parseInt($(this).attr("imageId"));
        Swal.fire({
            title: "آیا اطمینان دارید؟",
            text: "بعد از حذف امکان بازگردانی وجود ندارد!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "خیر",
            confirmButtonText: "بله !"
        }).then((result) => {
            if (result.value) {
                DeleteProductPackingImage(imageId);
            }
        });


    });

});