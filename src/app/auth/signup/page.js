'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';

import {signUpWithEmailPassword, signUpWithGoogleAuth} from "@/firebase/auth/signUp";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event) => {
        event.preventDefault()
        if(password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const { result, error } = await signUpWithEmailPassword(email, password);

        if (error) {
            return console.log(error)
        }
        // else successful
        console.log(result)
        return router.push("/auth/login");
    }

    const googleAuthSignUp = () => {
        const {result, error} = signUpWithGoogleAuth();
        if(result) router.push("/auth/login");
        else{
            console.log(error);
        }
    }



    return (

    <div className="w-full max-w-xs mx-auto">
        <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="mail@gmail.com"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            </div>

            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                Confirm Password
            </label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************"/>
             </div>

            <div className="flex items-center justify-between">
                <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Sign Up
                </button>
            </div>

            <p className="mt-2 text-sm">Already have an account? <Link href="/auth/login" className="text-blue-700">Login</Link></p>

        </form>

       
    </div>
    
    );
}

export default Page;

            // <div className="text-center p-1 border border-solid border-gray-200 rounded-full w-max m-auto mt-2">Or</div>
            // <button onClick={googleAuthSignUp} className="w-full p-2 border border-solid border-gray-400 mt-2">Sign Up With Google</button>
