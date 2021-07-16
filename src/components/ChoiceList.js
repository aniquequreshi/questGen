import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from './fireConfig';
// import { Grid, Card, CardContent} from '@material-ui/core';
import { AppContext } from '../context';


const ChoiceList = (props) => {

//    const editedObject = props.choiceObject;
    const {setChoiceObjectUpdate, setIsUpdate} = useContext(AppContext);
    const [dataDocs, setDataDocs] = useState([]);
    // const [updateMessage, setUpdateMessage] = useState('');
    

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
    }, []);

    useEffect(() => {

        const updateObject = (async () => {
            const replacedData =  dataDocs.filter( (obj) => {
                return (obj.id !== (props.choiceObject.id))
            });  
            
            await replacedData.unshift(props.choiceObject);
            
            await setDataDocs(replacedData);
            
            //await console.log('inside', dataDocs)
        });

        if (props.choiceObject) {
            updateObject();
            // setUpdateMessage('Modified');
        }
        
    // eslint-disable-next-line        
    }, [props.choiceObject]);

    const handleDeleteClick = (dataDoc) => {
        const deleteObject = (async () => {
            const replacedData =  dataDocs.filter( (obj) => {
                return (obj.id !== (dataDoc.id))
            });  
            await setDataDocs(replacedData);
        });

        deleteObject();  //after removing it from database


    }

    const handleEditClick = (dataDoc) => {
        const initialValues = {
            id: dataDoc.id,
            choiceGroup: dataDoc.choiceGroup,
            choiceItems: dataDoc.choiceItems,
            updatedAt: dataDoc.updatedAt,
            createdAt: dataDoc.createdAt
        }
        setIsUpdate(true);
        setChoiceObjectUpdate(initialValues);
    }


    return (
        <div>
            
            {dataDocs && dataDocs.map( (dataDoc) => (
                <div key= {dataDoc.id}>
                   <h4><button onClick={() => handleDeleteClick(dataDoc)}>Delete</button>  &nbsp;
                   <button onClick={() => handleEditClick(dataDoc)}>Edit</button> {dataDoc.choiceGroup} </h4>
                   {/* <h5>{new Date(dataDoc.updatedAt.seconds * 1000).toLocaleDateString("en-US")}</h5>
                   <h5>{new Date(dataDoc.createdAt.seconds * 1000).toLocaleString("en-US")}</h5> */}
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