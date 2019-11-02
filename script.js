function checkInput() {
    let event = window.event || event.which;

    if (event.keyCode == 13) {
        event.preventDefault();
        addLine(document.getElementById("textinput").value);
        document.getElementById("textinput").value = "";
    }

    document.getElementById("textinput").style.height = (document.getElementById("textinput").scrollHeight) + "px";
}

function addLine(line) {
    let textNode = document.createTextNode(line);
    document.getElementById("consoletext").appendChild(textNode);
}

$(document).ready(function () {    
    var newText, originaltext = '';

    $('#editable').html(function () {        
        if ($.trim($(this).html()) == "") {
            placehold('editable', 'Please enter a name');
            originaltext = $.trim($('#editable').html());
        }
    });
    $('#editable').click(function () {        
        if ($.trim($(this).html()) == originaltext) {
            placehold('editable', '');
        } else {
            placehold('editable', newText);
        }
    });
    $('#editable').blur(function () {         
        newText = $('#editable').html();               
        if ($.trim($(this).html()) != originaltext && $.trim($(this).html()) !='') {            
            placehold('editable', newText);
        } else {
            placehold('editable', originaltext);
        }
    });

});
function placehold(id, placeholder) {
    $("#" + id).html(placeholder);
}
    