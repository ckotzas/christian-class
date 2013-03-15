var SELECTED_CLASS = 'selected';

$(document).ready(function(){
    
    var tabs = $('#tabs li');

    tabs.click(function() {
        var clickedTab = $(this);
        var tabContents = clickedTab.attr('data-tab-conents');
        $('#tab-contents').html(tabContents);
        tabs.removeClass(SELECTED_CLASS);
        clickedTab.addClass(SELECTED_CLASS);
    });
    
});
