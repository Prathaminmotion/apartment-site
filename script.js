// Placeholder content — replace with your own
const CONTENT = {
  bed:       "🛏 Your bed zone. Replace with sleep logs or dream journal.",
  clothes:   "👕 Your closet. Replace with favorite outfits or fashion moodboard.",
  vault:     "🔐 Secret vault. Replace with hidden notes or unreleased ideas.",
  tv:        "📺 TV. Replace with your watchlist or favorite media.",
  art:       "🖼 Wall art. Replace with moodboard or inspiration gallery.",
  window:    "🌇 Window view. Replace with vision board or travel goals.",
  laptop:    "💻 Laptop. Replace with encrypted diary or code terminal.",
  desk:      "🗂 Desk. Replace with resume and project portfolio.",
  bookshelf: "📚 Bookshelf. Replace with D&D lore or favorite reads.",
  mirror:    "🪞 Mirror. Replace with About Me or personal reflection."
};

// DOM Elements
const hotspots = document.querySelectorAll('.hotspot');
const modal     = document.getElementById('content-modal');
const modalBox  = document.getElementById('modal-box');
const contentEl = document.getElementById('modal-content');
const closeBtn  = document.getElementById('close-btn');

// Show modal on hotspot click
hotspots.forEach(hot => {
  hot.addEventListener('click', () => {
    const zone = hot.getAttribute('data-zone');
    contentEl.textContent = CONTENT[zone] || "No content for `" + zone + "`.";
    modal.style.display = 'flex';
    closeBtn.focus();
  });
});

// Close modal
function hideContent() {
  modal.style.display = 'none';
}
closeBtn.addEventListener('click', hideContent);

// Close on click outside modal box
modal.addEventListener('click', e => {
  if (e.target === modal) hideContent();
});

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    hideContent();
  }
});
