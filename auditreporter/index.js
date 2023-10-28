let maxLatency = 0
//let counter = 0
//let sumlatency = 0


module.exports = async function (context, eventGridEvent) {
  //counter = counter + 1;
  let starting = eventGridEvent.data.history["invoice_NEW"];
  let ending = eventGridEvent.data.history["invoice_CLOSED"];
  let latency = ending - starting;
  if (latency > maxLatency) {
    maxLatency = latency;
  }
  context.log(eventGridEvent.data.invoiceID + ", Count="+counter + ", current="+ latency+ ", Max="+ maxLatency);
  
};