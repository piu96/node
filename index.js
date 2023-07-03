const fs=require("fs");
const os=require("os");
// const oper=require('./oper');
const{add,sub,mul} =require('./oper');
const chalk = require("chalk");
const validator = require("validator");
const http =require("http")

// const name ="sruti";
// module wrapper function//
// ( function(exports,require,module,_filename,_dirname){
//   const name="vinod";
//   console.log(name);
// }  )

//create a new file//
// fs.writeFileSync("read.txt","welcome to my channel");
// fs.writeFileSync("read.txt","welcome to my channel sruti");

// fs.appendFileSync('read.txt',"how r you i am fine");

// const buf_data=fs.readFileSync('read.txt');
// org_data= buf_data.toString();

// console.log(org_data);
// fs.renameSync('read.txt','readwrite.txt');
// fs.mkdirSync('thapa');
// fs.writeFileSync("bio.txt","my name is sruti");
// fs.appendFileSync("bio.txt","ok done");
// const data=fs.readFileSync("bio.txt","utf8");
// console.log(data);

// fs.writeFile("read.txt","today is awsome day",(err)=>{
//     console.log("file is created");
//     console.log(err);
// });
// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// });
// const data =fs.readFileSync("read.txt","utf-8");
// console.log(data);
// console.log('hi');
// fs.readFile("read.txt","utf-8",(err,data)=>{
// console.log(data);
// });
// console.log("hi");
// fs.mkdir("thapa2",(err)=>{
//    console.log("folder created");
// });

// fs.writeFile("./thapa2/bio.txt","my name is sruti",(err)=>{
//   console.log("file cretaed");
// });

// fs.readFile("./thapa2/bios.txt","utf-8",(err,data)=>{
//  console.log(data);
// });

// fs.rename("./thapa2/bio.txt","./thapa2/mybio.txt",(err)=>{
//     console.log("rename is done");
// });

// fs.rmdir("./thapa",(err)=>{
//  console.log("data delete");
// });
// console.log(os.arch());
// const freeMemo= os.freemem();
// console.log(`${freeMemo/1024/1024/1024}`);
// console.log(os.hostname());

// fs.writeFile("oper.js","today is awsome day",(err)=>{
//         console.log("file is created");
//         console.log(err);
//     });
// fs.mkdir("./npmMod",(err)=>{
//    console.log("new folder is created");
// });
// fs.writeFile("./npmMod/index.js","filecreated",(err)=>{
//  console.log("file created");
// });
// console.log(add(5,5));
// console.log(mul(5,5));


// console.log(chalk.blue("hello world"));
// const res =validator.isEmail("srutigmail.com");
// console.log(res ?chalk.green.inverse(res):chalk.red.inverse(res));

// console.log(name);

const server=http.createServer((req,res)=>{
  console.log(req.url);
  res.end("hello from the other side");

});


server.listen(8000,"127.0.0.1",()=>{
  console.log("listining to the port no 8000");
});

server.listen(8000,"127.0.0.1",()=>{
  console.log("listining to the port no 8000");
});
;

server.listen3(8000,"127.0.0.1",()=>{
  console.log("listining to the port no 8000");
});
server.listen4(8000,"127.0.0.1",()=>{
  console.log("listining to the port no 8000");
});

// okkk333
// okkkkk//
// ok444//

//ok2//
//okkkkkkk//

//ok4//

//ok5//
