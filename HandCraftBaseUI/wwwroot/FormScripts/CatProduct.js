﻿let Id = 0;
let Flag = 0;
let main = 0;
let parametersIdList = [];


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

function InserCatProduct() {


    let catProduct = {
        Id: 0,
        Pid: Id,
        Name: $('#txtName').val(),
        Coding: parseInt($('#txtCodding').val()),
        Rkey: parseInt($('#txtRkey').val()),
        Icon: '',
        Url: ''

    }
    if (main == 1) {

        catProduct = {
            Id: 0,
            Pid: null,
            Name: $('#txtName').val(),
            Coding: parseInt($('#txtCodding').val()),
            Rkey: parseInt($('#txtRkey').val()),
            Icon: '',
            Url: '',

        }
    }
    var myfile = $("#exampleInputFile");
    let coverFile = $("#exampleInputFile1");
    var formData = new FormData();


    formData.append('Icon', myfile[0].files[0]);
    formData.append('CoverImage', coverFile[0].files[0]);
    formData.append('catProduct', JSON.stringify(catProduct));


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("CatProduct/InsertCatProduct"),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {
            GetCatProductList();
            EndLoader();
            $('#exampleModal').modal("hide");
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت ثبت شد',
                'success'
            );
            setTimeout(function () { window.location.reload(); }, 1000);

        },
        error: function (response) {

            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);


        },
        complete: function () {

        }
    });
}

function GetCatProductById() {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`CatProduct/GetCatProductById?catProductId=${Id}`),
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
        Id: Id,
        Pid: null,
        Name: $('#txtName').val(),
        Coding: parseInt($('#txtCodding').val()),
        Rkey: parseInt($('#txtRkey').val()),
        Icon: '',
        Url: ''

    }

    var myfile = $("#exampleInputFile");
    let coverFile = $("#exampleInputFile1");
    var formData = new FormData();


    formData.append('Icon', myfile[0].files[0]);
    formData.append('CoverImage', coverFile[0].files[0]);
    formData.append('catProduct', JSON.stringify(catProduct));

    jQuery.ajax({
        type: "Put",
        url: SetUrl("CatProduct/UpdateCatProduct"),
        data: formData,
        contentType: false,
        processData: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        success: function (response) {
            EndLoader();
            $('#exampleModal').modal("hide");
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت بروز رسانی شد',
                'success'
            );
            setTimeout(function () { window.location.reload(); }, 1000);



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
        url: SetUrl(`CatProduct/DeleteCatProduct?catProductId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            Swal.fire(
                'ثبت شد !',
                'دسته با موفقیت حذف شد',
                'success'
            );
            setTimeout(function () { window.location.reload(); }, 1000);
        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });
}

const UpdateCatProductParameters = () => {


    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl(`CatProductParameters/UpdateCatProductParameters?catProductId=${Id}`),
        data: JSON.stringify(parametersIdList),
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: function (response) {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'پارامتر ها با موفقیت ثبت شد',
                'success'
            );
            GetCatProductList();


        },
        error: function (response) {

            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);


        },
        complete: function () {

        }
    });
}

const GetCatProductParametersTreeByCatId = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`CatProductParameters/GetCatProductParametersTreeByCatId?catProductId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: function (response) {


            var s = (((response.replace(/'/g, '"')).replace(/,]/g, ']')).replace(/,}/g, '}')).replace(/,,/g, ',');

            $('#treeview-checkable').treeview({
                data: s,
                showIcon: false,
                showCheckbox: true,
                selectable: false,
                state: {
                    expanded: true
                },
                highlightSelected: false,
                onNodeChecked: function (event, node) {
                    $('#checkable-output').prepend('<p>' + node.text + ' was checked</p>');
                    parametersIdList.push(node.mid);
                },
                onNodeUnchecked: function (event, node) {
                    $('#checkable-output').prepend('<p>' + node.text + ' was unchecked</p>');
                    let idd = node.mid;
                    parametersIdList = parametersIdList.filter(x => x !== idd);

                }
            });
            GetCatProductParametersByCatId();




        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {
            EndLoader();

        }
    });
}

const GetCatProductParametersByCatId = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Get",
        url: SetUrl(`CatProductParameters/GetCatProductParametersByCatId?catProductId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            parametersIdList = [];
            jQuery.each(response, (i, item) => {

                parametersIdList.push(item);

            });
            jQuery("#ParametersDiv").show();

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
            $('.nonselectedmenu').hide();
        } else {

            Id = 0;
            $('#lblMenuName').html('');
            $('.selectedmenu').hide();
            $('.nonselectedmenu').show();
        }

    });

    $('#treeview1').on('nodeUnselected', function (event, node) {

        Id = 0;
        $('.selectedmenu').hide();
        $('.nonselectedmenu').show();


    });

    $(document.body).on('click', '#btnAdd', function () {

        $('#txtName').val('');
        $('#txtCodding').val('');
        $('#txtRkey').val('');
        $('#exampleInputFilelbl').text('انتخاب تصویر');
        $('#exampleInputFile1lbl').text('انتخاب تصویر');
        $('#exampleModal').modal();
        Flag = 0;
        main = 0;

    });

    $(document.body).on('click', '#btnAddMain', function () {

        $('#txtName').val('');
        $('#txtCodding').val('');
        $('#txtRkey').val('');
        $('#exampleInputFilelbl').text('انتخاب تصویر');
        $('#exampleInputFile1lbl').text('انتخاب تصویر');
        $('#exampleModal').modal();
        Flag = 0;
        main = 1;

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

        $('#txtName').val('');
        $('#txtCodding').val('');
        $('#txtRkey').val('');
        $('#exampleInputFilelbl').text('انتخاب تصویر');
        $('#exampleInputFile1lbl').text('انتخاب تصویر');
        Flag = 1;
        GetCatProductById();

    });

    $(document.body).on('click', '#btnAddParams', function () {


        GetCatProductParametersTreeByCatId();


    });

    $(document.body).on('click', '#btncloseparam', function () {

        jQuery("#ParametersDiv").hide();

    });

    $(document.body).on('click', '#btnAddparams', function () {

        UpdateCatProductParameters();

    });

    $(document.body).on('change', '#exampleInputFile', function () {


        if ($(this).val() == '') {
            $('#exampleInputFilelbl').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#exampleInputFile");

            $('#exampleInputFilelbl').text(myfile[0].files[0].name);

        }


    });

    $(document.body).on('change', '#exampleInputFile1', function () {


        if ($(this).val() == '') {
            $('#exampleInputFile1lbl').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#exampleInputFile1");

            $('#exampleInputFile1lbl').text(myfile[0].files[0].name);

        }


    });


});