$(document).ready(function(){

  //prepare table of contents div
  var tocWrapper = $('<div></div>');
  tocWrapper.attr('id', 'toc');
  var list = $('<ul></ul>');
  tocWrapper.append(list);

  // add to the page
  $('#page-wrapper').append(tocWrapper);

  // give headers ids
  var idPrefix = 'toc-';
  $('h1, h2, h3').each(function (index) {
    var currentId = idPrefix + index;
    var currentHeader = $(this).attr('id', currentId);
    var link = $('<a></a>').attr('href', '#' + currentId);
    link.html(currentHeader.html());
    list.append($('<li></li>').append(link));
  });


  // make list of toc items
  // put them on the page

});