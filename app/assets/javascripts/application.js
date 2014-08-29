// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require twitter/bootstrap
//= require_tree .

$(function() {
    $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 350,
        width: 350,
        modal: true,
        buttons: {
            "Save": function() {
                $( "#dialog-form-tag").submit();
                $( this ).dialog( "close" );
},
Cancel: function() {
    $( this ).dialog( "close" );
    }
},
close: function() {
    }
});
});

function show_notes_dialog(id, current_note) {
    $( "#dialog-form-tag").attr('action', "/ports/" + id);
    $( "#notes").val(current_note);
    $( "#dialog-form" ).dialog( "open" );
}

