import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    <button
    onClick={handleBack}
    className="flex items-center justify-center w-12 h-12 border-2 border-red-500 rounded-full transition-transform transform hover:scale-110 hover:bg-red-600 hover:text-white focus:outline-none"
  >
    <AiOutlineArrowLeft className="text-red-500 transition-colors hover:text-white" />
  </button>
);
};


export default BackButton