/* Used to set up question and answer hiding.
   textFeature="table1" becomes ids "table1Q" and "table1A"
*/
var setupVisibilityToggle = function(textFeature) {
    var idQ = "#"+textFeature+"Q";
    var idA = "#"+textFeature+"A";
    //$(idA).hide(); // This should already be done within CSS.
    $(idQ).click(function(e){
	e.preventDefault(); // This keeps clicking the link from scrolling to the top of the page.
	$(idA).slideToggle(); // Show the part of the page with question spoilers.
    });
}

/* Used in classes "question" and "answer" to put in the big letter. */
var bigletter = function(s) { // s: a string to use as the big letter
    return $('<span/>', {
	'class': 'bigletter',
	html: ""+s+". "
    });
}


$(document).ready(function(){
    $('.question').prepend(bigletter('Q'));
    $('.answer').prepend(bigletter('A'));
});
