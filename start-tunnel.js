const localtunnel = require('localtunnel');

(async () => {
  try {
    const tunnel = await localtunnel({ port: 5173 });
    console.log('LocalTunnel started:', tunnel.url);
    tunnel.on('close', () => {
      console.log('LocalTunnel closed');
      process.exit(0);
    });
  } catch (err) {
    console.error('Failed to start LocalTunnel:', err);
    process.exit(1);
  }
})();
