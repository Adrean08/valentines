$(document).ready(function() {
  /*$('#no-button').click(function() {
      $('#no-button').text("Why not? 😢");
      $(this).hide();
      $('#yes-button').text("Yes, please!").addClass('large');
  });*/

 let clickCount = 0;
            
  $('#no-button').click(function() {
      clickCount++;
      
      // Shrink the button
      $(this).addClass('shrink');

         
      // Change the text 
      if (clickCount === 1) {
        $(this).text('ay');

      } 
      else if (clickCount === 2) {
        $(this).text('seryoso ka?');
  
      } 
      else if (clickCount === 3) {
        $(this).text('pag tarong ba');
        
      } 
      else if (clickCount === 4) {
        $(this).text('hindi mo ba ako mahal?');
    
      } 
      else if (clickCount === 5) {
        $(this).text('love naman');
      } 
      else if (clickCount === 6) {
        $(this).text('balakada');
      } 
      else if (clickCount === 7) {
        $(this).text('sunggod nako');
      } 
  
      $('#yes-button').css({
        'width': (200 + 40 * clickCount) + 'px',  // Increase width
        'height': (60 + 20 * clickCount) + 'px',  // Increase height
        'font-size': (20 + 20 * clickCount) + 'px' //Increase font size

    });
    if (clickCount >= 10) {
      $('#yes-button').css({
          'width': '100vw',  
          'height': '100vh'  
      });
      
  } 
});



  /* let clickCount = 0;

            $('#no-button').click(function() {
                clickCount++; // Increase count every time NO is clicked

                // Increase the width and height of the YES button
                $('#yes-button').css({
                    'width': (200 + 40 * clickCount) + 'px',  // Increase width
                    'height': (60 + 20 * clickCount) + 'px'  // Increase height
                });

                // Check if the YES button has reached a point where it covers the page
                if (clickCount >= 10) {
                    $('#yes-button').css({
                        'width': '100vw',  // Make the width cover the full viewport width
                        'height': '100vh'  // Make the height cover the full viewport height
                    });
                    $('#yes-button').text("YES! I've taken over!"); // Text when it covers the screen
                } else {
                    $('#yes-button').text("YES! (" + clickCount + ")");
                }
            }); */


  $('#yes-button').click(function() {
      $('#message').text("Okay see you sa Febuary 14 I love you! ❤️");
      $(this).hide();
      $('#no-button').hide();
      $('.img-1').hide();
      $('.img-2').show();
  });
});

