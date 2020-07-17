/* eslint-disable */

$(() => {
  console.log('DOCUMENT IS READY!');
  $('h1').css('color', 'red');
  $('h1').css({
    fontFamily: 'sans-serif',
    cursor: 'pointer',
  });
  $('h1').on('click', () => {
    alert('WOUW');
  });
  $('li').css('font-family', 'sans-serif');
  $('li').each(function(i) {
    if (i % 2 === 0) {
      $(this).css('color', 'green');
    } else {
      $(this).css('color', 'orange');
    }
  });
});
