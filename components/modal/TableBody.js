import React from 'react';
import EditableRow from './EditableRow';

export default function TableBody({ subjects, setPopupData, selectedClassID, setData }) {
  function addNewRowHandler() {
    const updateSubjects = [...subjects];
    const newRow = {
      id: +`${selectedClassID}.${subjects.length + 1}`,
      subject: '',
      date: '',
      startingTime: '',
    };
    updateSubjects.push(newRow);
    setPopupData((prevData) => {
      return {
        ...prevData,
        subjects: updateSubjects,
      };
    });
  }

  return (
    <tbody>
      {subjects.map(({ id, subject, date, startingTime }) => {
        return (
          <EditableRow
            id={id}
            initialSubject={subject}
            initialDate={date}
            initialStartingTime={startingTime}
            key={id}
            subjects={subjects}
            setPopupData={setPopupData}
          />
        );
      })}
      <tr>
        <td colSpan={3} className='text-center tabel-add-btn'>
          <button className='w-full text-lg' onClick={addNewRowHandler}>
            +
          </button>
        </td>
      </tr>
    </tbody>
  );
}
