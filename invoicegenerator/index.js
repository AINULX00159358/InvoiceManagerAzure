const common = require('../common/common.js')
console.log("common ", common)


module.exports = async function (context, eventGridEvent) {
    
    context.log("--------------------------------------------------------------")
    context.log("Data received " + JSON.stringify(eventGridEvent.data));
    context.log("--------------------------------------------------------------")
    const invoice = common.newInvoice(eventGridEvent.data.custID, eventGridEvent.data.amount);
    context.log(" returning  "+ JSON.stringify(invoice));
    return common.createCloudEvent(invoice);
};