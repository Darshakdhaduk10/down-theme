document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.star-rating').forEach(function (ratingContainer) {
      const stars = ratingContainer.querySelectorAll('.star');

      stars.forEach(function (star) {
        star.addEventListener('click', function (e) {
          e.preventDefault(); // link open thatu rokse
          e.stopPropagation(); // parent <a> sudhi event javanu rokse

          let value = this.getAttribute('data-value');

          ratingContainer.setAttribute('data-rating', value);

          stars.forEach(function (s, index) {
            if (index < value) {
              s.classList.add('filled');
              s.innerHTML = '★'; // filled star
            } else {
              s.classList.remove('filled');
              s.innerHTML = '☆'; // empty star
            }
          });
        });
      });
    });
  });






  