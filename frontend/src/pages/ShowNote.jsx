import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';

const ShowNote = () => {
  const [Note, setNote] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/notes/${id}`)
      .then((res) => {
        setNote(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-4 justify-center items-center'>
      <BackButton />
      <h1 className='text-3xl my-4 text-gray-800'>Show Note</h1>
        <div className='flex flex-col justify-center border-red-500 shadow-2xl rounded-xl w-fit p-6 bg-white'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Id :</span>
            <span className='text-gray-700'>{Note._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Title :</span>
            <span className='text-gray-700'>{Note.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Content : </span>
            <span className='text-gray-700'>{Note.content}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Create Time :</span>
            <span className='text-gray-700'>{new Date(Note.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-500'>Last Update Time :</span>
            <span className='text-gray-700'>{new Date(Note.updatedAt).toString()}</span>
          </div>
        </div>
   
    </div>
  )
}

export default ShowNote