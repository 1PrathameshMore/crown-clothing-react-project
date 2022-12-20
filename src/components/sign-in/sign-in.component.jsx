import React from 'react'
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthWithEmailPassword } from '../../utils/firebase/firebase.utils';

import {SignInContainer, SignInHeader, SignInButtonsContainer} from './sign-in.styles.jsx';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        try {
            const {user} = await signInAuthWithEmailPassword(email, password);
            alert('Logged In Successfully.')
            resetFormFields();
        }
        catch (error) {
            if (error.code === 'auth/user-not-found') {
                alert('User not found.Sign Up for new user.');
            }
            else {
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong Password. Please enter correct password');
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
        <SignInContainer>
            <SignInHeader>Already Have an Account?</SignInHeader>
            <span>Sign in with your email and password</span>
            <form onSubmit={submitHandler}>
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

                <SignInButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </SignInButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignIn;