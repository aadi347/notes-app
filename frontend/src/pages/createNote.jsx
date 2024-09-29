import React, {useEffect, useState} from 'react'
import BackButton from '../components/BackButton';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title,
      content,
      dateTime,
    };
    setLoading(true);
    axios
      .post('http://localhost:3000/notes', data)
      .then((res) =>{
        setLoading(false);
        navigate(`/`);
      })
      .catch((error) => {
        setLoading(false);
        alert('an error occured, please check console');
        console.log(error);
      })
    // Handle the submission logic here (e.g., save the note)
    // console.log({ title, content, dateTime });

    // Clear fields after submission (optional)
    setTitle('');
    setContent('');
    setDateTime(new Date().toLocaleString());
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-2xl rounded-2xl p-6 mt-10">
      <h2 className="text-xl font-extrabold mb-4">New Note</h2>
      <form onSubmit={handleSubmit} >
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="content">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            rows="4"
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="dateTime">
            Date and Time
          </label>
          <input
            type="text"
            id="dateTime"
            value={dateTime}
            readOnly
            className="shadow appearance-none border rounded-2xl w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreateNote