const common = require('../common/common.js')

module.exports = async function (context, eventGridEvent) {
    context.log("UP TIME ", common.uptime);
    context.log(JSON.stringify(eventGridEvent));
    let invoice = eventGridEvent.data;
    invoice.amountPaid = invoice.balance;
    let payment = common.payment(invoice, null);
    const response = common.createJsonResponse(payment);
    context.log("Returning ", response);
    context.bindings.outputEvent = response;
};