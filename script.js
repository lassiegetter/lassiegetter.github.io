// ── PAGE NAVIGATION ──
function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active-link', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── SLIDESHOW ──
const slides = [
  "https://drive.google.com/thumbnail?id=1wIb323jjvyz-RTMdDKA__su_Zpm3B18M&sz=w1200",
  "https://drive.google.com/thumbnail?id=1XEuSrYEYYDA6SXsoBD7Y0wGUGp12tPBX&sz=w1200",
  "https://drive.google.com/thumbnail?id=10CMwcvslZD2PZDx2PH-BgaaJkjeb6r56&sz=w1200",
  "https://drive.google.com/thumbnail?id=1ZAjJKm6qPtP0ovADq1YEIbFs2zB2lYjz&sz=w1200"
];

let currentSlide = 0;

function goToSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  document.getElementById('slide-img').src = slides[currentSlide];
  document.getElementById('slide-current').textContent = currentSlide + 1;
  document.querySelectorAll('.thumb').forEach((t, i) => {
    t.classList.toggle('active', i === currentSlide);
  });
}

// Wire up slideshow controls after DOM is ready
window.addEventListener('load', function () {
  var thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
      goToSlide(parseInt(this.dataset.index));
    });
  });

  document.getElementById('arrow-left').addEventListener('click', function() {
    goToSlide(currentSlide - 1);
  });

  document.getElementById('arrow-right').addEventListener('click', function() {
    goToSlide(currentSlide + 1);
  });
});
