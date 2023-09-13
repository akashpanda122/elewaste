import connectMongo from '../../utils/mongodb';
import Parts from '../../models/parts'; 
export default async function handler(req,res){
    try{
        await connectMongo();
        let parts = await Parts.find({});
        res.status(200).send(parts)
    }
    catch(err){
        console.log(err);
        res.status(500).send(err)
    }

}