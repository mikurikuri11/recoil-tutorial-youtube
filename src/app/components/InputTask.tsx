"use client";

import { inputTitleState, } from '@/states/inputTitleState';
import { addTitleState } from '@/states/addTitleState';
import React from 'react'
import { useRecoilState } from 'recoil'
import { useCallback } from 'react';

const InputTask = () => {
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const getKey = () => {
    return new Date().getTime().toString(36) + '-' + Math.random().toString(36);
  }

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }]);
    setInputTitle('');
  };

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
  },
  [inputTitle]
  );

  return (
    <div>
      <div className="mt-12 flex justify-center">
        <input
          type="text"
          name="todo"
          id="todo"
          className="block rounded-md border-0 py-1.5 px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="todo"
          value={inputTitle}
          onChange={onChange}
        />
        <button
          type="button"
          className="rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleClick}
        >
        追加
        </button>
      </div>
    </div>
  )
}

export default InputTask
