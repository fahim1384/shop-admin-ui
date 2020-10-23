
let Id = 0;
let catProductId = 0;


const GetProductList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>دسته بندی محصول</th>
                    <th>فروشنده</th>
                    <th>کدینگ</th>
                    <th>قیمت</th>
                    <th>وزن</th>
                    <th>پارامترها</th>
                    <th>فیلم و عکس</th>
                    <th>تخفیفات</th>
                    <th>مشاهده جزئیات</th>
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

                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.catProductName}</td>
                             <td>${item.seller}</td>
                             <td>${item.coding}</td>
                             <td>${item.price}</td>
                             <td>${item.weight}</td>
                            <td class="tdTextCenter"><span class="Parameters" catProductId="${item.catProductId}" productId="${item.id}" ><i class="fa fa-book text text-primary"></i></span></td>
                            <td class="tdTextCenter"><span class="Photos" productId="${item.id}" ><i class="fa fa-file-image-o text text-warning"></i></span></td> 
                            <td class="tdTextCenter"><span class="Offer" productId="${item.id}" ><i class="fa fa-percent text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Joziyat" productId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Edit" productId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" productId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
                       </tr>`;
            });

            Html += `</tbody></table>`;

            $('.TblList').html(Html);
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

const GetCatProductList = () => {




    jQuery.ajax({
        type: "Get",
        url: SetUrl("CatProduct/GetCatProductList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (response) {



            var s = (((response.replace(/'/g, '"')).replace(/,]/g, ']')).replace(/,}/g, '}')).replace(/,,/g, ',');

            $('#treeview1').treeview({
                data: s
            });



        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {


        }
    });
}

const GetColorList = () => {


    let html = ``;

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

const GetPackingTypeList = () => {


    let html = ``;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("PackingType/GetPackingTypeList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                jQuery.each(response, (i, item) => {
                    html += `<option value="${item.id}">${item.name}</option>`;
                });

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

const GetSellerList = () => {


    let html = ``;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Seller/GetSellerList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {
                html += ` <option value="${item.id}">${item.name + " " + item.fname}</option>`;
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

const GetProductStatusList = () => {


    let html = ``;

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

const InsertProduct = () => {

    let color = $("#cmbColor").select2("val");
    let colorList = [];
    for (var i = 0; i < color.length; i++) {
        colorList.push(parseInt(color[i]));
    }

    let packingList = [];
    let packing = $("#cmbPacking").select2("val");
    for (var i = 0; i < packing.length; i++) {
        packingList.push(parseInt(packing[i]));
    }

    let releventList = [];
    let releven = $("#cmbrelevent").select2("val");
    for (var i = 0; i < releven.length; i++) {
        releventList.push(parseInt(releven[i]));
    }


    let node = $('#treeview1').treeview('getSelected');
    if (node.length > 0) {
        catProductId = node[0].mid;
        $('#lblMenuName').html(node[0].text);
        $('.selectedmenu').show();
    }
    let product = {

        Id: 0,
        CatProductId: catProductId,
        SellerId: parseInt($("#cmbSeller").val()),
        ProductMeterId: null,
        Name: $("#txtname").val(),
        enName: "",
        rkey: 0,
        coding: null,
        Price: parseInt($("#txtprice").val()),
        producePrice: 0,
        finalStatusId: null,
        FirstCount: parseInt($("#txtcount").val()),
        Count: parseInt($("#txtcount").val()),
        coverImageUrl: "",
        coverImageHurl: null,
        seenCount: null,
        lastSeenDate: null,
        description: null,
        aparatUrl: null,
        Weight: parseFloat($("#txtweight").val()),
        produceDuration: null,
        UnescoFlag: $("#unesco").prop('checked'),
        UnescoCode: parseInt($("#txtunescocode").val()),
        MelliFlag: $("#mellicode").prop('checked'),
        MelliCode: parseInt($("#txtmellicode").val()),
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

    var formData = new FormData();


    formData.append('CoverImage', myfile[0].files[0]);
    formData.append('Product', JSON.stringify(product));
    formData.append('colorList', JSON.stringify(colorList));
    formData.append('packingList', JSON.stringify(packingList));
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

            $('#ImageModal').modal('hide');
            Swal.fire(
                'ثبت شد !',
                'محصول با موفقیت ثبت شد',
                'success'
            );




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
            GetPackingTypeList();
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


$(document).ready(() => {

    ShowLoader();
    GetProductList();
    GetCatProductList();
    EndLoader();

    $('#treeview1').on('nodeSelected', function (event, data) {

        let node = $('#treeview1').treeview('getSelected');
        if (node.length > 0) {
            catProductId = node[0].mid;
            $('#lblMenuName').html(node[0].text);
            $('.selectedmenu').show();
        } else {

            catProductId = 0;
            $('#lblMenuName').html('');
            $('.selectedmenu').hide();
        }

    });

    $('#treeview1').on('nodeUnselected', function (event, node) {

        catProductId = 0;
        $('#lblMenuName').html('');
        $('.selectedmenu').hide();


    });

    $(document.body).on('change', '#exampleInputFile', function () {


        if ($(this).val() == '') {
            $('.custom-file-label').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#exampleInputFile");

            $('.custom-file-label').text(myfile[0].files[0].name);

        }


    });

    $('#mellicode').on('ifChecked', function (event) {
        $("#txtmellicode").prop('disabled', 0);
        $("#txtmellicode").val('');
    });

    $('#unesco').on('ifChecked', function (event) {
        $("#txtunescocode").prop('disabled', 0);
        $("#txtunescocode").val('');
    });

    $('#mellicode').on('ifUnchecked', function (event) {
        $("#txtmellicode").prop('disabled', 1);
        $("#txtmellicode").val('');
    });

    $('#unesco').on('ifUnchecked', function (event) {
        $("#txtunescocode").prop('disabled', 1);
        $("#txtunescocode").val('');
    });

    $(document.body).on('click', '.Parameters', function () {


        Id = parseInt($(this).attr('productId'));
        GetProductParamList();

    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        //if ($('#txtName').val().length === 0) {
        //    textalert += `عنوان را وارد نمایید`;
        //}
        //else if ($('#txtCode').val().length === 0) {
        //    textalert += `کد رنگ را وارد نمایید !`;
        //    Swal.fire({
        //        icon: 'error',
        //        title: 'فیلدهای اجباری را وارد نمایید !',
        //        text: textalert

        //    });
        //}


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
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

    $(document.body).on('click', '#btnJadid', () => {


        GetColorList();
        GetPackingTypeList();
        GetSellerList();
        GetProductStatusList();
        $("#EditPanel").show();
        $("#PanelList").hide();
        $('.js-example-basic-multiple').select2();
        $('.js-example-basic-single').select2();

    });

    $(document.body).on('click', '#btnBazgasht', () => {

        $("#EditPanel").hide();
        $("#PanelList").show();

    });

    $(document.body).on('click', '#btnBazgashtParams', () => {

        $("#ParamPanel").hide();
        $("#PanelList").show();

    });

    $(document.body).on('click', '#btnSabtParams', () => {

        UpdateParams();

    });

    $(document.body).on('click', '.Photos', function () {


        Id = parseInt($(this).attr('productId'));
        GetImageListByProductId();

    });

    $(document.body).on('click', '#btnSabtImage', () => {


        let textalert = "";

        if ($('#txtOnvanTasvir').val().length === 0) {
            textalert += `عنوان را وارد نمایید`;
        }
        else if ($('#SmallInputFile').val().length === 0) {
            textalert += `فایلی جهت بارگزاری انتخاب نشده است !`;
            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        }


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {

            UploadImage();
        }


    });

    $(document.body).on('click', '.btnRemoveImage', function () {


        let imageId = parseInt($(this).attr('imageId'));
        Swal.fire({
            title: 'آیا اطمینان دارید؟',
            text: "بعد از حذف امکان بازگردانی وجود ندارد!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'خیر',
            confirmButtonText: 'بله !'
        }).then((result) => {
            if (result.value) {
                DeleteProductImage(imageId);
            }
        });


    });

    $(document.body).on('change', '#SmallInputFile', function () {


        if ($(this).val() == '') {
            $('.custom-file-label').text('انتخاب فایل');
        }
        else {
            var myfile = $("#SmallInputFile");

            $('.custom-file-label').text(myfile[0].files[0].name);

        }


    });

    $(document.body).on('click', '#btnBazgashtImage', () => {

        $("#ImagePanel").hide();
        $("#PanelList").show();

    });


});