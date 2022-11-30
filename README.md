diff btw sql and noSql
write queries in mongoDB
database collection and document
mongoDB returns BSON not JSON

Aggregation is a criteria for your query in form of jsom format and is is us for calculation limit and sorting

pipeline is a sequence of data aggregation or staging. They can also be i form of an array.

let pipeline = [
    dbBase.shop.find().sort({price: 1}).limit(1)
]