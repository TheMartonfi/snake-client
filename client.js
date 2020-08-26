const net = require('net');

const connect = function() {

  const conn = net.createConnection({
    host: '192.168.0.139',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Succesfully Connected!')
    conn.write('Name: TMF');
  });

  conn.on('data', (data) => {
    console.log('Data: ', data);
  });

  return conn;
};

module.exports = { connect };