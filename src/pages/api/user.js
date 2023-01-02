
export default (req, res) => {
    console.log(req.url);
    console.log(req.url.slice(1));
    
    // const dbRef = ref(database, 'test');
    // console.log(dbRef);
    // onValue(dbRef, (snapshot)=>{
    //     const data = snapshot.val()
    //     console.log(data);
    // })
    res.send("hello")
}