import { useState, useEffect, useContext } from 'react';
import { projectFirestore } from './fireConfig';
// import { Grid, Card, CardContent} from '@material-ui/core';
import { AppContext } from '../context';


const ChoiceList = (props) => {

//    const editedObject = props.choiceObject;
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
    }, []);

    useEffect(() => {

        //fetchData();  This is good.  Gets real data
        if (props.choiceObject) {
            const insertOrReplaceObject = (() => {
                console.log('inside id', props.choiceObject.id)
                console.log('old data', dataDocs);  
                //const { length } = dataDocs;
                const found = dataDocs.some(el => el.id === props.choiceObject.id);
                if (found) {
                    console.log('found')
                    const replacedData = () => {
                        console.log('in replaced data')
                        dataDocs.map(obj => {
                            if (obj.id === (props.choiceObject.id)) {
                                console.log('id:', obj.id);
                                return props.choiceObject;
                            }
                            else {
                                return obj;
                            }
                        })
                    }
                    setDataDocs(replacedData);
                    console.log('new data', dataDocs);  
                }
                else {
                    console.log('not found')
                    dataDocs.push(props.choiceObject);
                }
            });

            insertOrReplaceObject();



            console.log('edit useeffect')
            //if the object has been edited, replace it
            //arr1.map(obj => arr2.find(o => o.id === obj.id) || obj);
            //dataDocs.map(obj => editedObject.find(o => o.id === obj.id)  || obj);
            //console.log(dataDocs);
            //dataDocs.push(); //working
            
        }
        
      // eslint-disable-next-line        
      }, [props.choiceObject]);

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
                   <h5>{new Date(dataDoc.updatedAt.seconds * 1000).toLocaleString("en-US")}</h5>
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