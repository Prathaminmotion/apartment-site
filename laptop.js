const input = document.getElementById('terminal-input');
const output = document.getElementById('output');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    printLine(`$ ${command}`);
    handleCommand(command);
    input.value = '';
  }
});

function handleCommand(cmd) {
  switch (cmd.toLowerCase()) {
    case '/help':
      printLine("Available commands:");
      printLine("- /help");
      printLine("- /echo-keon");
      printLine("- /vault");
      break;
    case '/echo-keon':
      printLine("Echoing Keon's soul... (placeholder response)");
      break;
    case '/vault':
      printLine("Access denied. This command is restricted.");
      break;
    case '':
      break;
    default:
      printLine(`Unknown command: ${cmd}`);
  }
}

function printLine(text) {
  const line = document.createElement('div');
  line.className = 'line';
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

