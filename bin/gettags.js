"use strict";
// STOP - THIS IS A TEMPLATE
//
// copy this to the new filename for your class method
// put a copy of your main runtime with the class in bin/
// put a copy of the class constructor in class/
// put a copy of the functions your class needs in fun/

// main runtime
// recieve and process args from the callout
// this will show you return values of your args 
// for runtime
//
const path = require('path');
const scriptname = path.basename(__filename);
const funcall = `../fun/${scriptname}`
const doParse = require(funcall)
const Keystore = require('../class/keystore')
const Cpobject = require('../class/object')
let mykey = 'obj'

// example runtime for your class method
//

module.exports = async (args) => {
	try {
		if (args._[1]) {
			mykey = args._[1]
		}
		let cpRes = await doParse(mykey)
		console.log(' ')
		console.log('Add Tags: ')
		await console.dir(cpRes)
		console.log(' ')
	} catch (err) {
		console.log('ERROR IN SESSION event : ' + err.message)
		console.log(err)
	} finally {
		//let runcmd = {'_':['logout']}
		//require('../bin/logout')(runcmd)
		console.log(scriptname + ' runtime finally done.')
	}
}

