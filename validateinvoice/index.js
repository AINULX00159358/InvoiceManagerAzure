const common = require('../common/common.js')

module.exports = async function (context, eventGridEvent) {
    context.log("validation ", JSON.stringify(eventGridEvent));
    let invoice = eventGridEvent.data;
    const response = common.createJsonResponse(common.validate(invoice));
    context.log("Response ", response);
    context.bindings.outputEvent = response;
};
