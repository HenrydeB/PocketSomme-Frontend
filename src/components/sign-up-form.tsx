import { useState } from 'react';

import FormInput from './form-input';
import Button from './button';

type FormFields = 'displayName' | 'email' | 'password' | 'confirmPassword';

const defaultFormFields: Record<FormFields, string> = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUpForm: React.FC = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password != confirmPassword) {
            alert('passwords do not match!');
            return;
        }

        try {
            //await createUserDocumentFromAuth(user, {displayName})
            resetFormFields();
        } catch (ex) {
            /*if(ex.code === 'auth/email-already-in-use'){
                alert("cannot create account, email already in use!");
            } else {
                console.log("user creation encountered an exception", ex);
            }*/
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2 className="font-default text-2xl">Don't have an account?</h2>
            <span className="font-default">
                Sign up with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />

                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
