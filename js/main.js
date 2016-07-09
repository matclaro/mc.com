$(document).ready(function() {
	
    $('#main-sidebar').simpleSidebar({
     wrapper: '#main',
     opener: '#toggle-sidebar',
     animation: {
      easing: 'easeOutQuint'
     },
     sidebar: {
      align: 'right',
      closingLinks: '.close-sb'
     },
     sbWrapper: {
      display: false
     }
    });
      
    $(".tagline").letterfx({"fx":"fall","words":true,"timing":200});
    $(".tagline-2").letterfx({"fx":"fall","words":true,"timing":300});

    $.scrollIt();
    
    AOS.init({
        easing: 'ease-in-out-sine'
    });

    
});	