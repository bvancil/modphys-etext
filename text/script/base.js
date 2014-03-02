/* Add an array map function from http://www.tutorialspoint.com/javascript/array_map.htm */
if (!Array.prototype.map)
{
  Array.prototype.map = function(fun /*, thisp*/)
  {
    var len = this.length;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array(len);
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
        res[i] = fun.call(thisp, this[i], i, this);
    }

    return res;
  };
}


/* Used to set up question and answer hiding.
   textFeature="table1" becomes ids "table1Q" and "table1A"
*/
var setupVisibilityToggle = function(textFeature) {
    var idQ = "#"+textFeature+"Q";
    var idA = "#"+textFeature+"A";
    //$(idA).hide(); // This should already be done within CSS (base.css), but it doesn't seem to work.
    $(idQ).click(function(e){
	e.preventDefault(); // This keeps clicking the link from scrolling to the top of the page.
	$(idA).slideToggle(); // Show the part of the page with question spoilers.
    });
}

var showAllToggles = function(e) {
    e.preventDefault(); // This keeps clicking the link from scrolling to the top of the page.
    $('.initiallyhidden').show();
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
    $('#showalltoggles').click(showAllToggles);
});
