const common = require('../common/common.js')
console.log("common ", common)


module.exports = async function (context, eventGridEvent) {
    context.log("-------------------------------------------------------------")
    context.log("Event ", eventGridEvent.type + " :: "+JSON.stringify(eventGridEvent.data));
    context.log("-------------------------------------------------------------");
};
