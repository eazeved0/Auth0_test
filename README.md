# Auth0_test
Exclusive for Auth0 test

In order to run it, perform the following steps:

Create your account at https://webtask.io/cli

Initialize wt
wt init <your_email_address>

Copy the file names.js to your machine

Deploy it:
wt create names.js

You'll receive something like that:

Webtask created

You can access your webtask at the following url:

https://webtask.it.auth0.com/api/run/wt-eazevedo-bsd_com_br-0/names?webtask_no_cache=1

Access that URL to test your code.

USAGE:
Change the variable "name" on the code and open the URL.

EXAMPLE:
let name = (context.data.text || 'Olivia');

OUTPUT:
"{\"name\":\"Olivia\",\"gender\":\"female\",\"description\":\"The name Olivia is female.\"}"

Cool, hunf?




