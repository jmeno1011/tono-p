const db = require("../../config/firebaseConfig")
export default (req, res) => {
    const url = req.url.slice(1);
    
    const ref = db.ref(url);
    ref.on("value", (snapshot) => {
        console.log(snapshot.val());
        return res.status(200).send(snapshot.val());
    }, (errorObject) => {
        console.log("The read failed: ", errorObject.name);
        return res.status(500).send({ "error": errorObject.name });
    })
}