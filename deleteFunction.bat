set function=%1
az functionapp function delete -g MscResProj -n invoicemgrapp --function-name %function%
unset function