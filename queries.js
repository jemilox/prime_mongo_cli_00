//1. find docs that have awards
> db.bios.find({awards:{$exists: true}}).pretty();
//2.find docs that don't have awards
> db.bios.find({awards:{$exists: false}}).pretty();
//3. find docs that have contribs for OOP or UNIX
> db.bios.find({contribs:{$in:["OOP", "UNIX"]}}).pretty();
//4. find docs with "turing award"
> db.bios.find({"awards.award": "Turing Award"}).pretty();
//5. find docs with ids between 3 and 7
> db.bios.find({_id: {$gt:3, $lt:7}}).pretty();
//6. find docs with awards before year 2000
> db.bios.find({"awards.year":{$lt:2000}}).pretty();
//7. find docs with birth days but no death dates
> db.bios.find({$and: [{birth:{$exists: true}}, {death:{$exists:false}}]}).pretty();
