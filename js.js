$(document).ready(function(){
//1 ex
  $("#hideshow").click(function(){
    $("#text1").toggle();
  });
//2ex
  $(function() {
        $('#checkbox').click(function() {
            if ($(this).is(':checked')) {
                $('#subm').removeAttr('disabled');
            } else {
                $('#subm').attr('disabled', 'disabled');
            }
        });
    });
//ex4
$('body').css('background-image', 'url(https://churchfieldsjunior.com/wp-content/uploads/2019/11/eso-summary_2357457k.jpg)');
//ex3
$("#scroll").click(function(event) {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
//ex6
$("#fadetext").click(function(event){
  	$("#fadetext").fadeTo(1500, 0.15);
});
//ex7
$("#animation").click(function(){
		$("#toanimate").animate({
		height: '200px',
		width: '100px'
	});
		$("#toanimate").animate({
		height: '100px',
		width: '100px',
		left:'+=250px',
	});
		$("#toanimate").animate({
		height: '100px',
		width: '200px',
		left:'-=250px'
	});
		$("#toanimate").animate({
		height: '100px',
		width: '100px'
	});
		$("#toanimate").animate({
		height: '200px',
		width: '200px'
	});
});
$("#reset").click(function(){
		$("#toanimate").animate({
		height: '100px',
		width: '100px'
	});
}); 
//ex5
var len = 150;
$('textarea').keyup(function() {
  var textlen = len - $(this).val().length;
  $('#anyid').text(textlen);
});
});
