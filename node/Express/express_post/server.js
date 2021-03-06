var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));


// get(文件, 回调函数)
app.get('index.html', function(req, res) {
    res.sendFile(__dirname + '/' + 'index.html');
})

app.post('/process_post', urlencodedParser, function(req, res) {

	// 输出 JSON 格式
	var response = {
		'first_name': req.body.first_name,
		'last_name': req.body.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('POST应用实例， 访问地址://%s:%s', host, port)
});

// 访问：http://127.0.0.1:8081/index.html  ? 或直接打开主页
