import React from 'react'
import { useState, useContext } from 'react';

import { createAuthWithEmailPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {SignInHeader as SignUpHeader, SignInContainer as SignUpContainer} from '../sign-in/sign-in.styles';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if (password != confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthWithEmailPassword(email, password);
             
            await createUserDocumentFromAuth(user, { displayName });
            
            alert("User Created Successfully");
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user.Email already in use');
            }
            else {
                if (error.code === 'auth/weak-password') {
                    alert('Weak Password. Password must be at least 6 characters');
                }
                console.log(`error ${error}`);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    return (
        <SignUpContainer>
            <SignUpHeader>Don't have an account?</SignUpHeader>
            <span>Sign up with your email and password</span>
            <form onSubmit={submitHandler}>
                <FormInput
                    label='Display Name'
                    required={true}
                    changeHandler={handleChange}
                    name='displayName'
                    value={displayName}
                    type='text'
                />

                <FormInput
                    label='Email'
                    required={true}
                    changeHandler={handleChange}
                    name='email'
                    value={email}
                    type='email'
                />

                <FormInput
                    label='Password'
                    required={true}
                    changeHandler={handleChange}
                    name='password'
                    value={password}
                    type='password'
                />

                <FormInput
                    label='Confirm Password'
                    required={true}
                    changeHandler={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                    type='password'
                />

                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;