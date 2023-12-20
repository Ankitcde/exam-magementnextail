import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import Button from '../Button';
import ScedulerTableBody from './scedulerTableBody/ScedulerTableBody';

const Sceduler = forwardRef(function Sceduler({ Data, setData }, ref) {
  const [scedules, setScedules] = useState([]);
  const dialog = useRef();
  const [classNameAndSection, setClassNameAndSection] = useState('10A');

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function updateHandler() {
    const newData = {
      id: Data.length + 1,
      class: classNameAndSection,
      startingDate: scedules[0].date,
      totalPapers: scedules.length,
      subjects: scedules.map((data) => {
        return {
          id: `${Data.length + 1}.${data.id}`,
          ...data,
        };
      }),
    };
    setData((prevData) => {
      return [...prevData, newData];
    });
    setScedules([]);
    dialog.current.close();
  }

  return (
    <dialog id='modal' ref={dialog} className='w-full md:w-4/5 md:max-w-screen-lg'>
      <div className='px-4 py-2 md:px-8 md:py-4'>
        <div className='inline-block my-5 border-2 border-solid border-stone-800 px-4 py-1'>
          <label htmlFor='class'>Class: </label>
          <select
            id='class'
            className='outline-none'
            value={classNameAndSection}
            onChange={(e) => setClassNameAndSection(e.target.value)}
          >
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
            <option value='10'>10</option>
          </select>
        </div>
        <div>
          <table className='w-full table-fixed border-separate border-spacing-y-3'>
            <thead>
              <tr>
                <th className='bg-background-table-header/60 font-medium'>subject</th>
                <th className='bg-background-table-header/60 font-medium'>Date</th>
                <th className='bg-background-table-header/60 font-medium'>Starting Time</th>
                <th></th>
              </tr>
            </thead>
            <ScedulerTableBody scedules={scedules} setScedules={setScedules} />
          </table>
        </div>
        <div className='flex justify-around mt-9'>
          <Button type='UPDATE' onClick={updateHandler}>
            Update
          </Button>
          <form method='dialog' id='modal-actions'>
            <Button type='BACK'>Back</Button>
          </form>
        </div>
      </div>
    </dialog>
  );
});

export default Sceduler;
