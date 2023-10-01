let maxLatency = 0
let counter = 0
let sumlatency = 0
let avgLatency  = 0;


module.exports = async function (context, eventGridEvent) {
  counter = counter + 1;
  let starting = eventGridEvent.data.history["invoice_NEW"];
  let ending = eventGridEvent.data.history["invoice_CLOSED"];
  let latency = ending - starting;
  sumlatency = sumlatency + latency;
  if ( latency > maxLatency ) {
      maxLatency = latency;
  }
  if (counter > 100) {
    counter = 0;
    avgLatency = (sumlatency/100);
    sumlatency = 0;
  }
  context.log(eventGridEvent.data.invoiceID + ", avgLatency="+avgLatency + " maxLatency="+ maxLatency);
};