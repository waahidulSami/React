import React from 'react';
import { useParams } from 'react-router-dom';
const User = () => {

    const {userid} = useParams()
    return (
<>
                    <img className=" mx-auto w-96 rounded-2xl" src="https://images.pexels.com/photos/7563647/pexels-photo-7563647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image1" />

       
        <div className='bg-amber-700 rounded-xl p-5 text-4xl text-center font-bold  w-3xl m-5  mx-auto w-1/2'>
          User:{userid}
        </div>
</>

    );
};

export default User;