import mongoose from "mongoose";
const dbConnect = async () => {
    try {
        const url = "mongodb://Sahensa:Sahensa@ac-6xvhjik-shard-00-00.ade02ze.mongodb.net:27017,ac-6xvhjik-shard-00-01.ade02ze.mongodb.net:27017,ac-6xvhjik-shard-00-02.ade02ze.mongodb.net:27017/User-Backend?ssl=true&replicaSet=atlas-dhudgd-shard-0&authSource=admin";
        await mongoose.connect(url);
        console.log('db successfully connected with data base');
    }
    catch (error) {
        console.log(error);
        console.log('db not connected!');
    }
    ;
};
export default dbConnect;
//# sourceMappingURL=dbConnect.js.map