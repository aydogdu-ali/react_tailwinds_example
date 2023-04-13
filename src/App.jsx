

import './App.css'
import React, { useState } from "react";
import AddCourse from './components/AddCourse';
import ListCourse from "./components/ListCourse";


function App() {
      const [course, setCourse] = useState([]);
      const [show, setShow] = useState(false);


const createCourse = (courseName, price) => {
  
  const newCourse = [
    ...course,
    {
      id: new Date().getTime(),
      courseName: courseName,
      price: price,
    },
  ];
  setCourse(newCourse);
};

console.log(course)
return (

    <div className="App bg-slate-100 w-1/3 mx-auto mt-3 rounded-md p-5">
      <h1 className="text-center text-orange-500 font-extrabold tracking-widest my-5 text-xl">
        Kurs Ekleme Uygulaması
      </h1>
      <AddCourse
        createCourse={createCourse}
        setShow= {setShow}
   
        
      />
      {show && <ListCourse course={course} />}
    </div>
  );
}

export default App