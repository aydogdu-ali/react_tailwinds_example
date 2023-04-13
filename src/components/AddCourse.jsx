import React from 'react'

const AddCourse = () => {
  return (
    <div className="">
      {" "}
      <form className="flex flex-col gap-y-1 ">
        <label htmlFor="kurs " className="font-small">
          Kurs İsmi
        </label>
        <input
          type="text"
          className="max-w-[25rem] w-full mx-auto border p-1"
          placeholder="Kurs ismini yazınız"
          id="kurs"
        />
        <label htmlFor="ücret " className="sfont-small">
          Kurs Ücreti
        </label>
        <input
          type="text"
          className="max-w-[25rem] w-full mx-auto border p-1"
          placeholder="Kurs ücretinizi yazınız"
          id="ücret"
        />
        <button className="p-1 text-sm bg-blue-500 text-yellow-300 mt-2 border-opacity-5">
          Kaydet
        </button>
      </form>
    </div>
  );
}

export default AddCourse