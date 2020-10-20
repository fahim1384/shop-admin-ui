
const GetProductList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>دسته بندی محصول</th>
                    <th>فروشنده</th>
                    <th>Rkey</th>
                    <th>کدینگ</th>
                    <th>قیمت</th>
                    <th>وزن</th>
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
                             <td>${item.rkey}</td>
                             <td>${item.rkey}</td>
                             <td>${item.coding}</td>
                             <td>${item.price}</td>
                             <td>${item.weight}</td>
                            <td class="tdTextCenter"><span class="Joziyat" colorId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Edit" colorId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" colorId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
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
            $('#cmbColor').select2();
           
            
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
            $('#cmbPacking').select2();

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

        }
    });
}



$(document).ready(() => {

    ShowLoader();
    GetProductList();
    GetCatProductList();
    GetColorList();
    GetPackingTypeList();
    EndLoader();

    $('#cmbSeller').select2();

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


});