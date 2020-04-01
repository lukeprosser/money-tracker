import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array prevents infinite loop

  return (
    <>
      <h3>History</h3>
      {transactions.length === 0 ? 
        <p className="information">Previous transactions will appear here.</p>  
      : 
        <ul id="list" className="list">
          {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction}/>))}
        </ul>
      }
    </>
  )
}
