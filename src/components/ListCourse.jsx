import React from 'react'

const ListCourse = ({ course, deleteCourse }) => {
    console.log(course)


  return (
    <div className="bg-slate-300 mt-5 flex flex-col justify-center py-4">
      <h1 className="text-amber-600 text-center font-bold text-xl pb-3">
        Kurs Listesi
      </h1>

      <table className="table-fixed mx-10  ">
        <thead className="text-justify text-green-700 ">
          <tr>
            <th>Sıra Nu:</th>
            <th>Kurs Adı</th>
            <th>Fiyatı</th>
            <th>Kaldır</th>
          </tr>
        </thead>
        {course?.map((item, index) => {
          const { id, courseName, price } = item;
          return (
            <tbody className="text-start text-sky-700 " key={id}>
              <tr className="gap-5  hover:text-neutral-600 ">
                <td>{index + 1}.</td>
                <td>{courseName}</td>
                <td>{price}₺</td>
                <td className="text-center" onClick={() => deleteCourse(id)}>
                  {
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="red"
                      className="w-6 h-6"
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