
let Id = 0;
let statusId = -1;

const GetOrderList = () => {


    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>تاریخ سفارش</th>
                    <th>شماره سفارش</th>
                    <th>نوع سفارش</th>
                    <th>نام مشتری</th>
                    <th>وضعیت سفارش</th>
                    <th>مبلغ سفارش</th>
                    <th>وضعیت پرداخت</th>
                    <th>تغییر وضعیت سفارش</th>
                    <th>جزئیات سفارش</th>
                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("Order/GetOrderList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {


                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.orderDate}</td>
                            <td>${item.orderNo}</td>
                             <td>${item.orderType}</td>
                             <td>${item.customerName}</td>
                             <td>${item.status}</td>
                             <td>${item.finalPrice}</td>
                             <td>${item.paymentStatus}</td>`;


                    html += ` <td class="tdTextCenter"><span class="ChangeStatus" OrderId="${item.id}" ><i class="fa fa-refresh text text-info"></i></span></td>`;


                html += ` <td class="tdTextCenter"><span class="Details" OrderId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>

                       </tr>`;
            });

            html += `</tbody></table>`;

            $('.TblList').html(html);

        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('example2');

        }
    });
}

const GetOrderFullInfoById = () => {


    let html = `<table id="ProductList" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>کد محصول</th>
                    <th>نام محصول</th>
                    <th>تعداد</th>
                    <th>قیمت محصول</th>
                    <th>نوع بسته بندی</th>
                    <th>فروشنده</th>
                    <th>وضعیت محصول</th>

                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl(`Order/GetOrderFullInfoById?orderId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {

            $("#lblOrderNo").html(response.order.orderNo);
            $("#lblOrderDate").html(response.order.orderDate);
            $("#lblOrderType").html(response.order.orderType);
            $("#lblCustomerName").html(response.order.customerName);
            $("#lblFinalPrice").html(response.order.finalPrice);
            $("#lblPackingWeight").html(response.order.finalWeight);
            $("#lblFinalWeight").html(response.order.packingWeight);
            $("#lblOrderStatus").html(response.order.status);
            $("#lblPaymentStatus").html(response.order.paymentStatus);
            $("#lblAddress").html(response.order.address);
            $("#lblMobile").html(response.order.mobile);

            jQuery.each(response.orderproduct, (i, item) => {



                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.productCode}</td>
                            <td>${item.productName}</td>
                             <td>${item.orderCount}</td>
                             <td>${item.productPrice}</td>
                             <td>${item.packingType}</td>
                             <td>${item.seller}</td>
                             <td>${item.status}</td>                        
                       </tr>`;
            });

            html += `</tbody></table>`;

            $('.TblProductList').html(html);
            $("#PanelList").hide();
            $("#DetailesPanel").show();


        },
        error: (response) => {

            console.log(response);

        },
        complete: () => {

            MakeDataTable('ProductList');

        }
    });
}

const GetOrderStatusList = () => {


    let html = ` <option coding="" value="-1">انتخاب کنید</option>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("Order/GetOrderStatusList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {

            jQuery.each(response, (i, item) => {
                html += ` <option  value="${item.id}">${item.name}</option>`;
            });

            $('#cmbStatus').html(html);
        },
        error: function (response) {

            console.log(response);

        },
        complete: function () {

        }
    });
}

const UpdateOrderStatus = () => {


    ShowLoader();
    let sentDate = parseInt($('#SentDateObserver').val());
    if (sentDate.toString() == "NaN") {
        sentDate = -1;
    }
    let deliverDate = parseInt($('#DeliveridDateObserver').val());
    if (deliverDate.toString() == "NaN") {
        deliverDate = -1;
    }

    jQuery.ajax({
        type: "Put",
        url: SetUrl(`Order/UpdateOrderStatus?orderId=${Id}&statusId=${parseInt($("#cmbStatus").val())}
                     &sentDate=${sentDate}&trackingCode=${$("#txtTrackingCode").val()}
                     &deliverDate=${deliverDate}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {
            EndLoader();
            $("#ChangeStatusModal").modal("hide");
            Swal.fire(
                "ثبت شد !",
                "وضعیت با موفقیت بروز رسانی شد",
                "success"
            );
            GetOrderList();
            Id = 0;
            $("#txtDeliveridDate").val("");
            $("#txtSentDate").val("");
            $("#txtTrackingCode").val("");
            $("#cmbStatus").val(-1);
            $("#cmbStatus").trigger("change");


        },
        error: (response) => {
            EndLoader();
            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            Swal.fire({
                icon: "error",
                title: "خطا در ثبت رنگ محصول !",
                text: response.responseText

            });

        },
        complete: () => {
            EndLoader();
        }
    });
};


$(document).ready(() => {

    ShowLoader();
    GetOrderList();
    EndLoader();

    $('#txtSentDate').persianDatepicker({
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '#SentDateObserver',
        autoClose: true,
        initialValue: false

    });

    $('#txtDeliveridDate').persianDatepicker({
        observer: true,
        format: 'YYYY/MM/DD',
        altField: '#DeliveridDateObserver',
        autoClose: true,
        initialValue: false

    });



    $(document.body).on("click", ".Details", function () {


        Id = parseInt($(this).attr("OrderId"));
        GetOrderFullInfoById();

    });

    $(document.body).on("change", "#cmbStatus", function () {

        statusId = parseInt($(this).val());
        if (statusId == 20) {
            $("#DivStatus20").show();
            $("#DivStatus21").hide();
        }
        else if (statusId == 21) {
            $("#DivStatus21").show();
            $("#DivStatus20").hide();
        }
        else {
            $("#DivStatus20").hide();
            $("#DivStatus21").hide();
        }

    });

    $(document.body).on("click", ".ChangeStatus", function () {


        Id = parseInt($(this).attr("OrderId"));
        $("#txtDeliveridDate").val("");
        $("#txtSentDate").val("");
        $("#txtTrackingCode").val("");
        $("#cmbStatus").val(-1);
        $("#cmbStatus").trigger("change");
        $("#DivStatus20").hide();
        $("#DivStatus21").hide();
        $("#ChangeStatusModal").modal();
        GetOrderStatusList();

    });

    $(document.body).on('click', '#btnChangeStatus', () => {

        let textalert = ``;
        if (parseInt($("#cmbStatus").val()) == -1) {

            textalert += `وضعیت سفارش را انتخاب نمایید`;
        }
        else if (parseInt($("#cmbStatus").val()) == 20) {

            if ($("#txtSentDate").val().length == 0) {
                textalert += `تاریخ ارسال را انتخاب نمایید`;
            }
            else if ($("#txtTrackingCode").val().length == 0) {
                textalert += `کدرهگیری را وارد نمایید`;
            }

        }
        else if (parseInt($("#cmbStatus").val()) == 21) {
            if ($("#txtDeliveridDate").val().length == 0) {
                textalert += `تاریخ ارسال را انتخاب نمایید`;
            }
        }

        if (textalert !== "") {

            Swal.fire({
                icon: "error",
                title: "فیلدهای اجباری را وارد نمایید !",
                text: textalert

            });
        } else {
            UpdateOrderStatus();
        }


    });

    $(document.body).on("click", "#btnBazgasht", function () {


        Id = 0;
        $("#PanelList").show();
        $("#DetailesPanel").hide();

    });


});