var express = require('express');
var app = express();
const port = 3000

app.post('/test', (req, res) => {
    var obj = req.body

    for (let index = 0; index < obj.length.length; index++) {
        const element = obj.length[index];
        
    }
    res.end('finished')

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
