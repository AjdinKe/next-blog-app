import { useState } from "react";
import axios from "axios"
import { Toaster, toast } from "react-hot-toast";
import Head from "next/head";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil"

const textState = atom ({
    key: "textState",
    default: ''
})

const characterCountState = selector({
    key: 'characterCountState',
    get: ({get}) => {
        const text = get(textState)
        return text.length
    }
})

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useRecoilState(textState)
    const [author, setAuthor] = useState('')

    const charCount = useRecoilValue(characterCountState)

    return ( 
        <>
        <div><Toaster position="bottom-right"/></div>
        <Head>
            <title>Blog | Create</title>
        </Head>

            <div className="w-full flex flex-col justify-center items-center p-16 ">
                <div className="w-3/6 flex flex-col justify-center items-center">
                    <h1 className=" text-5xl font-bold pb-16">Create a blog</h1>
                    <label htmlFor="Title" className="mr-auto text-2xl font-semibold">Blog title:</label>
                    <input type="text" className="bg-[#E5E7EB] w-full m-5 p-3 rounded-lg text-lg border border-[#00000026] mb-8 focus:outline-none focus:shadow-lg"
                    required
                    value={title}
                    onChange={(e: any) => {setTitle(e.target.value);console.log(title)}} />

                    <label htmlFor="Title" className="mr-auto text-2xl font-semibold">Blog body:</label>
                    <textarea className="bg-[#E5E7EB] w-full m-5 p-3 rounded-lg text-lg border border-[#00000026] mb-5 focus:outline-none focus:shadow-lg"
                    maxLength={800}
                    required
                    onChange={(e: any) => {setBody(e.target.value);console.log(body)}} />

                    <p className=" ml-auto px-6 font-regular text-[#333]">Number of characters: {charCount} </p>

                    <label htmlFor="Title" className="mr-auto text-2xl font-semibold">Blog author:</label>
                    <input type="text" className="bg-[#E5E7EB] w-full m-5 p-3 rounded-lg text-lg border border-[#00000026] mb-8 focus:outline-none focus:shadow-lg"
                    required
                    onChange={(e: any) => {setAuthor(e.target.value);console.log(author)}} />

                    <button className=" text-2xl font-semibold bg-[#445045] text-white px-12 py-2 rounded-lg hover:opacity-90" onClick={() => {
                        axios.post("https://retoolapi.dev/2b2Pf9/data",
                        {
                            title: title,
                            body: body,
                            author: author
                        })
                        .then((response) => {
                            console.log(response)
                            toast.success("Blog successfully added!") 
                        })
                        .catch((error) => {
                            console.log(error)
                            toast.error("Failed to add blog!")
                        })
                    }} >Submit</button>
                </div>
            </div>
        </>
     );
}
 
export default Create;