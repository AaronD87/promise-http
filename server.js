// const http = require('http');
// const { parse } = require('url');

// http.createServer(function(req, res) {
//   const url = parse(req.url);

//   if(url.pathname === '/') {
//     res.end('<html><body style="text-align: center;"><h1>Thanks for Visiting!</h1></body></html>');
//   }

//   if(url.pathname === '/birthday') {
//     res.statusCode = 200;
//     res.end('<html><body style="text-align: center;">Happy Birthday!</body></html>');

//   } else if(url.pathname === '/tomorrow') {
//     res.statusCode = 200;
//     res.end('<html><body style="text-align: center;">Tomorrow, Tomorrow</body></html>');

//   } else if(url.pathname === '/birthday/tomorrow') {
//     res.statusCode = 200;
//     res.end('<html><body style="text-align: center;">Tomorrow is your birthday!</body></html>');
    
//   } else {
//     res.statusCode = 404;
//     res.end('Not Found');
//   }
//   res.writeHead(200, { 'Content-Type': 'text/html' });
// }).listen(8080);


const app = require('./lib/app');
const http = require('http');


http.createServer(app).listen(7890, () => console.log('LISTENING ON 7890'));
