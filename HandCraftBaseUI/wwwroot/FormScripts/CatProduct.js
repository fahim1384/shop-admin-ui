let Id = 0;
let Flag = 0;


function GetCatProductList() {




    jQuery.ajax({
        type: "Get",
        url: "/api/CatProduct/GetCatProductList",
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

function InserCatProduct() {


    let catProduct = {
        id: 0,
        pid: Id,
        name: $('#txtName').val(),
        coding: parseInt($('#txtCodding').val()),
        rkey: parseInt($('#txtRkey').val()),
        icon: $('#txtIcon').val(),
        url: $('#txtURL').val()

    }

    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: "/api/CatProduct/InserCatProduct",
        data: JSON.stringify(catProduct),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (response) {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت ثبت شد',
                'success'
            );
            GetCatProductList();
       

        },
        error: function (response) {
            debugger
            console.log(response);
            EndLoader();

        },
        complete: function () {

        }
    });
}

function GetCatProductById() {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: `/api/CatProduct/GetCatProductById?catProductId=${Id}`,
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {



            $('#txtName').val(response.name);
            $('#txtCodding').val(response.coding);
            $('#txtRkey').val(response.rkey);
            $('#txtIcon').val(response.icon);
            $('#txtURL').val(response.url);
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

function UpdateCatProduct() {



    ShowLoader();

    let catProduct = {
        id: Id,
        pid: null,
        name: $('#txtName').val(),
        coding: parseInt($('#txtCodding').val()),
        rkey: parseInt($('#txtRkey').val()),
        icon: $('#txtIcon').val(),
        url: $('#txtURL').val()

    }

    jQuery.ajax({
        type: "Put",
        url: "/api/CatProduct/UpdateCatProduct",
        data: JSON.stringify(catProduct),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (response) {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت بروز رسانی شد',
                'success'
            );
            GetCatProductList();
          


        },
        error: function (response) {

            console.log(response);
            EndLoader();

        },
        complete: function () {

        }
    });
}

function DeleteCatProduct() {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: `/api/CatProduct/DeleteCatProduct?catProductId=${Id}`,
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (response) {
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت بروز حذف شد',
                'success'
            );
            GetCatProductList();
        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });
}




$(document).ready(() => {

    ShowLoader();
    GetCatProductList();
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

        $('#exampleModal').modal();
        Flag = 0;

    });

    $(document.body).on('click', '#btnSabt', function () {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += `نام دسته را وارد نمایید`;
        }
        else if ($('#txtName').val().length === 0) {
            textalert += `کدینگ دسته را وارد نمایید`;
        }
        else if ($('#txtName').val().length === 0) {
            textalert += `Rkey دسته را وارد نمایید`;
        }
        else if ($('#txtURL').val().length === 0) {
            textalert += "URL را وارد نمایید";
        }

        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Flag === 0) {
                InserCatProduct();
            } else {
                UpdateCatProduct();
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
                DeleteCatProduct();
            }
        });


    });

    $(document.body).on('click', '#btnEdit', function () {

        Flag = 1;
        GetCatProductById();

    });

});