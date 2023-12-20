import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from '../Button';
import TableBody from './TableBody';

const Modal = forwardRef(function Modal({ selectedClass, Data, setData, setPopupData }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  function updateHandler() {
    console.log('inside update handler');
    setData((prevData) => {
      return Data.map((data) => {
        if (data.id === selectedClass.selectedClassID) {
          return {
            ...data,
            subjects: selectedClass.subjects,
          };
        }
        return data;
      });
    });
    dialog.current.close();
  }
  return (
    <dialog id='modal' ref={dialog} className='w-full md:w-4/5 md:max-w-screen-lg'>
      <div className='px-4 py-2 md:px-8 md:py-4'>
        <div className='inline-block my-5'>
          <h1 className='border-2 border-solid px-8 py-1'>Class: {selectedClass.className}</h1>
        </div>
        <div>
          <table className='w-full table-fixed border-separate border-spacing-y-3'>
            <thead>
              <tr>
                <th className='bg-background-table-header-popup/80 font-medium'>Subject</th>
                <th className='bg-background-table-header-popup/80 font-medium'>Dates</th>
                <th className='bg-background-table-header-popup/80 font-medium'>Srarting Time</th>
                <th></th>
              </tr>
            </thead>
            <TableBody
              subjects={selectedClass.subjects}
              setPopupData={setPopupData}
              selectedClassID={selectedClass.selectedClassID}
              setData={setData}
            />
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

export default Modal;
