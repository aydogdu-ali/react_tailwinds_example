

import './App.css'
import AddCourse from './components/AddCourse';

function App() {


  return (
    <div className="App bg-slate-100 w-1/3 mx-auto mt-3 rounded-md p-5">
      <h1 className="text-center text-yellow-500 font-extrabold tracking-widest my-5">
        Kurs Ekleme Uygulaması
      </h1>
      <AddCourse />
    </div>
  );
}

export default App