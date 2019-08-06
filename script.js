var modal = document.querySelector('.hotel-search-modal'),
  searchButton = document.querySelector('.hotel-search-button'),
  form = document.querySelector('.hotel-search-form');


  function toggleVisibility(elem) {
    elem.classList.toggle("visible");
  }


// show/hide modal
document.addEventListener ('click', function(e) {
  if (e.target == searchButton) {
    toggleVisibility(modal);
  };
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
});
