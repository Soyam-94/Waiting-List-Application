import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import WaitingList from './components/WaitingList';
import WaitingListStatus from './components/WaitingListStatus';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {
  waitingList: [],
};

const reducer = (state, action) => {
  switch (action.type) {
      case 'ADD_USER':
          return {
              waitingList: [...state.waitingList, action.payload],
          };
      default:
          return state;
  }
};

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToWaitingList = (name, inviteCode) => {
      const currentPosition = state.waitingList.length + 1; 
      const isValidCode = ['ANKUR23', 'SOYAM456', 'PIYUSH789'].includes(inviteCode); 

      const newUser = {
          id: state.waitingList.length + 1,
          name,
          code: inviteCode,
          isValid: isValidCode,
          position: currentPosition
      };
      dispatch({ type: 'ADD_USER', payload: newUser });
  };
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WaitingList addToWaitingList={addToWaitingList} />} />
            <Route path="status" element={<WaitingListStatus waitingList={state.waitingList} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App;