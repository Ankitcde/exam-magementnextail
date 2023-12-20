import React, { useRef, useState } from 'react';
import Table from './Table';
import Button from '../Button';
import Sceduler from '../scedules/Sceduler';

const DUMMY_DATA = [
  {
    id: 1,
    class: '5',
    startingDate: '20.9.2024',
    totalPapers: 2,
    subjects: [
      { id: 1.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 1.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 2,
    class: '6',
    startingDate: '21.9.2024',
    totalPapers: 2,
    subjects: [
      { id: 2.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 2.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 3,
    class: '7',
    startingDate: '20.9.2024',
    totalPapers: 3,
    subjects: [
      { id: 3.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 3.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 4,
    class: '8',
    startingDate: '21.9.2024',
    totalPapers: 3,
    subjects: [
      { id: 4.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 4.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 5,
    class: '9',
    startingDate: '20.9.2024',
    totalPapers: 4,
    subjects: [
      { id: 5.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 5.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
  {
    id: 6,
    class: '10',
    startingDate: '21.9.2024',
    totalPapers: 4,
    subjects: [
      { id: 6.1, subject: 'math', date: '2023-12-11', startingTime: '10:00 ' },
      { id: 6.2, subject: 'english', date: '2023-11-10', startingTime: '11:00 ' },
    ],
  },
];
export default function Main(props) {
  const [Data, setData] = useState(DUMMY_DATA);
  const sceduler = useRef();

  function addSceduleHandler() {
    sceduler.current.open();
  }
  return (
    <>
      <Sceduler ref={sceduler} Data={Data} setData={setData} />

      <div className='mt-4'>
        <div className='flex justify-between'>
          <h2 className='border-2 border-solid border-stone-800 px-6 py-1'>Annual Exam</h2>{' '}
        
          <Button type='DELETE'>Delete Exam</Button>
        </div>

        <div className='mt-8 w-full'>
          <Table Data={Data} setData={setData} />
        </div>

        <div className='space-x-5 text-right mt-8 w-full'>
          <Button type='ADD' onClick={addSceduleHandler}>
            Add Scedule
          </Button>
          <Button type='BACK'>Back</Button>
        </div>
      </div>
    </>
  );
}
