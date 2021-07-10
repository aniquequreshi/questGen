import { projectFirestore } from '../fireConfig';

const someData = {
    name: 'john',
    age: 24
}

const addData = (ref) => {
    
    //collectionRef.add({someData});
    ref.doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    });
}

const Fake = () => {

    const collectionRef = projectFirestore.collection('fake');
    return (
        <button onClick={() => addData(collectionRef) }>Add</button>
    );
}
 
export default Fake;