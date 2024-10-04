import React from 'react';
import { auth, loginGoogle } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';

function GoogleLogin() {
    async function handleLogin() {
        try {
            const userData = await signInWithPopup(auth, loginGoogle);
            alert('Sign in successfully');
            console.log(userData);
        } catch (error) {
            console.error('Login failed: ', error);
            alert('Login failed');
        }
    }

    async function handleLogout(){
        try{
            await signOut(auth)
            alert("logout successful")
        }
        catch(err){
            alert("logout failed")
        }
    }

    return (
        <>
            <h1>Hello User</h1>
            <button onClick={handleLogin}>Login With Google</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default GoogleLogin;