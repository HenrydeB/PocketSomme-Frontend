import { useState } from "react";

import FormInput from "./form-input";

import Button from "./button";

type FormFields = 'email' | 'password';

const defaultFormFields: Record<FormFields, string> = {
    email: '',
    password: '',
}



const SignInForm: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try{
            // sign in action
            resetFormFields();
        } catch(ex){
            /*if(ex.code === "auth/invalid-credentials"){
                alert("invalid user credentials");
            } else {
                console.log(ex.code);
            }*/ 
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target as HTMLInputElement;
        setFormFields({...formFields, [name]: value});
    };

    return(
        <div className="sign-up-container font-default">
            <h2 className="font-default text-2xl">Already have an account?</h2>
            <span className="font-default">Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
