import database from "../../config/firebaseConfig"

export default (req, res) => {
    const url = req.url.slice(1);
    console.log(url);
    const ref = database.ref(url);
    console.log(ref);
    ref.on("value", (snapshot) => {
        res.status(200).send(snapshot.val());
    },
        (errorObject) => {
            console.log("The read failed: ", errorObject.name);
        }
    );
    // res.status(200).json({test:"th"})
}