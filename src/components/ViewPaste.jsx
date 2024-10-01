import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

function ViewPaste() {
    const {id} = useParams();
    const allpastes = useSelector((state) => state.paste.pastes);
    console.log("all paste", allpastes)
    let paste = allpastes.filter((p) => p._id == id)[0 ];
    console.log(paste)
    return (
        <>
            <div className='flex flex-row gap-7 place-content-between mt-4'>
                <input
                    className='p-2 rounded-2xl w-[66%] pl-4'
                    type='text'
                    placeholder='Enter title here'
                    value={paste.title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className='mt-8'>
                <textarea
                    className='rounded-2xl mt-4 min-w-[500px] p-4'
                    value={paste.content}
                    placeholder='Enter content Here'
                    disabled
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </>
    )
}

export default ViewPaste