const fs = require('fs')

const writeData = 'Welcome, please fill in the required fields below'

const filePath = './data.txt'

fs.writeFile('./data.txt', writeData, (err) => {
    if(err) {
        console.log('Error writing to the file', err);
    } else {
    console.log('Data written successfully');
    }
})
    
fs.readFile('./data.txt', 'utf-8', (err, readData) => {
        if(err) {
            console.error('Error reading the file', err)
        }
        else {
            console.log('Data read successfully');
            console.log(readData);
        }
})

const appendData = 'This data will be appended to the file';
fs.appendFile(filePath, appendData, (err) => {
    if(err) {
        console.error('Error appending the file', err)
    } else {
        console.log('Data has been appended');
    }
});

fs.readFile(filePath, 'utf-8', (err, readDataAgain) => {
    if(err) {
        console.error('Error reading the file');
    } else {
        console.log('Data read after appending');
        console.log(readDataAgain);
    }
})
        