// Replace these with your real content
const CONTENT = {
  bed:        "🛏 My personal bed zone. Swap in dream logs or comfort items.",
  clothes:    "👕 Closet: favorite outfits or style moodboard.",
  vault:      "🔐 Secret vault: hidden notes or unreleased ideas.",
  tv:         "📺 TV: my watchlist and media recommendations.",
  art:        "🖼 Artwork: inspiration gallery or moodboard.",
  window:     "🌇 Window: my vision board or skyline dreams.",
  laptop:     "💻 Laptop: encrypted diary or code terminal.",
  desk:       "🗂 Desk: resume, portfolio links, project showcase.",
  bookshelf:  "📚 Bookshelf: books, D&D lore, favorite reads.",
  mirror:     "🪞 Mirror: About Me or poetic personal bio."
};

// DOM refs
const dots     = document.querySelectorAll('.dot');
const modal    = document.getElementById('content-modal');
const content  = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-btn');

// Open modal on dot click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const zone = dot.getAttribute('data-zone');
    content.textContent = CONTENT[zone] || "Nothing here yet.";
    modal.style.display = 'flex';
    closeBtn.focus();
  });
});

// Close modal
function hideModal() {
  modal.style.display = 'none';
}
closeBtn.addEventListener('click', hideModal);

// Close on outside click
modal.addEventListener('click', e => {
  if (e.target === modal) hideModal();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    hideModal();
  }
});




