
let Id = 0;

const GetFamousCommentsList = () => {


    let Html = `<table id="example2" class="table table-striped table-bordered table-hover">
               <thead>
                  <tr>
                    <th>ردیف</th>
                    <th>نام</th>
                    <th>تصویر پروفایل</th>
                    <th>پست</th>
                    <th>نظر</th>
                    <th>تصویر نظر</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                  </tr>
               </thead>
             <tbody>`;

    jQuery.ajax({
        type: "Get",
        url: SetUrl("FamousComments/GetFamousCommentsList"),
        data: "",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (response) => {


            jQuery.each(response, (i, item) => {



                Html += `<tr>
                            <td>${i + 1}</td>
                            <td>${item.name}</td>
                            <td class="text-center"><img src="${item.profilePic}" class="img-thumbnail" style="width:75px;height:75px;"  /></td>
                            <td>${item.post}</td>
                            <td>${item.comment}</td>
                            <td class="text-center"><img src="${item.commentPic}" class="img-thumbnail" style="width:75px;height:75px;"  /></td>
                            <td class="tdTextCenter"><span class="Edit" commentId="${item.id}" ><i class="fa fa-edit text text-info"></i></span></td>
                            <td class="tdTextCenter"><span class="Trash" commentId="${item.id}" ><i class="fa fa-trash text text-danger"></i></span></td>
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

const InsertFamousComments = () => {

    let famousCommentsDto = {
        Id: 0,
        ProfilePic: '',
        Name: $('#txtName').val(),
        Post: $('#txtPost').val(),
        Comment: $('#txtComment').val(),
        Description: $('#txtDesc').val(),
        CommentPic: ''
    }

    var myfile = $("#ProfileImageUplodaer");
    var myfile1 = $("#CommenImageUploader");


    var formData = new FormData();



    formData.append('ImageFile', myfile[0].files[0]);
    formData.append('ImageFile1', myfile1[0].files[0]);
    formData.append('FamousComments', JSON.stringify(famousCommentsDto));


    jQuery.ajax({
        type: "Post",
        url: SetUrl("FamousComments/InsertFamousComments"),
        headers: { "Authorization": `Bearer ${GetToken()}` },
        data: formData,
        contentType: false,
        processData: false,
        success: function (response) {

            Swal.fire(
                'ثبت شد !',
                'نظر با موفقیت ثبت شد',
                'success'
            );
            GetFamousCommentsList();

            Id = 0;
            $('#txtName').val('');
            $('#txtPost').val('');
            $('#txtComment').val('');
            $('#txtDesc').val('');
            $('.ProfileImageUplodaer').text('انتخاب تصویر');
            $('.CommenImageUploader').text('انتخاب تصویر');
            $('#InsertModal').modal('hide');


        },
        error: function (response) {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: function () {

        }
    });
}

const DeleteFamousComments = () => {

    ShowLoader();

    jQuery.ajax({
        type: "Delete",
        url: SetUrl(`FamousComments/DeleteFamousComments?famousCommentId=${Id}`),
        data: "",
        async: false,
        headers: { "Authorization": `Bearer ${GetToken()}` },
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            Swal.fire(
                'ثبت شد !',
                'نظر با موفقیت حذف شد',
                'success'
            );
            GetFamousCommentsList();
        },
        error: (response) => {

            if (response.status === 401) {

                window.location = "/Account/Login";
            }
            console.log(response);

        },
        complete: () => {
            EndLoader();

        }
    });
}



$(document).ready(() => {

    ShowLoader();
    GetFamousCommentsList();
    EndLoader();


    $(document.body).on('click', '#btnJadid', () => {

        Id = 0;
        $('#txtName').val('');
        $('#txtPost').val('');
        $('#txtComment').val('');
        $('#txtDesc').val('');
        $('.ProfileImageUplodaer').text('انتخاب تصویر');
        $('.CommenImageUploader').text('انتخاب تصویر');
        $('#InsertModal').modal();
    });

    $(document.body).on('click', '#btnSabt', () => {

        let textalert = "";

        if ($('#txtName').val().length === 0) {
            textalert += "نام را وارد نمایید";
        }
        else if ($('#txtPost').val().length === 0) {
            textalert += "پست را وارد نمایید";
        }
        else if ($('#txtComment').val().length === 0) {
            textalert += "نظر را وارد نمایید";
        }
        else if ($("#ProfileImageUplodaer").val() === '') {
            textalert += "تصویر پروفایل را انتخاب نمایید";
        }
        else if ($("#CommenImageUploader").val() === '') {
            textalert += "تصویر نظر را انتخاب نمایید";
        }


        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {
            if (Id === 0) {
                InsertFamousComments();
            } else {
                UpdateFamousComments();
            }

        }


    });

    $(document.body).on('click', '.Trash', function () {

        Id = parseInt($(this).attr('commentId'));

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
                DeleteFamousComments();
            }
        });


    });

    $(document.body).on('change', '#ProfileImageUplodaer', function () {


        if ($(this).val() == '') {
            $('.ProfileImageUplodaer').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#ProfileImageUplodaer");

            $('.ProfileImageUplodaer').text(myfile[0].files[0].name);

        }


    });

    $(document.body).on('change', '#CommenImageUploader', function () {


        if ($(this).val() == '') {
            $('.CommenImageUploader').text('انتخاب تصویر');
        }
        else {
            var myfile = $("#CommenImageUploader");

            $('.CommenImageUploader').text(myfile[0].files[0].name);

        }


    });

    $(document.body).on('click', '.Edit', function () {

        Id = parseInt($(this).attr('commentId'));

        GetFamousCommentsById();

    });

});