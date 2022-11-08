import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <div className="h-12 w-12 rounded-full shadow-xl flex items-center justify-center border border-gray-100">
        <Link to="/">
          <FcGoogle size={30} />
        </Link>
      </div>
    </div>
  );
}

export default OAuth