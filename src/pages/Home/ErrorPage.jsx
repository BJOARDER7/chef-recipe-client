import React from "react";
import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className='text-center mt-10'>
      <h3 className='fw-3  mb-3'>Error Occoured</h3>
      <p className='text-danger'>{error.message}</p>
    </div>
  );
};

export default ErrorPage;
