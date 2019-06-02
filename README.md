# mail_gun
A node js example of how to use mail gun to send mail.

## Dev Notes:

If you wish to test drive Mail Gun via the sandbox you will need to authorise a test email address first.

To do so navigate to authorised users inside the dashboard. 

Once you have done this and updated the API and Domain variables in the node index.js file within this respository, you should now find that you can send mail to your email address via Mail Gun.

Mail Gun, success message: 'Queued. Thank you.

## Notes from testing the service:

- From experimenting with Mail Gun's free tier service you may find that the mail does not reach the mail inbox. If this occurs you can speak to their team and they will point your account to another ip address. Therefore, I would suggest using the free tier as a short term solution.

- When sending mail using the free tier it will go into your junk mail box. The delivery reports inside the dashboard will show when mail could not be sent which I found helpful in debugging issues and raising them with the support team. 
