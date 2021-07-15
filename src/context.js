import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [choiceObjectUpdate, setChoiceObjectUpdate] = useState({});
    const [isUpdate, setIsUpdate] = useState(false);

    // const choiceObjectToUpdate = () => {
    //     const initialValues = {
    //         id: 'KiCEl7Chpx4rsTRkr1qy',
    //         choiceGroup: 'Internet',
    //         choiceItems: ['TV', 'Tel'],
    //         updatedAt: new Date()
    //     }
    //     setChoiceObjectUpdate(initialValues);
    // }

    return (
        <AppContext.Provider value={{choiceObjectUpdate, setChoiceObjectUpdate, isUpdate, setIsUpdate}}>
            {props.children}
        </AppContext.Provider>

    )

}
