#Free Code Camp Timestamp Microservice Project

###To use:

1. Pass a string containing either a unix timestamp or natural language date
2. The app will return both the unix timestamp and natural language date (or nulls if the passed string does not fulfill the above requirements)
    
###Example:
* https://fcc-api-projects-ben24c.c9users.io/1234567
* --OR--
* https://fcc-api-projects-ben24c.c9users.io/January 1, 1970
* Returns:
* {"unix":1234567,"natural":"January 1, 1970"}
