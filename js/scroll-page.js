
// Check scrolling status
var scrolling = false;
var tempScrollTop = 0;
var currentScrollTop = 0;
//var goto_page = '';
//var current_page = 0;
//var page_list = ['pg_one', 'pg_two'];


// Add active to first page
jQuery('.panel:first').addClass('active');
console.log("js loaded....");



function scrollPage(page_name) {
  jQuery('html, body').animate({ 
    scrollTop: jQuery(page_name).offset().top
  }, 200, function() {
    // scrolling animation completed.
//    jQuery(page_name).addClass('active');
//    scrolling = false;
  });
}


// Scorll on scroll
/*
jQuery(document).scroll(function() {
  
  currentScrollTop = jQuery(this).scrollTop();
  jQuery('#over span.current').html(currentScrollTop);
  jQuery('#over span.temp').html(currentScrollTop);
  
  if (!scrolling) {
  
  //  console.log("current: " + currentScrollTop + ", last: " + tempScrollTop);
    if (currentScrollTop >= tempScrollTop) {
        // scroll DOWN
        console.log("down");
        goto_page = '#pg_two';
    } else {
        // scroll UP
        console.log("up");
        goto_page = '#pg_one';
    }
    

    if (goto_page.length > 0) {
      scrolling = true;
      // scroll to page
      jQuery('html, body').animate({ 
        scrollTop: jQuery(goto_page).offset().top
      }, 400, function() {
        // scrolling animation completed.
        jQuery(goto_page).addClass('active');
        goto_page = '';
        scrolling = false;
      });
    }
    
    
  }
  
  tempScrollTop = currentScrollTop;
  
});
*/




/*
jQuery(document).scroll(function() {
  
  currentScrollTop = jQuery(this).scrollTop();
  jQuery('#over span.current').html(currentScrollTop);
  jQuery('#over span.temp').html(tempScrollTop);
  
  if (currentScrollTop >= tempScrollTop) {
    // scroll DOWN
    jQuery('#over span.status').html('down');
    console.log("down");
    current_page++;
  } else {
    // scroll UP
    jQuery('#over span.status').html('up');
    console.log("up");
    current_page--;
  }
  tempScrollTop = currentScrollTop;
  goto_page = page_list[current_page];
  
});


*/




















