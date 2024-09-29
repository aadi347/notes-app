// import React from 'react'

// const DeleteNote = () => {
//   return (
//     <div>DeleteNote</div>
//   )
// }

// export default DeleteNote

import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const DeleteNote = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  // const { enqueueSnackbar } = useSnackbar();

  const handleDeleteNote = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/notes/${id}`)
      .then(() => {
        setLoading(false);
        console.log('Note Deleted successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        console.log('Error', { variant: 'error' });
        console.log(error);
      });
  };
  
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Note</h1>
     
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are You Sure You want to delete this Note?</h3>

        <button
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteNote}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  )
}

export default DeleteNote;