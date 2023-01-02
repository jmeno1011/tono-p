import { child, get, onValue, ref } from "firebase/database";
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
    console.log(database);
    const dbRef = ref(database, 'test');
    console.log(dbRef);
    onValue(dbRef, (snapshot)=>{
        const data = snapshot.val()
        console.log(data);
    })
}