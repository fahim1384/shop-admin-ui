

const Login = () => {


    let s = {
        username: $("#txtusername").val(),
        password: $("#txtpassword").val()
    }


    ShowLoader();

    jQuery.ajax({
        type: "Post",
        url: SetUrl("Account/SellerLogin"),
        data: JSON.stringify(s),
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "text",
        success: (response) => {
            var res = JSON.parse(response);
            SetToken(res.token);
            EndLoader();


            window.location = "/seller/home/index";

        },
        error: (response) => {
            EndLoader();
            if (response.responseText === "Invalid credentials") {

                Swal.fire({
                    icon: "error",
                    title: "خطا در ورود به سیستم !",
                    text: `نام کاربری یا کلمه عبور صحیح نمی باشد`

                });
            }


        },
        complete: () => {

        }
    });
}




$(document).ready(() => {

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
    });

    $(document.body).on('click', '#btnLogin', () => {

        let textalert = "";

        if ($('#txtusername').val().length === 0) {
            textalert += `نام کاربری را وارد نمایید`;
        }
        else if ($('#txtpassword').val().length === 0) {
            textalert += `کلمه عبور را وارد نمایید`;
        }

        if (textalert !== "") {

            Swal.fire({
                icon: 'error',
                title: 'فیلدهای اجباری را وارد نمایید !',
                text: textalert

            });
        } else {

            Login();
        }

    });

    $('#txtpassword').keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
            $('#btnLogin').click();
            return false;
        }
    });  

});