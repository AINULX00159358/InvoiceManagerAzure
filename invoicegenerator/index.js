const common = require('../common/common.js')
console.log("common ", common)


module.exports = async function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    context.log("--------------------------------------------------------------")
    console.log("Data received " + JSON.stringify(eventGridEvent.data));
    context.log("--------------------------------------------------------------")
    
};