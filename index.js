/*
Copyright 2018 gohanwotabe

dangoco client server manager
*/

var conf=module.exports={
    port:process.env.PORT||80,
    host:process.env.HOST||'0.0.0.0',
    log:(process.env.LOG=='true')?true:false,
    deflate:(process.env.DEFLATE=='true')?true:false,
    user:process.env.USER||'[["dangoco","test"]]',
    maxBrokenTunnelTimeout:process.env.MAXBROKENTUNNELTIMEOUT||30,
}

const child_process=require('child_process');

const args=['-h',conf.host,'-p',conf.port,'--maxBrokenTunnelTimeout',conf.maxBrokenTunnelTimeout,'-u',conf.user];
if(conf.deflate)args.push('--enable-deflate',conf);
if(conf.log)args.push('-L');
child_process.fork(require.resolve('dangoco/server.js'),args);