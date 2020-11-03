
const GetOrderListNew = () => {


    let html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>کدرنگ</th>
                    <th>Rkey</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;


    jQuery.ajax({
        type: "Get",
        url: SetUrl("Color/GetColorList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td>${item.colorCode}</td>
                             <td>${item.rkey}</td>
                            <td class="tdTextCenter"><span class="Edit" colorId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" colorId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
                       </tr>`;
            });

            html += `</tbody></table>`;

            $('.TblListNew').html(html);

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
    GetOrderListNew();
    EndLoader();

    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtCode').val('');
        $('#txtRkey').val('');
        $('#InsertModal').modal();
    });
});