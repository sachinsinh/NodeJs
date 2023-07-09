const os = require("os");

console.log(os.arch());
console.log(os.freemem() / (1024 * 1024 * 1024)); //free ram

console.log(os.totalmem() / (1024 * 1024 * 1024)); //total ram
console.log(os.hostname()); //hostname
console.log(os.platform()); //which os you use
console.log(os.userInfo());
