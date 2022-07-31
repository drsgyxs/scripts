/*

***************************
QuantumultX:

[rewrite_local]
^https:\/\/apis\.dongmanmanhua\.cn\/app\/episode\/info\/v4 url script-response-body https://raw.githubusercontent.com/drsgyxs/scripts/main/dongman.js
^https:\/\/pay\.dongmanmanhua\.cn\/app\/wallet\/list\/v2 url script-response-body https://raw.githubusercontent.com/drsgyxs/scripts/main/dongman.js

[mitm]
hostname = apis.dongmanmanhua.cn, pay.dongmanmanhua.cn

**************************/

var url = $request.url;
var body = $response.body;
var obj = JSON.parse(body);

const episodeInfo = '/app/episode/info';
const wallet = '/app/wallet/list';

if (url.includes(episodeInfo)) {
  // body.message.result.episodeInfo.free = true;
  obj.message.result.episodeInfo.account.firstPay = false;
  obj.message.result.episodeInfo.account.account = 666;
  obj.message.result.episodeInfo.account.bean = 666;
  obj.message.result.episodeInfo.isPurchased = true;
} else if (url.includes(wallet)) {
  obj.message.result.account.firstPay = false;
  obj.message.result.account.account = 666;
  obj.message.result.account.bean = 666;
}

$done({body: JSON.stringify(obj)});