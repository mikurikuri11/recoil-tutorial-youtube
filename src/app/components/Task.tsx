import React from 'react'
import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid'

import { Task } from '@/types/Task';
import { useRecoilState } from 'recoil';
import { countEachState } from '@/states/countEachState';

interface TaskProps {
  todo: Task;
}

const Task = ({ todo }: TaskProps) => {
  const [countEachTodo, setCountEachTodo] = useRecoilState(countEachState(todo.id));

  const countUp = () => {
    setCountEachTodo(countEachTodo + 1);
  }

  const countDown = () => {
    setCountEachTodo(countEachTodo - 1);
  }

  return (
    <li key={todo.id} className="flex justify-between gap-x-6 py-5 cursor-pointer">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{todo.title}</p>
        </div>
        <button
          type="button"
          className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={countUp}
          >
          <PlusIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <div>
          {countEachTodo}
        </div>
        <button
          type="button"
          className="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={countDown}
          >
          <MinusIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </li>
  )
}

export default Task
