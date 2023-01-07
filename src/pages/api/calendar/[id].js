import { child, get, onValue, ref, set } from "firebase/database";
import { sliceUrl } from "../../../helpers/slice-url";
import db from "../config/firebaseConfig";
import database from "../config/firebaseConfig";

export default (req, res) => {
    const url = sliceUrl('/api', req.url);
    const { id, newData } = req.body;
    if (req.method === "POST") {
        // db.ref(url).push().set(newData)
        // , (error) => {
        //     if (error) {
        //         return res.status(500).send({ "error": error })
        //     } else {
        //         return res.status(200).send({ messege: "success" })
        //     }
        // })
        set(ref(database, url+`/${id}`));
    } else {
        // db.ref(url).once("value", (snapshot) => {
        //     console.log("값을 가져와요");
        //     return res.status(200).send(snapshot.val());
        // }, (errorObject) => {
        //     return res.status(500).send({ "error": errorObject.name });
        // })
        res.send("!!")
        // onValue(ref(database, url), (snapshot)=>{
        //     const data = snapshot.val();
        //     return res.status(200).send(data);
        // },(error)=>{
        //     return res.status(500).send({"error": error.name});
        // })
        // get(child(ref(database),url)).then((snapshot)=>{
        //     if(snapshot.exists()){
        //         res.status(200).json(snapshot.val())
        //     }else{
        //         res.status(200).json({msg:"nodata"})
        //     }
        // }).catch(error=>{
        //     console.error(error);
        // })
    }
}