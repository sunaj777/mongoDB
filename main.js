const mongoose = require('mongoose');
main().catch(err =>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test2');
    console.log('connected');

    const kittyschema =new mongoose.Schema({
        name:String,age:Number
    });
    const Kitten =mongoose.model('kitten',kittyschema);

    const data1=new Kitten({name:'sunaj',age:20});
    data1.save();
    const data2=new Kitten({name:'arshad',age:20});
    data2.save();
    const data3 =new Kitten({name:'shyam',age:20});
    data3.save();

    const data = await Kitten.find({});
console.log(data)
    }



