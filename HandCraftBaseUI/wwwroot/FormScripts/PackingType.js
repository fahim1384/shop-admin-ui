
let Id = 0;

const GetPackingTypeList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>قیمت</th>
                    <th>وزن</th>
                    <th>تعداد تصاویر</th>
                    <th>افزودن تصاویر</th>
                    <th>نمایش جزئیات</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("PackingType/GetPackingTypeList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {

                let imagecount = 0;
                if ((item.packingTypeImage != undefined) && (item.packingTypeImage !== '[]')) {

                    imagecount = item.packingTypeImage.length;
                }

                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.price}</td>
                            <td>${item.weight}</td>
                            <td>${imagecount}</td>
                            <td class="tdTextCenter"><span class="UploadImage" packingTypeId="${item.id}" ><i class="fa fa-upload text text-primary"></i></span></td>
                            <td class="tdTextCenter"><span class="Detail" packingTypeId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Edit" packingTypeId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" packingTypeId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
                       </tr>`;
            });

            Html += `</tbody></table>`;

            $('.TblList').html(Html);

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('example2');

        }
    });
}

const InsertPackingType = () => {


    let packingTypeDto = {

        id: 0,
        name: $("#txtName").val(),
        price: parseInt($("#txtPrice").val()),
        weight: parseFloat($("#txtWeight").val()),
        packingTypeImage: []
    }


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("PackingType/InsertPackingType"),
        data: JSON.stringify(packingTypeDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'بسته بندی با موفقیت ثبت شد',
                'success'
            );
            GetPackingTypeList();
            Id = 0;
            $('#txtName').val('');
            $('#txtPrice').val('');
            $('#txtWeight').val('');

            $('#InsertModal').modal('hide');


        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: () => {
            EndLoader();
        }
    });
}

const UpdatePackingType = () => {


    let packingTypeDto = {

        id: Id,
        name: $("#txtName").val(),
        price: parseInt($("#txtPrice").val()),
        weight: parseFloat($("#txtWeight").val()),
        packingTypeImage: []

    }


    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl("PackingType/UpdatePackingType"),
        data: JSON.stringify(packingTypeDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'بسته بندی با موفقیت بروز رسانی شد',
                'success'
            );
            GetPackingTypeList();
            Id = 0;
            $('#txtName').val('');
            $('#txtPrice').val('');
            $('#txtWeight').val('');

            $('#InsertModal').modal('hide');


        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: () => {

            EndLoader();
        }
    });
}

const GetPackingTypeById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`PackingType/GetPackingTypeById?packingTypeId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {



            $('#txtName').val(response.name);
            $('#txtPrice').val(response.price);
            $('#txtWeight').val(response.weight);
            $('#InsertModal').modal();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}

const DeletePackingType = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`PackingType/DeletePackingType?packingTypeId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            Swal.fire(
                'ثبت شد !',
                'بسته بندی با موفقیت حذف شد',
                'success'
            );
            GetPackingTypeList();
        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}

const ViewDetails = () => {

    ShowLoader();
    let Html = '';
    jQuery.ajax({
        type: "Get",
        url: SetUrl(`PackingType/GetPackingTypeById?packingTypeId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {


            if (response.packingTypeImage.length > 0) {
                $('#RemoveImage').attr('ImageId', response.packingTypeImage[0].id);
                $('.MainImage').attr('src', response.packingTypeImage[0].imageFileUrl);
                $('#imgTitle').text(response.packingTypeImage[0].title + "( " + response.packingTypeImage[0].decription + " )");
                $('.ImageList').show();
            }
            else {
                $('#RemoveImage').hide();
                $('.ImageList').hide();
            }



            jQuery.each(response.packingTypeImage, function (i, item) {


                Html += `<img src="${item.imageFileUrl}" alt="${item.name} " id="${item.id}" class="img-thumbnail Sahandthumb mx-auto">`;
            });

            jQuery('.ImageContainer').html(Html);
        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });
}

const UploadImage = () => {


    var myfile = $("#exampleInputFile");

    var formData = new FormData();



    let packingTypeImage = {

        Id: 0,
        PackingTypeId: Id,
        Title: $("#txtOnvanTasvir").val(),
        Decription: $("#txtTozihat").val(),
        ImageFileUrl: ''
    }
    formData.append('ImageFile', myfile[0].files[0]);
    formData.append('packingTypeImage', JSON.stringify(packingTypeImage));

    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl(`PackingType/UploadPackingTypeImage`),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {

            EndLoader();

            $('#ImageModal').modal('hide');
            Swal.fire(
                'ثبت شد !',
                'تصویر با موفقیت ثبت شد',
                'success'
            );



            $('#txtOnvanTasvir').val('');
            $('#txtTozihat').val('');
            $('#ImageModal').modal('hide');


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

const DeleteImage = (ImageId) => {


    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl("PackingType/DeletePackingTypeImage?packingTypeImageId=" + ImageId),
        data: "",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {

            Swal.fire(
                'حدف شد !',
                'تصویر مورد نظر حذف شد',
                'success'
            );
            ViewDetails();
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
    GetPackingTypeList();
    EndLoader();


    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtPrice').val('');
        $('#txtWeight').val('');
        $('#InsertModal').modal();
    });

    $(document.body).on('click', '.UploadImage', (e) => {


        Id = parseInt($(e.currentTarget).attr('packingTypeId'));
        $('#txtOnvanTasvir').val('');
        $('#txtTozihat').val('');
        $('#exampleInputFile').val('');
        $('.custom-file-label').text('انتخاب تصویر');
        $('#ImageModal').modal();


    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += "نام را وارد نمایید";
        }
        else if ($('#txtPrice').val().length === 0) {
            textalert += "قیمت را وارد نمایید";
        }

        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Id === 0) {
                InsertPackingType();
            } else {
                UpdatePackingType();
            }

        }


    });

    $(document.body).on('click', '#btnSabtTasvir', (e) => {


        let textalert = "";

        if ($('#exampleInputFile').val().length === 0) {
            textalert += `فایلی جهت بارگذاری انتخاب نشده است !`;
            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        }
        else if ($('#txtOnvanTasvir').val().length === 0) {
            textalert += "عنوان تصویر را وارد نمایید";
            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {

            UploadImage();
        }

    });

    $(document.body).on('click', '.Trash', function () {

        Id = parseInt($(this).attr('packingTypeId'));

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
                DeletePackingType();
            }
        });


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

    $(document.body).on('click', '.Edit', function () {

        Id = parseInt($(this).attr('packingTypeId'));

        GetPackingTypeById();

    });

    $(document.body).on('click', '.Detail', function () {

        Id = parseInt($(this).attr('packingTypeId'));

        ViewDetails();
        $('#pnlJoziyat').show();
        $('#PnlList').hide();

    });

    $(document.body).on('click', '.Sahandthumb', function () {

        $('.MainImage').attr('src', $(this).attr('src'));
        $('#imgTitle').text($(this).attr('alt'));
        $('#RemoveImage').attr('ImageId', $(this).attr('ImageId'));

    });

    $(document.body).on('click', ".btnClose", () => {

        GetPackingTypeList();
        $('#pnlJoziyat').hide();
        $('#PnlList').show();

    });

    $(document.body).on('click', '#RemoveImage', function () {

        let ImageId = parseInt($(this).attr('ImageId'));
        if (ImageId !== NaN) {

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
                    DeleteImage(ImageId);
                }
            });

        }

    });


});