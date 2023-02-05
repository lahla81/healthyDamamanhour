import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import './sign-up.style.scss';
import Button  from '../button/button.component';

const defaultFormField = {
    firstName : '',
    lastName:'',
    tele: '',
    email: '',
    password: '',
    confirmPassword: '',
    joined: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField);
    const { firstName, lastName, tele, email, password, confirmPassword} = formFields;
   
    const defaultUser = {
        firstName: '',
        lastName:'',
        email: '',
        tele: '',
        joined: ''
    }
    const [user, setUser] = useState(defaultUser);
    const loadUser = () => {
        setUser({
            firstName: user.firstName,
            lastName: user.lastName,
            tele: user.tele,
            email: user.email,
            joined: user.loined
        })
    }
    const resetFormField =() => {
        setFormFields(defaultFormField)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Password does not match");
            return;
        }
        
        fetch('https://localhost:4000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                tele: tele,
                email: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user) {
                loadUser();
                resetFormField();
            }else {
                alert('error Email or Password')
            }
        })
    }
        
    // try{
    //     dispatch(signUpStart(email, password, displayName))
    //         resetFormField();
    // }catch(error){
    //     if (error.code === 'auth/email-already-in-use'){
    //         alert('This Email is already In Use')
    //     }else{
    //         console.log('user creation encountered an error',error);
    //     }
    // }


const handleChange = (event) =>{
    const {name, value} = event.target;

    setFormFields({...formFields, [name]: value})
};
    return(
        <div className='col-md-6 col-12 mt-5'>
            <h2>Don't have an acount?</h2>
            <span>Sign up with your email</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='First Name'
                    type='text' 
                    onChange={handleChange} 
                    required 
                    name='firstName' 
                    value={firstName}
                />
                <FormInput 
                    label='Last Name'
                    type='text' 
                    onChange={handleChange} 
                    required 
                    name='lastName' 
                    value={lastName}
                />
                <FormInput 
                    label='Mobile No'
                    type='text' 
                    onChange={handleChange} 
                    required 
                    name='tele' 
                    value={tele}
                />
                <FormInput 
                    label='Email'
                    type='email'
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
                
                <FormInput 
                    label='Confirm Password' 
                    type='password' 
                    onChange={handleChange} 
                    required 
                    name='confirmPassword' 
                    value={confirmPassword}
                />

                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;