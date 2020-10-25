let Id = 0;
let sliderPlaceId = -1;

const GetSliderList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>محل اسلایدر</th>
                    <th>عنوان</th>
                    <th>ردیف</th>
                    <th>تصویر</th>
                    <th>لینک</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`Slider/GetSliderList?sliderPlaceId=${sliderPlaceId}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.sliderPlace.name}</td>
                            <td>${item.title}</td>
                            <td>${item.rorder}</td>
                            <td class="text-center"><img src="${item.imageUrl}" class="img-thumbnail" style="width:75px;height:75px;"  /></td>
                            <td>${item.linkUrl}</td>
                            <td class="tdTextCenter"><span class="Edit" sliderId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" sliderId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
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

const GetSliderPlaceList = () => {


    let Html = ``;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`SliderPlace/GetSliderPlaceList`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {

            Html += `<option value="-1">انتخاب کنید</option>`;

            jQuery.each(response, (i, item) => {

                Html += `<option value="${item.rkey}">${item.name}</option>`;
            });


            $('#CmbSliderPlace').html(Html);

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            $('#CmbSliderPlace').val(sliderPlaceId);
        }
    });
}

const InsertSlider = () => {

    let slider = {
        Id: 0,
        SliderPlaceId: parseInt($('#CmbSliderPlace').val()),
        Title: $("#txtName").val(),
        ImageUrl: "",
        ImageHurl: "",
        Rorder: parseInt($("#txtOrder").val()),
        LinkUrl: $("#txtLink").val()
    }

    var myfile = $("#ImageUplodaer");



    var formData = new FormData();

    formData.append('ImageFile', myfile[0].files[0]);
    formData.append('Slider', JSON.stringify(slider));


    jQuery.ajax({
        type: "Post",
        url: SetUrl("Slider/InsertSlider"),
        headers: { "Authorization": `Bearer ${GetToken()}` },
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {

            Swal.fire(
                'ثبت شد !',
                'اسلایدر با موفقیت ثبت شد',
                'success'
            );
            GetSliderList();

            Id = 0;
            $('#txtName').val('');
            $('#txtOrder').val('');
            $('#txtLink').val('');
            $('.custom-file-label').text('انتخاب تصویر');
            $('#ImageUplodaer').val('');
            $('#InsertModal').modal("hide");


        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: function () {

        }
    });
}

const DeleteSlider = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`Slider/DeleteSlider?sliderId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            Swal.fire(
                'ثبت شد !',
                'اسلایدر با موفقیت حذف شد',
                'success'
            );
            GetSliderList();
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

const GetSliderById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`Slider/GetSliderById?sliderId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {



            $('#txtName').val(response.title);
            $('#txtOrder').val(response.rorder);
            $('#txtLink').val(response.linkUrl);
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

const UpdateSlider = () => {

    let slider = {
        Id: Id,
        SliderPlaceId: parseInt($('#CmbSliderPlace').val()),
        Title: $("#txtName").val(),
        ImageUrl: "",
        ImageHurl: "",
        Rorder: parseInt($("#txtOrder").val()),
        LinkUrl: $("#txtLink").val()
    }

    var myfile = $("#ImageUplodaer");



    var formData = new FormData();

    formData.append('ImageFile', myfile[0].files[0]);
    formData.append('Slider', JSON.stringify(slider));


    jQuery.ajax({
        type: "Put",
        url: SetUrl("Slider/UpdateSlider"),
        headers: { "Authorization": `Bearer ${GetToken()}` },
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {

            Swal.fire(
                'ثبت شد !',
                'اسلایدر با موفقیت بروز رسانی شد',
                'success'
            );
            GetSliderList();

            Id = 0;
            $('#txtName').val('');
            $('#txtOrder').val('');
            $('#txtLink').val('');
            $('#ImageUplodaer').val('');
            $('.custom-file-label').text('انتخاب تصویر');
            $('#InsertModal').modal("hide");


        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: function () {

        }
    });
}



$(document).ready(() => {

    sliderPlaceId = getUrlParameter('sliderPlaceId');
    if (sliderPlaceId == null || sliderPlaceId === undefined) {

        sliderPlaceId = -1;
    }

    ShowLoader();
    GetSliderList();
    EndLoader();


    $(document.body).on('click', '#btnJadid', () => {

        GetSliderPlaceList();
        Id = 0;
        $('#txtName').val('');
        $('#txtOrder').val('');
        $('#txtLink').val('');
        $('.custom-file-label').text('انتخاب تصویر');
        $('#InsertModal').modal();
    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += "نام را وارد نمایید";
        }
        else if ($('#CmbSliderPlace').val() == -1) {
            textalert += "محل را وارد نمایید";
        }
        else if ($('#txtOrder').val().length === 0) {
            textalert += "ردیف را وارد نمایید";
        }
        else if ($("#ImageUplodaer").val() === '' && Id === 0) {
            textalert += "تصویر را انتخاب نمایید";
        }


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Id === 0) {
                InsertSlider();
            } else {
                UpdateSlider();
            }

        }


    });

    $(document.body).on('click', '.Trash', function () {

        Id = parseInt($(this).attr('sliderId'));

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
                DeleteSlider();
            }
        });


    });

    $(document.body).on('change', '#ImageUplodaer', function () {


        if ($(this).val() == '') {
            $('.custom-file-label').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#ImageUplodaer");

            $('.custom-file-label').text(myfile[0].files[0].name);

        }


    });

    $(document.body).on('click', '.Edit', function () {

        Id = parseInt($(this).attr('sliderId'));

        GetSliderById();

    });

});