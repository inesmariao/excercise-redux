import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setName } from '../redux/slice'

export const Users = () => {

  const name = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  const handleSetName = () => {
    const newName = prompt("Enter your name: ");
    dispatch(setName(newName));
  };

  return (
    <div>
      <h1>User: {name}</h1>
      <div>
        <button onClick={handleSetName}>Set Name: </button>
      </div>
    </div>
  )
}
