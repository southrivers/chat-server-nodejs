const express = require('express')


const app = express();

// 这里用于请求的处理
app.get('/hello', function(req, res) {
    res.send('hello world')
})
// 启动服务器监听
const server = app.listen(8080, () => {
    console.log('server is start!')
})


// 此处用于消息的收发
const ScoketServer = require('socket.io')
const io = ScoketServer(server)
// 这里用于收发消息
io.on('connection', (socket) => {
    console.log(`connect from ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`disconnect from ${socket.id}`)
    });
    socket.on('message', (data) => {
        try {
            console.log(`receive data from client ${JSON.stringify(data)}`);
            socket.broadcast.emit('message-receive', data);
        } catch(e) {
            console.log("fail")
            console.log(e);
        }
        
    })
})


