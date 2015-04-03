(function() {
  var conversions = {
    4: "a",
    3: "e",
    5: "s",
    6: "g",
    1: "i",
    0: "o",
    7: "t"
  };


$(document).ready(function() {

  $('#convert').on('click', function() {
    var convertedText = converter( $('#input').val() );
    $('#output').text(convertedText);
  });

});

function converter(str) {
  var translation = [];
  
  for (var i=0; i<str.length; i++) {
    if( conversions[str[i]] !== undefined ) {
      translation.push(conversions[str[i]]);
    }
    else {
      translation.push(str[i]);
    }
  }
  
  return translation.join('');
}


})();