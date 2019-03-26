let shell = require('shelljs'), org = "reliance",channel="testchannel";
console.log('worked');
shell.exec('dynamic-add-org.sh','up',org,channel);