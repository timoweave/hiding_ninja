

function init_ninjas(elem) {
    for (var i=0; i<8; i++) {
        var ninja = $('<img>')
            .attr('src', 'ninja.png')
            .attr('id', 'ninja_' + i)
            .addClass('ninja')
            .click(function() {
                console.log($(this).attr('id'));
                $(this).hide();
            });
        elem.append(ninja);
    }
}

function init_all() {
    init_ninjas($("#ninja_range"));

}

$(document).ready(function(){
    init_ninjas($("#ninja_range"));

    $("button").click(function() {
        $('.ninja').show();
    })
});
