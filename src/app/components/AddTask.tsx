"use client";

import React from 'react'
import { useRecoilValue } from 'recoil'

import { addTitleState, addTitleStateLength } from '@/states/addTitleState';
import Task from './Task';


const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);


  return (
    <>
      <div className='mt-7 text-gray-600'>{addTitleLength}個のタスクがあります</div>
      <div className='flex justify-center mt-6'>
        <ul role="list" className="divide-y divide-gray-100">
          {addTitle.map((todo) => (
            <Task todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddTask
