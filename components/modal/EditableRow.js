import React, { useRef, useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import { MdDone } from 'react-icons/md';

export default function EditableRow({ id, initialSubject, initialDate, initialStartingTime, subjects, setPopupData }) {
  const [isEditable, setIsEditable] = useState(false);
  const subject = useRef();
  const date = useRef();
  const time = useRef();

  const editHandler = (id) => {
    const updatedSubjects = subjects.map((subjectItem) => {
      if (subjectItem.id === id) {
        return {
          ...subjectItem,
          subject: subject.current.value,
          date: date.current.value,
          startingTime: time.current.value,
        };
      }
      return subjectItem;
    });

    setPopupData((prevData) => {
      return {
        ...prevData,
        subjects: updatedSubjects,
      };
    });
  };

  const deleteHandler = (id) => {
    const rows = [...subjects];
    const deleteRowIndex = rows.findIndex((row) => row.id == id);
    rows.splice(deleteRowIndex, 1);
    console.log('after delete ', rows);
    setPopupData((prevData) => {
      return {
        ...prevData,
        subjects: rows,
      };
    });
  };

  let editableSubject = <span>{initialSubject}</span>;
  let editableDate = <span>{initialDate}</span>;
  let editableStartingTime = <span>{initialStartingTime}</span>;

  if (isEditable) {
    editableSubject = <input type='text' defaultValue={initialSubject} ref={subject} />;
    editableDate = <input type='date' defaultValue={initialDate} ref={date} />;
    editableStartingTime = <input type='time' defaultValue={initialStartingTime} ref={time} />;
  }

  return (
    <tr key={id}>
      <td className='text-center py-1 capitalize'>{editableSubject}</td>
      <td className='text-center py-1'>{editableDate}</td>
      <td className='text-center py-1'>{editableStartingTime}</td>
      <td className='text-center flex justify-center py-1'>
        <button className='bg-background-btn-primary px-2 py-1 mr-4' onClick={() => setIsEditable((prev) => !prev)}>
          {isEditable ? <MdDone size={20} onClick={() => editHandler(id)} /> : <CiEdit size={20} />}
        </button>
        <button className='bg-background-btn-secondry px-2 py-1 mr-4' onClick={() => deleteHandler(id)}>
          <IoIosClose size={20} />
        </button>
      </td>
    </tr>
  );
}
