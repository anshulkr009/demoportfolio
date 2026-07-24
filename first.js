 document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#element');

  if (!element) {
    return;
  }

  if (typeof Typed === 'undefined') {
    console.error('Typed.js failed to load.');
    return;
  }

  new Typed(element, {
    strings: ['<i>Web</i> Developer.', '<i>AIML</i> Engineer', '& Student.'],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true,
  });
});
  