const http = require('http');
const { URL } = require('url');

const SiteRouter = require('./router/site.router');

const port = 8080;

http.createServer( (req, res) => {
    const fullUrl = 'http://' + req.headers.host + req.url;  
    const query = new URL(fullUrl);
    const url = query.pathname;
    SiteRouter[url]
        ? SiteRouter[url](res)
        : SiteRouter['/404'](res);
}).listen(port);

console.log(
`Server is running at http://127.0.0.1:${ port }
and it is listening...`);
