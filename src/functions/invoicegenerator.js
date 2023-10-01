const { app } = require('@azure/functions');

app.eventGrid('invoicegenerator', {
    handler: (event, context) => {
        context.log('Event grid function processed event:', event);
    }
});