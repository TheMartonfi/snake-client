let connection;
const { keyInputs } = require('./constants');


const setupInput = (conn) => {
  
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {
    stdin.on('data', (input) => {

      if (input === '\u0003') {
        conn.write('The application is now closing.');
        process.exit();
      } else {
        for (const key in keyInputs) {
          if (input === key) {
            conn.write(keyInputs[key]);
          }
        }
      }

    });
  };
  handleUserInput();
  return stdin;
};

module.exports = { setupInput };
