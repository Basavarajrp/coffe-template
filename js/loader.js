$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
});

function toggleModel() {
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}