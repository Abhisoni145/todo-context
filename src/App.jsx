import React, { useState } from 'react'
import Navbar from '../public/component/Navbar';
import Form from '../public/component/Form';
import Listgroup from '../public/component/Listgroup';
import { TodoProvider } from '../public/provider/TodoContext';

const App = () => {

 





  return (
    <>
      <TodoProvider>
      <Navbar />
      <div className="container-fluid p-5">
      <Form />
      <Listgroup/>
      </div>
      </TodoProvider>
    </>
    
  );
}

export default App