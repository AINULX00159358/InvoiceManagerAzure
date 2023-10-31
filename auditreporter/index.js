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
  const avgLatency = sumlatency / counter;
  const latencyData = {
    "average": avgLatency,
    "current": latency,
    "max": maxLatency
  }
  eventGridEvent.data.latency = latencyData;
  context.log("AUDIT: count="+counter, ", avgerage ="+ avgLatency+ ", current="+ latency+ ", Max="+ maxLatency);
  responseEvent =   {
    "specversion" : "1.0",
    "id" : uuidv4(),
    "type" : "AUDIT",
    "source" : "auditreporter",
    "subject" : "invoice-audit",
    "time" : new Date().toISOString(),
    "data" : eventGridEvent.data
  };
  context.bindings.outputEvent = responseEvent
  
};