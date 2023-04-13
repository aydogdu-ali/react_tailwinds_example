import React from 'react'

const ListCourse = ({ course, deleteCourse }) => {
    console.log(course)


    // kurslar silinirse kurs listesi componenti görülmeyecek koşul ifadesi
 if (course.length == 0) {
   return;
 }


  return (
    <div className="bg-slate-300 mt-5 flex flex-col justify-center py-4">
      <h1 className="text-amber-600 text-center font-bold text-xl pb-3">
        Kurs Listesi
      </h1>

      <table className="table-fixed mx-10  ">
        <thead className="text-justify text-green-700">
          <tr className=''>
            <th>Sıra</th>
            <th>Kurs Adı</th>
            <th>Fiyatı</th>
            <th>Kaldır</th>
          </tr>
        </thead>
        {course?.map((item, index) => {
          const { id, courseName, price } = item;
          return (
            <tbody className=" text-sky-700 " key={id}>
              <tr className="mb-2 hover:text-neutral-600 ">
                <td>{index + 1}.</td>
                <td>{courseName}</td>
                <td>{price}₺</td>
                <td className="cursor-pointer ms-5" onClick={() => deleteCourse(id)}>
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-10 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ListCourse