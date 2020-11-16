
let Id = 0;

const GetProductList = () => {

    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>دسته بندی محصول</th>
                    <th>نام</th>
                    <th>کد محصول</th>
                    <th>وضعیت محصول</th>
                    <th>ثبت قیمت</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Product/GetSellerProductList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {


                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.catProductName}</td>
                            <td>${item.name}</td>
                             <td>${item.coding}</td>
                            <td>${item.status}</td>`;
                if (item.finalStatus == 8) {

                    html += `<td ></td>
                       </tr>`;

                } else {
                    html += `<td class="tdTextCenter"><span class="Edit" productId="${item.id}" ><i class="fa fa-tag text text-info"></i></span></td>
                       </tr>`;
                }

            });

            html += `</tbody></table>`;

            $('.TblList').html(html);

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable("example2");

        }
    });
}

const UpdateProductBySeller = () => {


    const sellerProductUpdateModel = {

        ProductId: Id,
        Price: parseInt($("#txtPrice").val()),
        ProducePrice: parseInt($("#txtProducePrice").val()),
        ProduceDuration: parseInt($("#txtProduceDuration").val())


    };


    ShowLoader();

    jQuery.ajax({
        type: "Put",
        url: SetUrl("Product/UpdateProductBySeller"),
        data: JSON.stringify(sellerProductUpdateModel),
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'محصول با موفقیت بروز رسانی شد',
                'success'
            );
            GetProductList();
            Id = 0;
            $('#txtPrice').val('');
            $('#txtProducePrice').val('');
            $('#txtProduceDuration').val('');
            $('#InsertModal').modal('hide');


        },
        error: (response) => {


            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            EndLoader();

        },
        complete: () => {

        }
    });
}



$(document).ready(() => {

    ShowLoader();
    GetProductList();
    EndLoader();

    $(document.body).on("click", ".Edit", function () {

        Id = parseInt($(this).attr("productId"));
        $('#txtPrice').val('');
        $('#txtProducePrice').val('');
        $('#txtProduceDuration').val('');
        $('#InsertModal').modal();

    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtPrice').val().length === 0) {
            textalert += `قیمت محصول را وارد نمایید`;
        }
        else if ($('#txtProducePrice').val().length === 0) {
            textalert += `قیمت سفارش محصول را وارد نمایید !`;
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
        }
        else {
            UpdateProductBySeller();

        }


    });



});