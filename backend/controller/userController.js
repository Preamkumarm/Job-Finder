import userModel from "../models/userModel.js";
import {Webhook} from "svix";

const webhook = async (req,res) => {
    try {
        
        const webhook = new Webhook(process.env.CLERK_SECRET_KEY);


        //verifying headers
        await webhook.verify(JSON.stringify(req.body),{
            "svix-id":req.headers["svix-id"],
            "svix-timestamp":req.headers["svix-timestamp"],
            "svix-signature":req.headers["svix-signature"],
        });

        //get the data from the req.body

        const {data,type} = req.body;

        //type will store the different type of action when user update or create or delete the account clerk with the using help of svix

        switch (type) {
            case "user.created":{
                //when user created then we will save the user data in our database
                const userData = {
                    _id:data.id,
                    name:data.firstName + "" + data.lastName,
                    email:data.email_address[0].email_address,
                    image:data.image_url,
                    resume:data.resume || "",
                }
                //saving the user data in our database
                await userModel.create(userData);
                res.json({});
                break;
            }
            case "user.updated":{
                const userData = {
                    
                    name:data.firstName + "" + data.lastName,
                    email:data.email_address[0].email_address,
                    image:data.image_url,
                   
                }
                //update the user data in our database
                await userModel.findByIdAndUpdate({ _id: data.id }, userData);
                res.json({});
                break;
            }
            case "user.deleted":{
                await userModel.findByIdAndDelete(data.id);
                res.json({});
                break
            }
            default:
            break; 
        }

    } catch (error) {
        console.log(error,"");
        res.json({success:false,message:"Error"});   
    }
}

export {webhook}