const common = require('../common/common.js')
console.log("common ", common)


module.exports = async function (context, eventGridEvent) {
    context.log(typeof eventGridEvent);
    console.log(eventGridEvent.data);
};