import React, { useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'

const GeneratorPasswprd = () => {

    const [length, setlength] = useState(8)
    const [numAllowed, setnumAllowed] = useState(false)
    const [charAllowed, setcharAllowed] = useState(false)
    const [password, setpassword] = useState("")

    const passwordRef = useRef(null)


    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKMNOPQRSTUWXYZabcdefghijklmnopqrstuwxyz"

        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*_+=-"

        for (let i = 1; i < length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)

            pass += str.charAt(char)
        }

        setpassword(pass)

    }, [length, numAllowed, charAllowed, setpassword])

    const copyPassword = useCallback(() => {
        passwordRef.current?.select();

        window.navigator.clipboard.writeText(password)
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numAllowed, charAllowed, setpassword])

    return (
        <>
            <h1 className='text-4xl text-center' >Password Generator</h1>

            <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-black'>
                <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                    <input type='text' value={password} className='outline-none w-full py-1 px-4' placeholder='Password' readOnly ref={passwordRef} />
                    <button className='outline-none bg-blue-700 text-gray px-3 py-0.5 shrink-0' onClick={copyPassword}>copy</button>
                </div>
                <div className='flex text-sm gap-x-2'>
                    <div className='flex text-sm gap-x-1'>
                        <input type='range' min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
                            setlength(e.target.value)
                        }} />
                        <label className='text-white'>Length: {length} </label></div>

                    <div className='flex text-sm gap-x-1'>
                        <input type='checkbox' defaultChecked={numAllowed} id='numbetInput' className='cursor-pointer' onChange={() => {
                            setnumAllowed((prev) => !prev)
                        }} />
                        <label className='text-white'>Numbers</label></div>

                    <div className='flex text-sm gap-x-1'>
                        <input type='checkbox' defaultChecked={charAllowed} id='numbetInput' className='cursor-pointer' onChange={() => {
                            setcharAllowed((prev) => !prev)
                        }} />
                        <label className='text-white'>Characters</label></div>
                </div>
            </div>
        </>
    )
}

export default GeneratorPasswprd