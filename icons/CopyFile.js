const filename = "hello.txt"
const fs = require('fs')
const __dirname = process.cwd();
fs.readdirSync(__dirname).forEach(file => {
    let str = "export { default as "+ file.replace(".js","")+"} from \"./"+file.replace(".js","")+"\";\n";
    fs.appendFileSync(filename, str, function(err){ 
    })
})