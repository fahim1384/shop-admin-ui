
const GetOrderList = () => {


    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>تاریخ سفارش</th>
                    <th>شماره سفارش</th>
                    <th>نوع سفارش</th>
                    <th>نام مشتری</th>
                    <th>مبلغ سفارش</th>
                    <th>وضعیت سفارش</th>
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
                            <td class="tdTextCenter"><span class="Edit" OrderId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>

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



$(document).ready(() => {

    ShowLoader();
    GetOrderList();
    EndLoader();

    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtCode').val('');
        $('#txtRkey').val('');
        $('#InsertModal').modal();
    });
});