const { EXPERIMENTAL_createDummyWin32DeviceToken } = require('../src');

EXPERIMENTAL_createDummyWin32DeviceToken()
	.then(console.log)
	.catch(console.error);