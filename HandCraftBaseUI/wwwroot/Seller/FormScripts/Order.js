
let Id = 0;

const GetOrderListForSeller = () => {

    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام محصول</th>
                    <th>کد محصول</th>
                    <th>تعداد سفارش</th>
                    <th>شماره سفارش</th>
                    <th>تاریخ سفارش</th>
                    <th>وضعیت محصول</th>
                    <th>تغییر وضعیت به آماده</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("CustomerOrder/GetOrderListForSeller"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "json",
        success: (response) => {

            
            jQuery.each(response, (i, item) => {


                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.productName}</td>
                            <td>${item.coding}</td>
                             <td>${item.orderCount}</td>
                            <td>${item.orderNo}</td>
                            <td>${item.orderdate}</td>
                            <td>${item.status}</td>`;
                if (item.finalStatusId == 22) {

                    html += `    <td class="tdTextCenter"><span class="Edit" productId="${item.id
                        }" ><i class="fa fa-refresh text text-info"></i></span></td>
                       </tr>`;
                } else {

                    html += `    <td></td>
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

const ChangeOrderPruductStatusBySeller = () => {

    ShowLoader();

    jQuery.ajax({
        type: "PUT",
        url: SetUrl(`CustomerOrder/ChangeOrderPruductStatusBySeller?customerOrderProductId=${Id}`),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        headers: { "Authorization": `Bearer ${GetToken()}` },
        dataType: "text",
        success: (response) => {


            EndLoader();
            Swal.fire(
                'ثبت شد !',
                'محصول با موفقیت بروز رسانی شد',
                'success'
            );
            GetOrderListForSeller();
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
    GetOrderListForSeller();
    EndLoader();

    $(document.body).on("click", ".Edit", function () {

        Id = parseInt($(this).attr("productId"));
        ChangeOrderPruductStatusBySeller();

    });

});