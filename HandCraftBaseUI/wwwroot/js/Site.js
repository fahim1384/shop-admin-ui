
var ShowLoader = () => {

    $('#MoadalLoader').modal();
}

var EndLoader = () => {

    $('#MoadalLoader').modal('hide');
}

const SetToken = (token) => {

    var list = [];
    var token = { t: token };
    list.push(token);
    localStorage.setItem("Tokens", JSON.stringify(list));

}

const GetToken = () => {

    var stored = JSON.parse(localStorage.getItem("Tokens"));
    if (stored === "[]") {
        return "No Token";
    } else {

        return stored[0].t;
    }
}

const SetUrl = (url) => {

    var host = "https://localhost:44366/api/" + url;
    return host;
}

const MakeDataTable = (divId) => {

    $(`#${divId}`).DataTable({
        "language": {
            "decimal": "",
            "emptyTable": "رکوردی برای نمایش وجود ندارد.",
            "info": "نمایش _START_ تا _END_ از _TOTAL_ رکورد",
            "infoEmpty": "نمایش 0 تا 0 از 0 رکورد",
            "infoFiltered": "(فیلتر شده از _MAX_ رکورد)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "نمایش _MENU_ رکورد",
            "loadingRecords": "Loading...",
            "processing": "Processing...",
            "search": "جستجو:",
            "zeroRecords": "رکوردی یافت نشد",
            "paginate": {
                "next": "بعدی",
                "previous": "قبلی"
            }
        },
        "info": false,
        "lengthChange": false
    });

}

const getUrlParameter = (sParam) => {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};





$(document).ready(function () {



    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat'
    });




});


