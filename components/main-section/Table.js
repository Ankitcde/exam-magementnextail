import React, { useRef, useState } from 'react';
import { IoMdEye, IoIosClose } from 'react-icons/io';
import Modal from '../modal/Modal';

export default function Table({ Data, setData }) {
  const modal = useRef();

  const [popupData, setPopupData] = useState({
    selectedClassID: undefined,
    className: '',
    subjects: [],
  });

  function deleteHandler(id) {
    const data = [...Data];
    const indexOfDataToRemove = data.findIndex((row) => row.id == id);
    data.splice(indexOfDataToRemove, 1);
    setData(data);
  }

  function individualClassHandler(id) {
    const selectedClass = Data.find((obj) => obj.id == id);
    if (selectedClass !== undefined) {
      setPopupData({
        selectedClassID: selectedClass.id,
        className: selectedClass.class,
        subjects: selectedClass.subjects,
      });
    }
    modal.current.open();
  }

  return (
    <>
      <Modal ref={modal} selectedClass={popupData} Data={Data} setData={setData} setPopupData={setPopupData} />
      <table className='w-full table-auto border-separate'>
        <thead>
          <tr>
            <th className='bg-background-table-header/60 font-medium'>Class</th>
            <th className='bg-background-table-header/60 font-medium'>Starting date</th>
            <th className='bg-background-table-header/60 font-medium'>Total Papers</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Data.map(({ id, class: className, startingDate, totalPapers }) => {
            return (
              <tr key={id}>
                <td className='text-center py-3'>{className}</td>
                <td className='text-center py-3'>{startingDate}</td>
                <td className='text-center py-3'>{totalPapers}</td>
                <td className='text-center flex justify-center py-3'>
                  <button
                    className='bg-background-btn-primary px-2 py-1 mr-4'
                    onClick={() => individualClassHandler(id)}
                  >
                    <IoMdEye size={20} />
                  </button>
                  <button className='bg-background-btn-secondry px-2 py-1' onClick={() => deleteHandler(id)}>
                    <IoIosClose size={20} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
