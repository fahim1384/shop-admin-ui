
let Id = 0;

const GetColorList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>کدرنگ</th>
                    <th>Rkey</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: "/api/Color/GetColorList",
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.colorCode}</td>
                             <td>${item.rkey}</td>
                            <td class="tdTextCenter"><span class="Edit" colorId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" colorId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
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

const InsertColor = () => {


    let colorDto = {

        id: 0,
        name: $("#txtName").val(),
        colorCode: $("#txtCode").val(),
        rkey: parseFloat($("#txtRkey").val())


    }


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: "/api/Color/InserColor",
        data: JSON.stringify(colorDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'رنگ با موفقیت ثبت شد',
                'success'
            );
            GetColorList();
            Id = 0;
            $('#txtName').val('');
            $('#txtCode').val('');
            $('#txtRkey').val('');

            $('#InsertModal').modal('hide');


        },
        error: (response) => {

            console.log(response);
            EndLoader();

        },
        complete: () => {

        }
    });
}

const UpdateColor = () => {


    let colorDto = {

        id: Id,
        name: $("#txtName").val(),
        colorCode: $("#txtCode").val(),
        rkey: parseFloat($("#txtRkey").val())


    }


    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: "/api/Color/UpdateColor",
        data: JSON.stringify(colorDto),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'رنگ با موفقیت بروز رسانی شد',
                'success'
            );
            GetColorList();
            Id = 0;
            $('#txtName').val('');
            $('#txtCode').val('');
            $('#txtRkey').val('');

            $('#InsertModal').modal('hide');


        },
        error: (response) => {

            console.log(response);
            EndLoader();

        },
        complete: () => {

        }
    });
}

const GetColorById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: `/api/Color/GetColorById?colorId=${Id}`,
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {



            $('#txtName').val(response.name);
            $('#txtCode').val(response.colorCode);
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

const DeleteColor = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: `/api/Color/DeleteColor?colorId=${Id}`,
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            Swal.fire(
                'ثبت شد !',
                'رنگ با موفقیت حذف شد',
                'success'
            );
            GetColorList();
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
    GetColorList();
    EndLoader();

    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtCode').val('');
        $('#txtRkey').val('');
        $('#InsertModal').modal();
    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += `عنوان را وارد نمایید`;
        }
        else if ($('#txtCode').val().length === 0) {
            textalert += `کد رنگ را وارد نمایید !`;
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
            if (Id === 0) {
                InsertColor();
            } else {
                UpdateColor();
            }

        }


    });

    $(document.body).on('click', '.Trash', function () {

        Id = parseInt($(this).attr('colorId'));

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
                DeleteColor();
            }
        });


    });

    $(document.body).on('click', '.Edit', function () {

        Id = parseInt($(this).attr('colorId'));

        GetColorById();

    });


});