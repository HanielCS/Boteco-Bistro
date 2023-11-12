document.addEventListener('DOMContentLoaded', function () {
  var contatoLink = document.querySelector('a[href="#contato"]');

  contatoLink.addEventListener('click', function (event) {
    event.preventDefault();

    var contatoSection = document.getElementById('contato');
    contatoSection.scrollIntoView({ behavior: 'smooth' });
  });
});