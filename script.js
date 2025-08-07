function showContent(zone) {
  const content = {
    bed: "🛏 This is your personal space. Maybe a dream log, comfort items, or music?",
    laptop: "💻 Encrypted Terminal — enter secret codes here (coming soon).",
    desk: "🗂 Here’s your resume, work projects, or goals.",
    bookshelf: "📚 Books, D&D lore, favorite creators or quotes.",
    window: "🌇 Your vision board. Sunset dreams, goals, cities you want to live in.",
    closet: "🧥 Your closet — favorite fits, fashion moodboard.",
    mirror: "🪞 About Me — personal reflection or poetic intro.",
    tv: "📺 Watchlist. Movies, shows, creators that inspire you.",
    drawer: "🔐 Secret vault — hidden files, soul system, unreleased ideas."
  };

  document.getElementById("modal-content").innerText = content[zone] || "No content found.";
  document.getElementById("content-modal").style.display = "flex";
}

function hideContent() {
  document.getElementById("content-modal").style.display = "none";
}
