const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath)

    if (!ext) {
        filePath += '.html'
    }
    console.log(filePath)

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'err.html'), () => {
                if (err) {
                    res.writeHead(500)
                    res.end('Error')
                } else {
                    res.writeHead(200, {
                        'Context-Type': 'text/html'
                    })
                    res.end(data)
                }
            })
        } else {
            res.writeHead(200, {
                'Context-Type': 'text/html'
            })
            res.end(content)
        }
    })
})

server.listen(3000, () => {
    console.log('Server started');
})