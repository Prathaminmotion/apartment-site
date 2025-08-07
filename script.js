// === Content placeholder for modal ===
const CONTENT = {
  bed:        "🛏 Your personal bed zone. Swap in dream logs or comfort items.",
  clothes:    "👕 Closet: favorite outfits or style moodboard.",
  vault:      "🔐 Secret vault: hidden notes or unreleased ideas.",
  tv:         "📺 TV: your watchlist and media recommendations.",
  art:        "🖼 Artwork: inspiration gallery or moodboard.",
  window:     "🌇 Window: your vision board or skyline dreams.",
  desk:       "🗂 Desk: resume, portfolio links, project showcase.",
  bookshelf:  "📚 Bookshelf: books, D&D lore, favorite reads.",
  mirror:     "🪞 Mirror: About Me or poetic personal bio."
};

// === DOM references ===
const dots = document.querySelectorAll('.dot');
const modal = document.getElementById('content-modal');
const contentEl = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-btn');

// === Open modal or redirect on dot click ===
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const zone = dot.getAttribute('data-zone');

    if (zone === 'laptop') {
      window.location.href = 'laptop.html';
      return;
    }

    const text = CONTENT[zone] || `No content for "${zone}".`;
    contentEl.textContent = text;
    modal.style.display = 'flex';
    closeBtn.focus();
  });
});

// === Close modal ===
function hideModal() {
  modal.style.display = 'none';
}
closeBtn.addEventListener('click', hideModal);

// === Close modal on outside click ===
modal.addEventListener('click', e => {
  if (e.target === modal) hideModal();
});

// === Close modal on Escape key ===
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    hideModal();
  }
});
