import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

function Home() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allpastes = useSelector((state) => state.paste.pastes);

    function createPaste() {
        const paste = {
            title:title, 
            content: value,
            _id:pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }


        if(pasteId) {
            // we are updating the paste
            dispatch(updateToPastes(paste));
        }

        else {
            // we are creating the new paste
            dispatch(addToPastes(paste));
        }

        // after creation or updation 
        setTitle('');
        setValue('');
        setSearchParams({});

    }

    useEffect(() => {
        if(pasteId) {
            const paste = allpastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId])
    

    return (
        <>
            <div className='flex flex-row gap-7 place-content-between mt-4'>
                <input
                    className='p-2 rounded-2xl w-[66%] pl-4'
                    type='text'
                    placeholder='Enter title here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button className='p-2 rounded-2xl'
                onClick={createPaste}>
                    {
                        pasteId ? "Update My Paste" : "Create My Paste"
                    }
                </button>
            </div>

            <div className='mt-8'>
                <textarea
                    className='rounded-2xl mt-4 min-w-[500px] p-4'
                    value={value}
                    placeholder='Enter content Here'
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    )
}

export default Home