let connection;

const setupInput = (conn) => {
  
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {
    stdin.on('data', (key) => {

      if (key === '\u0003') {
        conn.write('The application is now closing.');
        process.exit();
      } else if (key === 'w') {
        conn.write('Move: up');
      } else if (key === 'a') {
        conn.write('Move: left');
      } else if (key === 's') {
        conn.write('Move: down');
      } else if (key === 'd') {
        conn.write('Move: right');
      } else if (key === 'q') {
        conn.write(`Say: Let's get this bread!`); 
      } else if (key === 'e') {
        conn.write(`Say: Good Game`);
      } else if (key === 'r') {
        conn.write(`Say: The input lag is awful`);
      }

    });
  };
  handleUserInput();
  return stdin;
};

module.exports = { setupInput };
