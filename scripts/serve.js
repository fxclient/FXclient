import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('build');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
    '.json': 'application/json', '.png': 'image/png', '.ico': 'image/x-icon' };
const server = http.createServer((request, response) => {
    try {
        const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
        const filename = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
        if (!filename.startsWith(root + path.sep)) { response.writeHead(403).end(); return; }
        if (!fs.existsSync(filename) || !fs.statSync(filename).isFile()) { response.writeHead(404).end('Not found'); return; }
        response.writeHead(200, { 'Content-Type': types[path.extname(filename)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
        fs.createReadStream(filename).pipe(response);
    } catch { response.writeHead(400).end('Bad request'); }
});
server.listen(8080, '127.0.0.1', () => console.log('FX Client: http://127.0.0.1:8080 (Ctrl+C to stop)'));
