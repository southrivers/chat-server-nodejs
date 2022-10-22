const express = require('express')

const app = express();

app.get('/hello', function(req, res) {
    res.send('hello world')
})

// 启动服务器监听
app.listen(8080, () => {
    console.log('server is start!')
})