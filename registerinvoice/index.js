const common = require('../common/common.js')

module.exports = async function (context, eventGridEvent) {
    context.log("Register Invoice for event", eventGridEvent);
    context.log("Status is ", eventGridEvent.data.status);
    let invoice = common.register(eventGridEvent.data);
    let responseEvent = common.createJsonResponse(invoice);
    context.log("registered invoice is ", responseEvent);
    context.bindings.outputEvent = responseEvent;
};
