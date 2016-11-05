#Free Code Camp Timestamp Microservice Project

###To use:

1. Pass a string containing either a unix timestamp or natural language date
2. The app will return both the unix timestamp and natural language date (or nulls if the passed string does not fulfill the above requirements)
    
###Example:
* [https://cryptic-headland-74336.herokuapp.com/603504000000](https://cryptic-headland-74336.herokuapp.com/603504000000)
* --OR--
* [https://cryptic-headland-74336.herokuapp.com/February 15, 1989](https://cryptic-headland-74336.herokuapp.com/February 15, 1989)
* Returns:
* {"unix":603504000000,"natural":"February 15, 1989"}
