

import './App.css'
import React, { useState } from "react";
import AddCourse from './components/AddCourse';
import ListCourse from "./components/ListCourse";



function App() {
  // kursları tutan state
      const [course, setCourse] = useState([]);

      // başlangıçta listCourse componentini göstermeyen state
        // const [show, setShow] = useState(true);


      // kurs Ekleme Fonksiyonu
const createCourse = (courseName, price,date) => {
    const newCourse = [
    ...course,
    {
      id: new Date().getTime(),
      courseName: courseName,
      price: price,
      date:date
    },
  ];
  setCourse(newCourse);
};

// Kurs silme fonksiyonu

const deleteCourse =(id)=>{
 
  const newListCourse = course.filter((item)=> item.id !== id)
  setCourse(newListCourse)

}



return (
  <div className="App bg-slate-100 w-1/3 mx-auto mt-3 rounded-md p-5">
    <h1 className="text-center text-orange-500 font-extrabold tracking-widest my-5 text-xl">
      Kurs Ekleme Uygulaması
    </h1>
    <AddCourse createCourse={createCourse}  />
    {course.length> 0 ? ( <ListCourse course={course} deleteCourse={deleteCourse} />): null}
   
  </div>
);
}

export default App