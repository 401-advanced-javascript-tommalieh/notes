'use strict'

const minimist = require('minimist');

/**
 *  sample input would be
 *  node nodes.js --add "This is a really cool thing that I wanted to remember for later"
 *
 */
function Input() {

    const argv = minimist(process.argv.slice(2));
    this.payload = argv.add || argv.a;
    Object.keys(argv)[1] === 'add' || Object.keys(argv)[1] === 'a' ? this.action = Object.keys(argv)[1] : this.action = undefined;
    if (this.payload === undefined || this.payload === true) {
        console.log("Error: Please use (--add) or (-a) followed by your note to add it");
    }
    else {
        console.log(`Adding Note: ${this.payload}`);
    }
}


module.exports = Input;