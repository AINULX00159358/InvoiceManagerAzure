const common = require('../common/common.js')

module.exports = async function (context, eventGridEvent) {
    console.log(eventGridEvent.data);
    let invoice = eventGridEvent.data;
    invoice.amountPaid = invoice.balance;
    let payment = common.payment(invoice, null);
    context.bindings.outputEvent = payment;  
};