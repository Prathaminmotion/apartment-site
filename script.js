// Placeholder content object — replace with your real content
const CONTENT = {
  bed:       "🛏 This is your personal space. Replace with your dream log or comfort items.",
  laptop:    "💻 Encrypted Terminal — replace with your secret diary interface.",
  desk:      "🗂 Here’s your resume and work portfolio. Replace with real links or embeds.",
  bookshelf: "📚 Books, D&D lore, favorite quotes. Swap in your actual list.",
  window:    "🌇 Vision board: your goals, dream cities, aspirations.",
  closet:    "🧥 Fashion moodboard: upload images or links to favorite outfits.",
  mirror:    "🪞 About Me: a short creative bio or poetic reflection.",
  tv:        "📺 Watchlist: embed your favorite movies, shows, creators.",
  drawer:    "🔐 Secret vault: hidden files, unreleased ideas, personal notes."
};

// DOM references
const modal      = document.getElementById("content-modal");
const modalBox   = document.getElementById("modal-box");
const contentEl  = document.getElementById("modal-content");
const closeBtn   = document.getElementById("close-btn");

// Show the modal with content for a given zone
function showContent(zone) {
  const text = CONTENT[zone] || "No content found for `" + zone + "`.";
  contentEl.textContent = text;
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
  // Trap focus inside modal
  closeBtn.focus();
}

// Hide modal
function hideContent() {
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

// Close on outside click
modal.addEventListener("click", (e) => {
  if (e.target === modal) hideContent();
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") {
    hideContent();
  }
});
