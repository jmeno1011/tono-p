import database from "../../config/firebaseConfig"

/* get db example
import { getDatabase, ref, onValue} from "firebase/database";

const db = getDatabase();
const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
*/

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