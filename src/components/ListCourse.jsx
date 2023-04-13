import React from 'react'

const ListCourse = ({ course }) => {
    console.log(course)
  console.log(kurs);
  return (
    <div className="bg-slate-300 text-yellow-500 mt-5 flex flex-col justify-center">
      <h1 className="text-amber-600 text-center font-bold text-xl">
        Kurs Listesi
      </h1>
     
        <table className="table-fixed mx-10 w-full">
          <thead className="text-justify">
            <tr>
              <th>Sıra Nu:</th>
              <th>Kurs Adı</th>
              <th>Fiyatı</th>
            </tr>
          </thead>
          {course?.map((item, index) => {
            const { id, courseName, price } = item;
            return (
              <tbody className="text-start" key={id}>
                <tr>
                  <td>{index + 1}.</td>
                  <td>{courseName}</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
   
  );
};

export default ListCourse