'use client';
import { useState, useEffect } from "react"
import Game from "../Game/Game";


export const Register_Login = (props) => {

    const[id,setId]= useState('')
    const [password, setPassword] = useState('')
    const [bdUser,setbdUser] = useState()

    useEffect(() => {
        setbdUser(props.GetUser("5064231449"));
    }, []);


    return (
        <>
        <div className="flex items-center">
            <form class="max-w-sm mx-auto">
                <div class="mb-5">
                    <label for="Id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Id</label>
                    <input type="number" id="Id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123456" required
                        value={id} onChange={e=>(setId(e.target.value))}
                    />
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                        value={password} onChange={e => { setPassword(e.target.value) }}
                    />
                </div>

                <button onClick={()=> <Game bdUser={bdUser} GetUser={props.GetUser} /> } type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            </div>
        </>
        
        )
}