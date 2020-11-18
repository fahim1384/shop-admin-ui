



let Id = 0;

const GetSellerList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نوع</th>
                    <th>کد فروشنده</th>
                    <th>کد/شناسه ملی</th>
                    <th>نام</th>
                    <th>موبایل</th>
                    <th>تلفن</th>
                    <th>وضعیت</th>
                    <th>جزئیات</th>
                    <th>آدرس ها</th>
                    <th>مدارک</th>
                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("Seller/GetSellerListForGrid"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.type}</td>
                            <td>${item.sellerCode}</td>
                             <td>${item.melliCode}</td>
                             <td>${item.fullname}</td>
                             <td>${item.mobile}</td>
                             <td>${item.tel}</td>
                             <td>${item.status}</td>
                            <td class="tdTextCenter"><span class="Edit" sellerId="${item.id}" ><i class="fa fa-search text text-success"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" sellerId="${item.id}" ><i class="fa fa-tag text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" sellerId="${item.id}" ><i class="fa fa-file text text-primary"></i></span></td>
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






$(document).ready(() => {

    ShowLoader();
    GetSellerList();
    EndLoader();

    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtCode').val('');
        $('#txtRkey').val('');
        $('#InsertModal').modal();
    });


});