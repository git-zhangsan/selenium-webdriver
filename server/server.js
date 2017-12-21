/*
* @Author: zhanghuiming
* @Date:   2017-12-20 14:14:19
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2017-12-20 14:19:04
*/
const path = require('path');
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

const main = serve(path.join(__dirname,'view'));

app.use(main);
app.listen(3000);