import { useState } from "react";
import Modal from "./Modal";

const AddCourse = ({ createCourse }) => {
  // inputtaki bilgiyi almak için yazılan stateler
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
   const [date, setDate] = useState("");

  // kurs ekleme tuşuna bastığında inputlar boş ise açılacak modal bilgilerini tutan state 
  const [error, setError] = useState(null);


  // veriler girildikten sonra verileri state atacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputlarda veri yoksa hata vermek için koşul ifadesi
    if (courseName.trim().length == 0 || price.length == 0 || date.length==0) {
      setError("Lütfen ilgili alandaki bilgileri eksiksiz  doldurunuz!");
      return;
    }
    //inpuntan gelen verileri parametre olarak fonksiyona gönderiyoruz(App.jsx de tanımladık)
    createCourse(courseName, price,date);
    setCourseName("");
    setPrice("");
    setDate("")
  };

  // Açılan Modalı kapatan fonksiyon
  const handleConfirm = () => {
    setError(null);
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
          className="w-full mx-auto border p-2 rounded-md "
          placeholder="Kurs ismini yazınız"
          id="kurs"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
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
        />
        <label
          htmlFor="date"
          className="sfont-small text-red-700 font-extrabold tracking-widest"
        >
          Kurs Tarihi
        </label>
        <input
          type="date"
          className=" w-full mx-auto border p-2 rounded-md"
          placeholder="Kurs ücretinizi yazınız"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className=" max-w-md py-3 px-2 mt-2 text-sm bg-blue-500 text-white font-extrabold tracking-widest rounded-md mx-auto">
          Kaydet
        </button>
      </form>
      {error && <Modal handleConfirm={handleConfirm} error={error} />}
    </div>
  );
};

export default AddCourse;
