import { projectFirestore } from './fireConfig';

const someData = {
    name: 'Jane smith',
    age: 254
}

const addData = (ref) => {
    
    ref.add({someData});
    ref.doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
}

const Fake = () => {
    //const ref = firebase.firestore().collection("schools");
    const collectionRef = projectFirestore.collection('fake');
    return (
        <button onClick={() => addData(collectionRef) }>Add</button>
    );
}
 
export default Fake;