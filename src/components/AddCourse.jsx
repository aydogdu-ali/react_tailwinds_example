import { useState } from "react";



const AddCourse = ({ createCourse, setShow }) => {
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseName.trim().length == 0) {
      return;
    }
    createCourse(courseName, price);
    setShow(true);
    setCourseName("");
    setPrice("");
  };

  return (
    <div className="rounded-md">
      {" "}
      <form
        className="flex flex-col gap-y-1 rounded-md"
        onSubmit={handleSubmit}
      >
        <label
          htmlFor="kurs "
          className="font-small text-red-700 font-extrabold tracking-widest"
        >
          Kurs İsmi
        </label>
        <input
          type="text"
          className="w-full mx-auto border p-2 rounded-md"
          placeholder="Kurs ismini yazınız"
          id="kurs"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
        <label
          htmlFor="price"
          className="sfont-small text-red-700 font-extrabold tracking-widest"
        >
          Kurs Ücreti
        </label>
        <input
          type="number"
          className=" w-full mx-auto border p-2 rounded-md"
          placeholder="Kurs ücretinizi yazınız"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button className=" max-w-md py-3 px-2 mt-2 text-sm bg-blue-500 text-white font-extrabold tracking-widest rounded-md mx-auto">
          Kaydet
        </button>
      </form>
    </div>
  );
};

export default AddCourse