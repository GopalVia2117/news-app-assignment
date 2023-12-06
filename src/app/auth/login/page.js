'use client'
import React, {useState, useEffect} from "react";
import signIn from "@/firebase/auth/signIn";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";


function Page() {
    const user = useSelector(state => state.userState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter();

    const handleForm = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result);
        // dispatch(setUser(result.user.user));
        localStorage.setItem('user', JSON.stringify(result.user));
        return router.push("/");
    }

   
    return (
    //     <div classNameName="wrapper">
    //     <div classNameName="form-wrapper">
    //         <h1 classNameName="mt-60 mb-30">Sign up</h1>
    //         <form onSubmit={handleForm} classNameName="form">
    //             <label htmlFor="email">
    //                 <p>Email</p>
    //                 <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@gmail.com" />
    //             </label>
    //             <label htmlFor="password">
    //                 <p>Password</p>
    //                 <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" />
    //             </label>
    //             <button type="submit">Sign up</button>
    //         </form>
    //     </div>

    // </div>

    <div className="w-full max-w-xs mx-auto">
        <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input onChange={(e) => setEmail(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="mail@gmail.com"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input onChange={(e) => setPassword(e.target.value)} className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-orange-400 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                </button>
            </div>
            <p className="mt-2 text-sm">Don't have an account? <Link href="/auth/signup" className="text-blue-700">Sign Up</Link></p>
            <div>
                {JSON.stringify(user.userState)}
            </div>
        </form>
    </div>
    
    );
}

export default Page;