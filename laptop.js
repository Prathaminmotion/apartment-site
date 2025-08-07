document.addEventListener("DOMContentLoaded", () => {
  // DOM references
  const terminal = document.getElementById("terminal");
  const input    = document.getElementById("commandInput");

  // Your book list
  const BOOKS = [
    "The Lightning Thief – Rick Riordan",
    "The Sea of Monsters – Rick Riordan",
    "The Titan's Curse – Rick Riordan",
    "The Battle of the Labyrinth – Rick Riordan",
    "The Last Olympian – Rick Riordan",
    "The Lost Hero – Rick Riordan",
    "The Son of Neptune – Rick Riordan",
    "The Mark of Athena – Rick Riordan",
    "The House of Hades – Rick Riordan",
    "The Blood of Olympus – Rick Riordan",
    "The Red Pyramid – Rick Riordan",
    "The Throne of Fire – Rick Riordan",
    "The Serpent's Shadow – Rick Riordan",
    "The Sword of Summer – Rick Riordan",
    "The Hammer of Thor – Rick Riordan",
    "The Ship of the Dead – Rick Riordan",
    "Convergence – Stan Lee",
    "The Dragon's Return – Stan Lee",
    "The Balance of Power – Stan Lee",
    "Harry Potter and the Sorcerer’s Stone – J.K. Rowling",
    "Harry Potter and the Chamber of Secrets – J.K. Rowling",
    "Harry Potter and the Prisoner of Azkaban – J.K. Rowling",
    "Harry Potter and the Goblet of Fire – J.K. Rowling",
    "Harry Potter and the Order of the Phoenix – J.K. Rowling",
    "Harry Potter and the Half-Blood Prince – J.K. Rowling",
    "Harry Potter and the Deathly Hallows – J.K. Rowling",
    "The Dragonet Prophecy – Tui T. Sutherland",
    "The Lost Heir – Tui T. Sutherland",
    "The Hidden Kingdom – Tui T. Sutherland",
    "The Dark Secret – Tui T. Sutherland",
    "The Brightest Night – Tui T. Sutherland",
    "Moon Rising – Tui T. Sutherland",
    "Winter Turning – Tui T. Sutherland",
    "Escaping Peril – Tui T. Sutherland",
    "Talons of Power – Tui T. Sutherland",
    "Darkness of Dragons – Tui T. Sutherland",
    "The Lost Continent – Tui T. Sutherland",
    "The Hive Queen – Tui T. Sutherland",
    "The Poison Jungle – Tui T. Sutherland",
    "The Dangerous Gift – Tui T. Sutherland",
    "The Flames of Hope – Tui T. Sutherland",
    "Diary of a Wimpy Kid – Jeff Kinney",
    "Rodrick Rules – Jeff Kinney",
    "The Last Straw – Jeff Kinney",
    "Dog Days – Jeff Kinney",
    "The Ugly Truth – Jeff Kinney",
    "Cabin Fever – Jeff Kinney",
    "The Third Wheel – Jeff Kinney",
    "Hard Luck – Jeff Kinney",
    "The Long Haul – Jeff Kinney",
    "Old School – Jeff Kinney",
    "Double Down – Jeff Kinney",
    "The Getaway – Jeff Kinney",
    "The Meltdown – Jeff Kinney",
    "Wrecking Ball – Jeff Kinney",
    "The Deep End – Jeff Kinney",
    "Big Shot – Jeff Kinney",
    "Diper Överlöde – Jeff Kinney",
    "No Brainer – Jeff Kinney"
  ];

  // Core command list
  const COMMANDS = {
    "/help": `
Available commands:
/help
/clear
/about
/contact
/links
/echo [text]
/reading
/fav-tech
/game
/theme
/systeminfo
/keon
    `.trim(),

    "/about": "Hi, I’m Pratham — a computer science major with a love for design, storytelling, and making things feel real. Whether it’s a pharmacy website, a creative brand, or a D&D campaign, I build from intuition, curiosity, and a bit of chaos. This is my room for growth — welcome in.",

    "/contact": "Email: prathaminmotion@outlook.com\nPhone: (989) 964-1453",

    "/links": "Check out my work:\n- https://saginawdiscountpharmacy.com\n- https://euclidpharmacy.com\n- https://brotherhoodrx.com\n- https://autismsystemsfoundation.com",

    "/reading": () => `Book of the day: "${BOOKS[Math.floor(Math.random() * BOOKS.length)]}"`,

    "/fav-tech": "C# with Visual Studio Code. Simple. Clean. Reliable.",

    "/game": "Mini terminal games coming soon...",

    "/theme": "Theme toggle not implemented yet.",

    "/systeminfo": `
[ ROOM FOR GROWTH OS ]
User: Pratham
CPU: 9000 thoughts/sec
RAM: 1TB Ambition
OS: V1.0
Mood: Focused
Terminal uptime: 22 years
    `.trim(),

    "/keon": `Keon Manifesto:
I was once naive. A monk of peace — weak, but hopeful. I followed Leboros, the god of peace, not because I was strong, but because I wanted to believe that peace could mean something. When my party was lost, I was the only one left — and darkness whispered where silence once comforted.

I thought I was serving peace, but I was serving control. Corrupted by a false voice, I fell.

But I rose again. Forgiveness became my weapon, unity my armor. The Silent Hand is my rebirth: a network of shadows that deliver hope where light cannot reach. We protect the forgotten. We deliver more than packages — we deliver redemption.

I am Keon. And I walk toward peace, even if I must walk through blood to get there.`
  };

  // Print a line in the terminal
  function printOutput(text) {
    const line = document.createElement("div");
    line.className = "terminal-line";
    line.textContent = typeof text === "function" ? text() : text;
    terminal.appendChild(line);
    terminal.scrollTop = terminal.scrollHeight;
  }

  // Handle an entered command
  function handleCommand(command) {
    // Echo the user's input
    const inputLine = document.createElement("div");
    inputLine.className = "terminal-line user-input";
    inputLine.textContent = `> ${command}`;
    terminal.appendChild(inputLine);

    // Match built-ins
    if (command.startsWith("/echo ")) {
      printOutput(command.slice(6));
    } else if (command === "/clear") {
      terminal.innerHTML = "";
    } else if (COMMANDS[command]) {
      printOutput(COMMANDS[command]);
    } else {
      printOutput("Command not recognized. Type /help for a list of commands.");
    }
  }

  // Bind Enter key
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      if (cmd) handleCommand(cmd);
      input.value = "";
    }
  });

  // Focus input on load
  input.focus();
});
