export const validate = (name,value) => {
    const errors = {}; 

    if (!value) {
        errors[name] = `${name} is required!`;
    }

    else if(name === "username") {
        if(value.length < 6) {
            errors[name] = "Characters should be at least 6 length!";
        }else{
            errors[name] = "";
        }
    }else if(name === "fullName") {
        if(value.length < 6) {
            errors[name] = "Characters should be at least 6 length!";
        }else{
            errors[name] = "";
        }
    }else if(name === "password") {
        if(value.length < 6) {
            errors[name] = "Characters should be at least 6 length!";
        }else{
            errors[name] = "";
        }
    }else{
        if(!/\S+@\S+\.\S+/.test(value)) {
            errors[name] = "Email address is invalid";
        }else{
            errors[name] = "";
        } 
    }

    return errors;
};