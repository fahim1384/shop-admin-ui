

let Id = 0;
let Flag = 0;


const GetParametersList = () => {




    jQuery.ajax({
        type: "Get",
        url: SetUrl("Parameters/GetParametersList"),
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

const InserParameters = () => {


    let parameters = {
        ID: 0,
        Pid: Id,
        Name: $('#txtName').val(),
        Rkey: parseInt($('#txtRkey').val()),

    }

    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("Parameters/InserParameters"),
        data: JSON.stringify(parameters),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            EndLoader();
            $('#exampleModal').modal("hide");
            Swal.fire(
                'ثبت شد !',
                'پارامتر با موفقیت ثبت شد',
                'success'
            );
            GetParametersList();


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

const GetParametersById = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`Parameters/GetParametersById?parametersId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {



            $('#txtName').val(response.name);
            $('#txtRkey').val(response.rkey);
            $('#exampleModal').modal();

        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });
}

const UpdateParameters = () => {



    ShowLoader();

    let parameters = {
        id: Id,
        pid: null,
        name: $('#txtName').val(),
        rkey: parseInt($('#txtRkey').val()),

    }

    jQuery.ajax({
        type: "Put",
        url: SetUrl("Parameters/UpdateParameters"),
        data: JSON.stringify(parameters),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            EndLoader();
            $('#exampleModal').modal("hide");
            GetParametersList();
            Swal.fire(
                'ثبت شد !',
                'پارامتر با موفقیت بروز رسانی شد',
                'success'
            );
      



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

const DeleteParameters = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`Parameters/DeleteParameters?parametersId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            $('#exampleModal').modal("hide");
            Swal.fire(
                'ثبت شد !',
                'پارامتر با موفقیت حذف شد',
                'success'
            );
            GetParametersList();
        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);
            EndLoader();

        },
        complete: function () {
            EndLoader();

        }
    });
}




$(document).ready(() => {

    ShowLoader();
    GetParametersList();
    EndLoader();

    $('#treeview1').on('nodeSelected', function (event, data) {

        let node = $('#treeview1').treeview('getSelected');
        if (node.length > 0) {
            Id = node[0].mid;
            $('#lblMenuName').html(node[0].text);
            $('.selectedmenu').show();
        } else {

            Id = 0;
            $('#lblMenuName').html('');
            $('.selectedmenu').hide();
        }

    });

    $('#treeview1').on('nodeUnselected', function (event, node) {

        Id = 0;
        $('#lblMenuName').html('');
        $('.selectedmenu').hide();


    });

    $(document.body).on('click', '#btnAdd', function () {

        $('#txtName').val('');
        $('#txtRkey').val('');
        $('#exampleModal').modal();
        Flag = 0;

    });

    $(document.body).on('click', '#btnSabt', function () {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += `نام پارامتر را وارد نمایید`;
        }
        else if ($('#txtName').val().length === 0) {
            textalert += `Rkey پارامتر را وارد نمایید`;
        }


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Flag === 0) {
                InserParameters();
            } else {
                UpdateParameters();
            }

        }

    });

    $(document.body).on('click', '#btnRemove', function () {



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
                DeleteParameters();
            }
        });


    });

    $(document.body).on('click', '#btnEdit', function () {

        $('#txtName').val('');
        $('#txtRkey').val('');
        Flag = 1;
        GetParametersById();

    });

});