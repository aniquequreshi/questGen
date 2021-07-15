import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from './fireConfig';
// import { Grid, Card, CardContent} from '@material-ui/core';
import { AppContext } from '../context';


const ChoiceList = () => {

    const {setChoiceObjectUpdate, setIsUpdate} = useContext(AppContext);
    const [dataDocs, setDataDocs] = useState([]);

    const fetchData = async () => {
        let documents = []
        const myData = await projectFirestore.collection('one').orderBy('updatedAt', 'desc').get();
        myData.docs.forEach(doc => {
            documents.push({...doc.data(), id: doc.id});
        });
        setDataDocs(documents);
        
    }

    useEffect(() => {

        fetchData();
       
      // eslint-disable-next-line        
      }, []);

    const handleEditClick = (dataDoc) => {
        const initialValues = {
            id: dataDoc.id,
            choiceGroup: dataDoc.choiceGroup,
            choiceItems: dataDoc.choiceItems,
            updatedAt: new Date()
        }
        setIsUpdate(true);
        setChoiceObjectUpdate(initialValues);
   
    }


    return (
        <div>
            {dataDocs && dataDocs.map( (dataDoc) => (
                <div key= {dataDoc.id}>
                   <h4><button onClick={() => handleEditClick(dataDoc)}>Edit</button> {dataDoc.choiceGroup} </h4>
                   <h2>{new Date(dataDoc.updatedAt.seconds * 1000).toLocaleString("en-US")}</h2>
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