
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
                            <td class="tdTextCenter"><span class="Edit" productId="${item.id}" ><i class="fa fa-tag text text-info"></i></span></td>
                       </tr>`;
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




$(document).ready(() => {

    ShowLoader();
    GetOrderListForSeller();
    EndLoader();

});