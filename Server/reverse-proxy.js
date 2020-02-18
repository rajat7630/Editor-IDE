const redbird = require('redbird');

const reverseProxy = redbird({
  port: 80
});

reverseProxy.register('client.rajat.local', 'http://127.0.3.1:5000');
reverseProxy.register('server.rajat.local', 'http://127.0.2.1:3000');
