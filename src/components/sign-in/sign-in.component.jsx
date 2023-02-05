import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import './sign-in.style.scss';
import Button  from '../button/button.component';

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const resetFormField =() => {
        setFormFields(defaultFormField)
    }

    const handleGoogleSubmit = (event) => {
        event.preventDefault();
        fetch('https://localhost:4000/auth/google', {mode:'cors'})
        .then(response => response.json())
        .then(data => console.log(data))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://localhost:4000/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'success') {
                resetFormField();
                console.log('lessaaaa')
            }else {
                alert('error Email or Password')
            }
        })
        }
    

const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
};
    return(
        <div className='col-md-6 col-12 mt-5'>
            <h2>Already have an acount?</h2>
            <span>Sign in with your email</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Email'
                    onChange={handleChange} 
                    required 
                    name='email' 
                    value={email}
                />
                <FormInput 
                    label='Password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                    name='password' 
                    value={password}
                    />
                <div className="sign-in-button-container">
                    <Button type="submit">Sign In</Button>
                    <Button 
                        type='button' 
                        buttonType='google'
                        onClick = {handleGoogleSubmit}
                    >Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;