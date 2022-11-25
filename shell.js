const {spawn}=require('child_process');

let listfiles=spawn("cd ",{shell:true})
listfiles.stderr.on("data",(error) =>{
    console.log(error.toString());
})
listfiles.stdout.on("data",(data) =>{
    console.log("\ncomplete directory\n"+data.toString());
})


let files=spawn("ls",{shell:true})
files.stderr.on("data",(error) =>{
    console.log(error.toString());
})
files.stdout.on("data",(data) =>{
    console.log("\nlist of files:\n"+data.toString());
})



let parent=spawn("pwd ",{shell:true})
parent.stderr.on("data",(error) =>{
    console.log(error.toString());
})
parent.stdout.on("data",(data) =>{
    console.log("\ncurrent working directory:\n"+data.toString());
})







// console.log(process.cwd())

console.log("directory with argument");
process.argv.forEach(function(val,index,array){
    console.log(index+':'+val);
})


//to exit process
parent.on('exit', (exit) => {
    console.log(`child process exited with code ${exit}`);
  });


//for fg command
//   'use strict';

//   var fs = require('fs');
//   var child_process = require('child_process');
//   var file = 'F:/Project1/tmp/node-editor-test';
  
//   fs.writeFile(file, "Node Editor", function () {
//     var child = child_process.spawn('vim', [file], {stdio: 'inherit'});
  
//     child.on('close', function () {
//       fs.readFile(file, 'utf8', function (err, text) {
//         console.log('File content is now', text);
//       });
//     });
//   });



