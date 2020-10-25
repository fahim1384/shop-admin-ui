let Id = 0;


const GetSliderPlaceList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>Rkey</th>
                    <th>اضافه کردن عکس</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`SliderPlace/GetSliderPlaceList`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.rkey}</td>
                            <td class="tdTextCenter"><span class="AddSlide" sliderPlaceId="${item.rkey}" ><i class="fa fa-plus text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Edit" sliderPlaceId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" sliderPlaceId="${item.id}"><i class="fa fa-trash text text-danger"></i></span></td>
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

const InsertSliderPlace = () => {

    let sliderPlaceDto = {
        id: 0,
        name: $("#txtName").val(),
        rkey: parseInt($("#txtRkey").val())
    };

    jQuery.ajax({
        type: "Post",
        url: SetUrl(`SliderPlace/InsertSliderPlace`),
        data: JSON.stringify(sliderPlaceDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'محل اسلایدر با موفقیت ثبت شد',
                'success'
            );
            GetSliderPlaceList();
            Id = 0;
            $('#txtName').val('');
            $('#txtRkey').val('');
            $('#InsertModal').modal('hide');


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

const DeleteSliderPlace = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`SliderPlace/DeleteSliderPlace?sliderPlaceId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            Swal.fire(
                'ثبت شد !',
                'محل با موفقیت حذف شد',
                'success'
            );
            GetSliderPlaceList();
        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: 'error',
                title: 'خطا در عملیات !',
                text: response.message

            });

        },
        complete: () => {
            EndLoader();

        }
    });
}

const GetSliderPlaceById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`SliderPlace/GetSliderPlaceById?sliderPlaceId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {



            $('#txtName').val(response.name);
            $('#txtRkey').val(response.rkey);
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

const UpdateSliderPlace = () => {

    let sliderPlaceDto = {
        id: Id,
        name: $("#txtName").val(),
        rkey: parseInt($("#txtRkey").val())
    };

    jQuery.ajax({
        type: "Put",
        url: SetUrl(`SliderPlace/UpdateSliderPlace`),
        data: JSON.stringify(sliderPlaceDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'محل اسلایدر با موفقیت بروز رسانی شد',
                'success'
            );
            GetSliderPlaceList();
            Id = 0;
            $('#txtName').val('');
            $('#txtRkey').val('');
            $('#InsertModal').modal('hide');


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

const DeActiveSliderPlace = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`SliderPlace/DeActiveSliderPlace?sliderPlaceId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {

            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'محل اسلایدر با موفقیت غیرفعال شد',
                'success'
            );
            GetSliderPlaceList();

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}



$(document).ready(() => {


    ShowLoader();
    GetSliderPlaceList();
    EndLoader();


    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtRkey').val('');

        $('#InsertModal').modal();
    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += "نام را وارد نمایید";
        }
        else if ($('#txtRkey').val().length === 0) {
            textalert += "Rkey را وارد نمایید";
        }


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Id === 0) {
                InsertSliderPlace();
            } else {
                UpdateSliderPlace();
            }

        }


    });

    $(document.body).on('click', '.Trash', function () {

        Id = parseInt($(this).attr('sliderPlaceId'));

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
                DeleteSliderPlace();
            }
        });


    });
    
    $(document.body).on('click', '.Edit', function () {

        Id = parseInt($(this).attr('sliderPlaceId'));

        GetSliderPlaceById();

    });
    
    $(document.body).on('click', '.AddSlide', function () {

        Id = parseInt($(this).attr('sliderPlaceId'));

        window.location = `/Home/Slider?sliderPlaceId=${Id}`;

    });

});