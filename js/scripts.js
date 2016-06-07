$(document).ready(function() {
  for ( index = 99; index > 0; index -= 1) {
    var userInput = index + ' Bottles of Beer on the Wall';
    if ( index > 1 ) {
      $('ul').append('<li>' + userInput + '</li>');
    } else {
      $('ul').append('<li>' + index + 'Bottle of Beer on the Wall</li>');
    }
  }

})
