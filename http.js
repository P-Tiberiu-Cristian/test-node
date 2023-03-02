const http = require ('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('This is my home page!');
        return;
    }
    if(req.url === '/about'){
        res.end('This is my about page!');
        return;
    }
    res.end(`
        <h1>Oh no!</h1>
        <p>It seems we can't find the page you are looking for!</p>
        <a href='/'>Home</a>
    `);
})

server.listen(5000);