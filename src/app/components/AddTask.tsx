"use client";

import React from 'react'
import { useRecoilValue } from 'recoil'

import { addTitleState, addTitleStateLength } from '@/states/addTitleState';

const AddTask = () => {
  const addTitle = useRecoilValue(addTitleState);
  const addTitleLength = useRecoilValue(addTitleStateLength);

  return (
    <>
      <div className='mt-7 text-gray-600'>{addTitleLength}個のタスクがあります</div>
      <div className='flex justify-center mt-6'>
        <ul role="list" className="divide-y divide-gray-100">
          {addTitle.map((todo) => (
            <li key={todo.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{todo.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default AddTask
