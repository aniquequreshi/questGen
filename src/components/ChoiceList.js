import { useState, useEffect } from 'react';
import { projectFirestore } from './fireConfig';
// import { Grid, Card, CardContent} from '@material-ui/core';


const ChoiceList = () => {

    const [dataDocs, setDataDocs] = useState([]);

    const fetchData = async () => {
        let documents = []
        const myData = await projectFirestore.collection('one').get();
        myData.docs.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
        });
        setDataDocs(documents);
        
    }

    useEffect(() => {

        fetchData();
       
      // eslint-disable-next-line        
      }, []);


    return (
        <div>
            {dataDocs && dataDocs.map( (dataDoc) => (
                <div key= {dataDoc.id}>
                   <h4> {dataDoc.choiceGroup} </h4>
                   <ul>
                    { (dataDoc.choiceItems)  &&  (dataDoc.choiceItems).map ( (item , index) => (
                        <li key={index}> {item}</li>
                    ))}
                   </ul>
                </div>
            ))}

        </div>

    );
}
 
export default ChoiceList;