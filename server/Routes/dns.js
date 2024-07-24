//THE DNS LOOKS UP A DOMAIN NAME USING ITS "IP" NUMERIC VALUE 
const Dns = require('dns')

Dns.lookup("google.com") //Looks up the IP address 
Dns.resolve("facebook.com") //Looks up all the IP address attached to the domain
Dns.reverse("127.0.1.0") //Converts the IP address to the domain name

