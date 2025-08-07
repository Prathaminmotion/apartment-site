const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");

const BOOKS = [
  "1. The Lightning Thief – Rick Riordan",
  "2. The Sea of Monsters – Rick Riordan",
  "3. The Titan's Curse – Rick Riordan",
  "4. The Battle of the Labyrinth – Rick Riordan",
  "5. The Last Olympian – Rick Riordan",
  "1. The Lost Hero – Rick Riordan",
  "2. The Son of Neptune – Rick Riordan",
  "3. The Mark of Athena – Rick Riordan",
  "4. The House of Hades – Rick Riordan",
  "5. The Blood of Olympus – Rick Riordan",
  "1. The Red Pyramid – Rick Riordan",
  "2. The Throne of Fire – Rick Riordan",
  "3. The Serpent's Shadow – Rick Riordan",
  "1. The Sword of Summer – Rick Riordan",
  "2. The Hammer of Thor – Rick Riordan",
  "3. The Ship of the Dead – Rick Riordan",
  "1. Convergence – Stan Lee",
  "2. The Dragon's Return – Stan Lee",
  "3. The Balance of Power – Stan Lee",
  "1. Harry Potter and the Sorcerer’s Stone – J.K. Rowling",
  "2. Harry Potter and the Chamber of Secrets – J.K. Rowling",
  "3. Harry Potter and the Prisoner of Azkaban – J.K. Rowling",
  "4. Harry Potter and the Goblet of Fire – J.K. Rowling",
  "5. Harry Potter and the Order of the Phoenix – J.K. Rowling",
  "6. Harry Potter and the Half-Blood Prince – J.K. Rowling",
  "7. Harry Potter and the Deathly Hallows – J.K. Rowling",
  "1. The Dragonet Prophecy – Tui T. Sutherland",
  "2. The Lost Heir – Tui T. Sutherland",
  "3. The Hidden Kingdom – Tui T. Sutherland",
  "4. The Dark Secret – Tui T. Sutherland",
  "5. The Brightest Night – Tui T. Sutherland",
  "6. Moon Rising – Tui T. Sutherland",
  "7. Winter Turning – Tui T. Sutherland",
  "8. Escaping Peril – Tui T. Sutherland",
  "9. Talons of Power – Tui T. Sutherland",
  "10. Darkness of Dragons – Tui T. Sutherland",
  "11. The Lost Continent – Tui T. Sutherland",
  "12. The Hive Queen – Tui T. Sutherland",
  "13. The Poison Jungle – Tui T. Sutherland",
  "14. The Dangerous Gift – Tui T. Sutherland",
  "15. The Flames of Hope – Tui T. Sutherland",
  "1. Diary of a Wimpy Kid – Jeff Kinney",
  "2. Rodrick Rules – Jeff Kinney",
  "3. The Last Straw – Jeff Kinney",
  "4. Dog Days – Jeff Kinney",
  "5. The Ugly Truth – Jeff Kinney",
  "6. Cabin Fever – Jeff Kinney",
  "7. The Third Wheel – Jeff Kinney",
  "8. Hard Luck – Jeff Kinney",
  "9. The Long Haul – Jeff Kinney",
  "10. Old School – Jeff Kinney",
  "11. Double Down – Jeff Kinney",
  "12. The Getaway – Jeff Kinney",
  "13. The Meltdown – Jeff Kinney",
  "14. Wrecking Ball – Jeff Kinney",
  "15. The Deep End – Jeff Kinney",
  "16. Big Shot – Jeff Kinney",
  "17. Diper Överlöde – Jeff Kinney",
  "18. No Brainer – Jeff Kinney"
];


const COMMANDS = {
  "/help": `
Available commands:
- /help
- /clear
- /about
- /contact
- /links
- /echo [text]
- /reading
- /fav-tech
- /game
- /theme
- /systeminfo
- /keon
  `,
  "/about": `Hi, I’m Pratham — a computer science major with a love for design, storytelling, and making things feel real. Whether it’s a pharmacy website, a creative brand, or a D&D campaign, I build from intuition, curiosity, and a bit of chaos. This is my room for growth — welcome in.`,
  "/contact": `Email: prathaminmotion@outlook.com\nPhone: (989) 964-1453`,
  "/links": `Check out my work:\n- https://saginawdiscountpharmacy.com\n- https://euclidpharmacy.com\n- https://brotherhoodrx.com\n- https://autismsystemsfoundation.com`,
  "/reading": () => `Book of the day: "${BOOKS[Math.floor(Math.random() * BOOKS.length)]}"`,
  "/fav-tech": `C# with Visual Studio Code. Simple. Clean. Reliable.`,
  "/game": `Mini terminal games coming soon...`,
  "/theme": `Theme toggle not implemented yet.`,
  "/systeminfo": `
[ ROOM FOR GROWTH OS ]
User: Pratham
CPU: 9000 thoughts/sec
RAM: 1TB Ambition
OS: V1.0
Mood: Focused
Terminal uptime: 22 years`,
  "/keon": `Keon Manifesto:
I was once naive. A monk of peace — weak, but hopeful. I followed Leboros, the god of peace, not because I was strong, but because I wanted to believe that peace could mean something. When my party was lost, I was the only one left — and darkness whispered where silence once comforted.

I thought I was serving peace, but I was serving control. Corrupted by a false voice, I fell.

But I rose again. Forgiveness became my weapon, unity my armor. The Silent Hand is my rebirth: a network of shadows that deliver hope where light cannot reach. We protect the forgotten. We deliver more than packages — we deliver redemption.

I am Keon. And I walk toward peace, even if I must walk through blood to get there.`
};

function printOutput(text) {
  const line = document.createElement("div");
  line.className = "terminal-line";
  line.textContent = typeof text === "function" ? text() : text;
  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
}

function handleCommand(command) {
  const inputLine = document.createElement("div");
  inputLine.className = "terminal-line user-input";
  inputLine.textContent = `> ${command}`;
  terminal.appendChild(inputLine);

  if (command.startsWith("/echo ")) {
    printOutput(command.slice(6));
  } else if (command === "/clear") {
    terminal.innerHTML = "";
  } else if (COMMANDS[command]) {
    printOutput(COMMANDS[command]);
  } else {
    printOutput("Command not recognized. Type /help for a list of commands.");
  }

  terminal.scrollTop = terminal.scrollHeight;
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    handleCommand(cmd);
    input.value = "";
  }
});
