function goTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active-link', a.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
