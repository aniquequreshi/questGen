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
        
        //setDataDocs(data.docs.map(doc => doc.data()))
    }

    useEffect(() => {

        fetchData();
        //document.getElementById('junk').innerHTML=Array.isArray(dataDocs);

        // console.log(dataDocs);
       
      // eslint-disable-next-line        
      }, []);

    
      

    

    return (
        <div>
            {dataDocs.map( dataDoc => (
                <div key= {dataDoc.choiceGroup}>
                    {dataDoc.choiceGroup}
                    {dataDoc.choiceItems}
                    <br/>
                    {dataDoc.id}
                   
                </div>
            ))}

        <div id='junk'>
        </div>

        </div>

    );
}
 
export default ChoiceList;