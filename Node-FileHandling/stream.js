const fs = rrequire('fs')
const readStream = fs.createReadStream('./test.txt', 'utf-8')
const writeStream = fs.createReadStream()

readStream.on('data', (chunk)=>{
    writeStream.write(chunk);
})