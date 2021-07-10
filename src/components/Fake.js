//import { projectFirestore } from '../fireConfig';
import firebase from './fireConfig';

const someData = {
    name: 'john smith',
    age: 254
}

const addData = (ref) => {
    
    ref.add({someData});
    // ref.doc("LA").add({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    // });
}

const Fake = () => {
    const ref = firebase.firestore().collection("schools");
    //const collectionRef = projectFirestore.collection('fake');
    return (
        <button onClick={() => addData(ref) }>Add</button>
    );
}
 
export default Fake;