import { TextField } from "@material-ui/core";
import { useField } from "formik";

const InputTextField = ({
    name,
    ...otherProps
}) => {
    const [field, meta] = useField(name);

    const configInputTextField = {
        ...field,
        ...otherProps,
        variant: 'outlined',
        fullWidth: true
    };

    if (meta && meta.touched && meta.error) {
        configInputTextField.error = true
        configInputTextField.helperText = meta.error
    }
    return (
        <TextField {...configInputTextField} />

    );
}
 
export default InputTextField;