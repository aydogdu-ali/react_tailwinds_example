import React from 'react'

const Modal = ({ handleConfirm, error }) => {
  return (
    <div className="fixed top-1/4 left-0 flex justify-center mx-auto w-full z-50 rounded">
      <div
        className="backdrop-blur-sm bg-white/30 fixed w-screen h-screen top-0"
        onClick={handleConfirm}
      ></div>
      <div className="w-[36rem] p-0 z-20 bg-slate-300">
        <header className="bg-red-700 p-4  rounded-t-xl">
          <h2 className="text-center text-xl text-white">Dikkat!</h2>
        </header>
        <section className="text-center pt-5 pb-5">
          <p className="font-medium"> {error}</p>
        </section>
        <footer className="p-4 flex justify-end">
          <button
            className=" py-3 px-2 mt-2
            text-sm
            bg-green-600
            text-white
            font-extrabold
            tracking-widest
            rounded-md"
            onClick={handleConfirm}
          >
            Tamam
          </button>
        </footer>
      </div>
    </div>
  );
};

export default  Modal
