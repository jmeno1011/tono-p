const db = require("../../config/firebaseConfig")
export default (req, res) => {
    const url = req.url;
    const ref = db.ref(url);
    // console.log(ref);
    ref.once("value", (snapshot) => {
        console.log(snapshot.val());
        return res.status(200).send(snapshot.val());
    }, (errorObject) => {
        console.log("The read failed: ", errorObject.name);
        return res.status(500).send({ "error": errorObject.name });
    })
}