const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://surprisebox:surprisebox@cluster0.kbxc48o.mongodb.net/merngiftbox?retryWrites=true&w=majority'
const mongoDB =async()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err)
            console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("box");
            fetched_data.find({}).toArray(async function (err, data) {
                const giftCategory= await mongoose.connection.db.collection("category");
                giftCategory.find({}).toArray(function(err,catData){
                    if (err)console.log(err);
                    else{
                        global.gift=data;
                        global.giftCategory=catData;

                    }
                })
              /*  if (err)
                    console.log(err);
                else{
                    global.box=data;
                }*/
                    
            })
        }
    });

}

module.exports = mongoDB;
