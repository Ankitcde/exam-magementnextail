import { IoIosClose } from 'react-icons/io';
import { CiEdit } from 'react-icons/ci';
import { MdDone } from 'react-icons/md';
import { useState } from 'react';

export default function BodyRow({ id, setScedules, scedules, isEditable, setIsEditable }) {
  const [subjectValue, setSubjectValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [timeValue, setTimeValue] = useState('');

  function deleteHandler(id) {
    const rowsAfterDeletion = scedules.filter((scedule) => scedule.id !== id);
    setScedules(rowsAfterDeletion);
  }

  function editHandler(id) {
    setScedules((preData) => {
      return preData.map((data) => {
        if (data.id == id) {
          return {
            ...data,
            subject: subjectValue,
            date: dateValue,
            startingTime: timeValue,
          };
        }
        return data;
      });
    });
  }

  let subjectField = (
    <input
      type='text'
      className='w-full border-2 border-solid outline-none'
      value={subjectValue}
      onChange={(e) => setSubjectValue(e.target.value)}
    />
  );
  let dateField = <input type='date' value={dateValue} onChange={(e) => setDateValue(e.target.value)} />;
  let startingTimeField = <input type='time' value={timeValue} onChange={(e) => setTimeValue(e.target.value)} />;

  if (!isEditable) {
    subjectField = subjectValue;
    dateField = dateValue;
    startingTimeField = timeValue;
  }
  return (
    <tr key={id}>
      <td className='text-center py-3'>{subjectField}</td>
      <td className='text-center py-3'>{dateField}</td>
      <td className='text-center py-3'>{startingTimeField}</td>
      <td className='text-center flex justify-center py-3'>
        <button
          className='bg-background-btn-primary px-2 py-1 mr-4'
          onClick={() => setIsEditable((prevValue) => !prevValue)}
        >
          {isEditable ? <MdDone size={20} onClick={() => editHandler(id)} /> : <CiEdit />}
        </button>
        <button className='bg-background-btn-secondry px-2 py-1' onClick={() => deleteHandler(id)}>
          <IoIosClose size={20} />
        </button>
      </td>
    </tr>
  );
}
