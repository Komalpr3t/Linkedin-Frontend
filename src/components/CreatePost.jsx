import React from 'react'
import { FaPen } from 'react-icons/fa'
import { useState } from 'react'
import axios from "axios"
import { IoIosSend } from 'react-icons/io'
import {useSelector} from 'react-redux'

const CreatePost = () => {

    //get currentUser value
    const {currentUser} = useSelector((state) => state.user)


    const [content, setContent] = useState('');
    const [isSendButtonEnabled, setIsSendButtonEnabled] = useState(false);

    //handle send post

    const handleSendPost = async() => {
    
        try{
            if(content === ""){
                return alert("Post cannot be empty!")
            }
            const response = await axios.post("https://linkedin-backend-five.vercel.app/api/create-post",
                //body
                {
                content,
                author : currentUser?._id
                }
            )
            
            //alert message on successful post creation
            if(response.data.post){
                setContent("")
                setIsSendButtonEnabled(false)
                return alert("Post created successfully")
            }
        }catch(err){
            console.log("err", err.message)
        }
    }

    return (
        <div>
            <div className='flex items-center border-2 border-gray-500 px-10 rounded-full py-2'>
                <input type="text"
                    placeholder="Create Post..."
                    className='p-4 text-2xl outline-none rounded'
                    onChange={(e) => setContent(e.target.value)}
                    value= {content}
                />
                <div>
                    {
                        !isSendButtonEnabled && (
                            <FaPen
                                onClick={() => setIsSendButtonEnabled(true)}
                                className='text-2xl' />
                        )}
                    {
                        isSendButtonEnabled && (
                        <IoIosSend
                         onClick={handleSendPost} 
                         className='text-4xl cursor-pointer' 
                        />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePost