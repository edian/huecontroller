/**
 * Created by sytedian on 4/16/17.
 */
$('#toggle-one').change(function() {
   // $('#console-event').html('Toggle: ' + $(this).prop('checked'))
    console.log('value:'+$(this).prop('checked'));
    var data={};
    data.status = $(this).prop('checked');
    $.ajax({
        url: '/hue',
        data:  JSON.stringify(data),
        type : "POST",
        contentType : "application/json",
        statusCode: {
            200: function() {

                // you can even add a header with success message and toggle
                // its display on success

            },
            error: function(error){

            }
        }

    });
});