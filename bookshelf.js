const BOOKS = [
  { title: "The Lightning Thief", author: "Rick Riordan", synopsis: "Percy discovers he's a demigod..." },
  { title: "Harry Potter and the Sorcerer’s Stone", author: "J.K. Rowling", synopsis: "A young boy learns he's a wizard..." },
  { title: "Wings of Fire: The Dragonet Prophecy", author: "T.T. Sutherland", synopsis: "Dragonets fulfill a prophecy in war..." },
  { title: "Diary of a Wimpy Kid", author: "Jeff Kinney", synopsis: "Middle-school misadventures in journals..." },
  // Add more book objects here
];

// Elements
const bookshelfImg = document.querySelector('.bookshelf-img');
const pullout = document.getElementById('pullout');
const titleEl = document.getElementById('pull-title');
const authorEl = document.getElementById('pull-author');
const synopsisEl = document.getElementById('pull-synopsis');
const closePull = document.getElementById('close-pull');
const listDot = document.getElementById('list‑dot');
const listPopup = document.getElementById('list-popup');
const bookList = document.getElementById('book-list');
const closeList = document.getElementById('close-list');

// Random book pull-out
bookshelfImg.addEventListener('click', () => {
  const book = BOOKS[Math.floor(Math.random() * BOOKS.length)];
  titleEl.textContent = book.title;
  authorEl.textContent = book.author;
  synopsisEl.textContent = book.synopsis;
  pullout.classList.remove('hidden');
  setTimeout(() => pullout.classList.add('show'), 10);
});

// Close pullout
closePull.addEventListener('click', () => {
  pullout.classList.remove('show');
  setTimeout(() => pullout.classList.add('hidden'), 300);
});

// Build full list
BOOKS.forEach(b => {
  const li = document.createElement('li');
  li.textContent = `${b.title} — ${b.author}`;
  bookList.appendChild(li);
});

// Show list popup
listDot.addEventListener('click', () => {
  listPopup.classList.remove('hidden');
});

// Close list popup
closeList.addEventListener('click', () => listPopup.classList.add('hidden'));
listPopup.addEventListener('click', e => {
  if (e.target === listPopup) listPopup.classList.add('hidden');
});
