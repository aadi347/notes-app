import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import { MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import { FaTrashAlt, FaPen, FaCopy } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { Notes } from '../../../backend/models/noteModel';


const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('http://localhost:3000/notes')
//       .then((res) => {
//         setNotes(res.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   }, []);
//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//      <Link to='/create-note'>
//       <div className='fixed top-4 left-1/2 transform -translate-x-1/2'>
//       <button className="bg-red-500 text-white p-4 rounded-full shadow-2xl hover:bg-red-600 focus:outline-none transition-all">
//       <FaPlus size={24} />
//     </button>
//     </div>
//     </Link>
//       <div className="w-96 bg-white rounded-2xl shadow-2xl p-4 relative">
//         <div className="flex justify-between items-center">
//           <span className="text-white bg-red-500 text-sm px-3 py-1 rounded-full font-bold">
//             Nest
//           </span>
//           <div className="flex space-x-2">
//             {/* edit button  */}

//             <Link to={`/edit-note/${notes.Id}`}>
//             <button className="text-red-500 hover:text-red-600 focus:outline-none transition-all">
//               <FaEdit size={19} />
//             </button>
//             </Link>

//             {/* delete button */}

//             <Link to={`/delete-note/${notes._id}`}>
//               <button className="text-red-500 hover:text-red-700 focus:outline-none transition-all">
//                 <FaTrash size={19} />
//               </button>
//             </Link>

//              {/* show notes */} 

//              <Link to={`/show-note/${notes._id}`}>
//               <button className="flex items-center justify-center w-5 h-5 border-2 border-red-500 rounded-full transition-transform transform hover:scale-110 hover:bg-red-500 hover:text-white focus:outline-none">
                 
//                  <AiOutlineInfoCircle className="text-red-500 transition-colors hover:text-white" />
//               </button>
//              </Link>
             
//           </div>
//         </div>
//         {/* <hr className="border-t-2 border-gray-100" /> */}
//         <img
//           src="https://img.freepik.com/free-vector/house-sale-hand-drawn-design_23-2148647001.jpg?semt=ais_hybrid"
//           alt="Property"
//           className="w-full h-40 object-cover rounded-lg my-4"
//         />

//         {/* <h2 className="text-gray-800 text-2xl font-semibold">Who We Are ?</h2> */}
//         {/* <span className='text-xl mr-4 text-gray-800 font-semibold'>Title : </span>
//             <span className='text-gray-700'>{Notes.title}</span>
//         <p className="text-gray-600 mt-2 text-xs">
//           We are Nest, your premier destination for online property and flat rentals. Whether you're looking for a cozy apartment in the heart of the city or a spacious house in the suburbs.
//         </p>

//         <p className="text-gray-400 text-sm mt-4">October 25, 2019</p> */}
//         <div>
      
//       {loading && <p>Loading...</p>}
//       <div>
//         {notes.map(note => (
//           <div key={note._id} className="note-card">
//             <Link to={`/notes/${note._id}`}>
//               <h2 className='text-xl mr-4 text-gray-800 font-semibold'>{note.title}</h2>
//               <p className='text-gray-600 mt-2 text-xs'>{note.content}</p>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//       </div>
//     </div>
//   )
// }

useEffect(() => {
  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:3000/notes');
      setNotes(res.data.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchNotes();
}, []);

return (
  <div className="flex justify-center items-center h-screen bg-gray-100">
  <Link to="/create-note">
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2">
      <button className="bg-red-500 text-white p-4 rounded-full shadow-2xl hover:bg-red-600 focus:outline-none transition-all">
        <FaPlus size={24} />
      </button>
    </div>
  </Link>

  <div className="h-90 w-90 bg-red-50 rounded-2xl shadow-2xl p-2 mr-3 ml-3 overflow-x-auto">
    <h1 className="flex justify-center items-center text-2xl font-bold mb-4">Your Notes</h1>

    {loading && <p>Loading...</p>}

    <div className="flex overflow-x-auto space-x-4">
      {notes.map(note => (
        <div key={note._id} className="note-card border rounded-lg p-4 shadow-md bg-white min-w-[200px]">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Link to={`/edit-note/${note._id}`}>
                <button className="text-red-500 hover:text-red-600 focus:outline-none transition-all">
                  <FaEdit size={19} />
                </button>
              </Link>
              <Link to={`/delete-note/${note._id}`}>
                <button className="text-red-500 hover:text-red-700 focus:outline-none transition-all">
                  <FaTrash size={19} />
                </button>
              </Link>
              <Link to={`/show-note/${note._id}`}>
                <button className="flex items-center justify-center w-5 h-5 border-2 border-red-500 rounded-full transition-transform transform hover:scale-110 hover:bg-red-500 hover:text-white focus:outline-none">
                  <AiOutlineInfoCircle className="text-red-500 transition-colors hover:text-white" />
                </button>
              </Link>
            </div>
          </div>
          {/* Vertical line divider below the buttons */}
          <div className="w-full h-px bg-gray-300 my-2"></div>
          {/* Title moved below the buttons */}
          <span className=" flex text-lg font-semibold mb-2 justify-normal items-center">{note.title}</span>
          {/* Vertical line divider below the title */}
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <p className="text-gray-600 mt-2">{note.content}</p>
        </div>
      ))}
    </div>
  </div>
</div>

);
};


export default Home;