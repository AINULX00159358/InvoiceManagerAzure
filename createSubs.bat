set function=%1
echo %function%
az eventgrid topic event-subscription create -n %function%subs -g MscResProj --topic-name InviceMgrTopic --endpoint /subscriptions/015db064-80eb-48c3-af68-52b06a282a4c/resourceGroups/MscResProj/providers/Microsoft.Web/sites/invoicemgrapp/functions/%function% --endpoint-type azurefunction
