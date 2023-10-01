import { newInvoice, createJsonResponse } from '../common/common.js';
import { app, output } from '@azure/functions';

const eventGridOutput = output.eventGrid({
    topicEndpointUri: 'InvMgrEventGridTopicUri',
    topicKeySetting: 'InvMgrEventGridTopicKey',
});

app.eventGrid('invoicegenerator', {
    return: eventGridOutput,
    handler: (event, context) => {
        console.log('Event grid function processed event:'+ event);
        const invoice = newInvoice(event.data.custID, event.data.amount);
        return createJsonResponse(invoice);
    }
});



