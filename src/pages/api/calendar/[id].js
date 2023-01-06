import { sliceUrl } from "../../../helpers/slice-url";
import db from "../config/firebaseConfig";

export default (req, res) => {
    const url = sliceUrl('/api', req.url);
    const { newData } = req.body;

    if (req.method === "POST") {
        db.ref(url).push(newData)
        // .then(res=>{console.log(res);})
        // .catch(error=>{return res.status(500).json({ "error": error.name })})
    } else {
        db.ref(url).once("value", (snapshot) => {
            res.status(200).json(snapshot.val());
        }, (errorObject) => {
            return res.status(500).json({ "error": errorObject.name });
        })
    }
}