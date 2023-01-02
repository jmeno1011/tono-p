import { sliceUrl } from "../../helpers/slice-url";
const db = require("./config/firebaseConfig");

export default (req, res) => {
    let url = req.url;
    url = sliceUrl('/api', url);
    const ref = db.ref(url);
    ref.once("value", (snapshot) => {
        return res.status(200).send(snapshot.val());
    }, (errorObject) => {
        console.log("The read failed: ", errorObject.name);
        return res.status(500).send({ "error": errorObject.name });
    })
}