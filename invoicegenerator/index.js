const common = require('../common/common.js')


module.exports = async function (context, eventGridEvent) {
    
    context.log("--------------------------------------------------------------")
    context.log("UP TIME ", common.uptime);
    context.log("Data received " , JSON.stringify(eventGridEvent.data));
    context.log("--------------------------------------------------------------")
    const invoice = common.newInvoice(eventGridEvent.data.custID, eventGridEvent.data.amount);
    const cloudEvent = common.createJsonResponse(invoice);
    context.log("Return cloud Event "+ cloudEvent);
    context.bindings.outputEvent = cloudEvent;
};