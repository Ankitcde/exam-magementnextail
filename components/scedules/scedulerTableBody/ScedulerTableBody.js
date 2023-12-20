import React, { useState } from 'react';
import BodyRow from './BodyRow';

export default function ScedulerTableBody({ scedules, setScedules }) {
  const [isEditable, setIsEditable] = useState(true);

  function addNewSceduleHandler() {
    const newRow = {
      id: scedules.length + 1,
      subject: '',
      date: '',
      startingTime: '',
    };
    setScedules((prevData) => {
      return [...prevData, newRow];
    });
  }

  return (
    <tbody>
      {scedules.length > 0 &&
        scedules.map(({ id }) => {
          return (
            <BodyRow
              id={id}
              setScedules={setScedules}
              scedules={scedules}
              isEditable={isEditable}
              setIsEditable={setIsEditable}
              key={id}
            />
          );
        })}
      <tr>
        <td colSpan={3} className='text-center tabel-add-btn' onClick={addNewSceduleHandler}>
          <button className='w-full text-lg'>+</button>
        </td>
      </tr>
    </tbody>
  );
}
