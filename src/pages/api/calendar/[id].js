import { sliceUrl } from "../../../helpers/slice-url";
import db from "../config/firebaseConfig";

export default (req, res) => {
    let url = req.url;
    console.log(url);
    url = sliceUrl('/api', url);
    const ref = db.ref(url);
    if(req.method === "POST"){
        // ref.set()
        res.send("post")
    }else{
        // ref.once("value", (snapshot) => {
        //     return res.status(200).send(snapshot.val());
        // }, (errorObject) => {
        //     return res.status(500).send({ "error": errorObject.name });
        // })
        res.send("get")
    }
}