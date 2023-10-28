let maxLatency = 0
let counter = 0
let sumlatency = 0


module.exports = async function (context, eventGridEvent) {
  counter = counter + 1;
  let starting = eventGridEvent.data.history["invoice_NEW"];
  let ending = eventGridEvent.data.history["invoice_CLOSED"];
  let latency = ending - starting;
  if (latency > maxLatency) {
    maxLatency = latency;
  }
  sumlatency = sumlatency + latency
  let avgLatency = sumlatency / counter;
  context.log("AUDIT: count="+counter, ", avgerage ="+ avgLatency+ ", current="+ latency+ ", Max="+ maxLatency);
};