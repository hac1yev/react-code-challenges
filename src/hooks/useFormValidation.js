import { useState } from "react";
import { validate } from "../validateSchema/validate";

const useFormValidation = (initialValues, handleFormSubmit) => {
    const [values,setValues] = useState(initialValues);
    const [errors,setErrors] = useState();

    const handleChange = (e) => {    
        const { name,value } = e.target;    
        setValues(prev => {
            return {
                ...prev,
                [name]: value
            }
        });

        const validateResults = validate(name,value);
        setErrors(prev => {
            return {
                ...prev,
                ...validateResults
            }
        });

    };

    const handleBlur = (e) => {
        const { name,value } = e.target;
        const validateResults = validate(name,value);
        setErrors(prev => {
            return {
                ...prev,
                ...validateResults
            }
        });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const arr = Array.from(formData.entries());
        
        arr.forEach((item) => {
            const [name,value] = item;

            const validateResults = validate(name,value);
            setErrors(prev => {
                return {
                    ...prev,
                    ...validateResults
                }
            });
        });
        
        let isRequired = true;

        for(let key in errors) {
            if(!errors[key]) {
                continue;
            }else{
                isRequired = false;
                break;
            }
        }

        if(isRequired) {
            handleFormSubmit();
        }
    };

    return {
        values,
        errors,
        handleSubmit: onSubmit,
        handleChange,
        handleBlur
    };
};

export default useFormValidation;