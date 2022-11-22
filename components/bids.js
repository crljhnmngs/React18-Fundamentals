import React, { useState } from 'react'
import currencyFormatter from '../helpers/currencyFormatter';
import useHouses from '../hooks/useHouses'

const Bids = ({ house }) => {
    const {bids, setBids} = useHouses();

    const emptyBid = {
        houseId: 0,
        bidder: "",
        amount: 0,
    }
    
    const [newBid, setNewBid] = useState(emptyBid)

    const onBidSubmitClick = () => {
        setBids(...newBid, newBid)
        setNewBid(emptyBid);
    }

  return (
   <React.Fragment>
    <div className='row mt-4'>
        <div className='col-12'>
            <table className='table table-sm'>
                <thead>
                    <tr>
                    <th>Bidder</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                
                    {bids.map((b) => (
                        <tr key={b.id}>
                        <td>{b.bidder}</td>
                        <td>{currencyFormatter.format(b.amount)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <div className='row'>
        <div className='col-5'>
            <input 
            id="bidder"
            className='h-200'
            type="text"
            value={newBid.bidder}
            onChange={(e) => setNewBid({...newBid, bidder: e.target.value})}
            placeholder="Bidder Name">
            </input>
    </div>
        <div className='col-5'>
            <input 
            id="amount"
            className='h-200'
            type="number"
            value={newBid.amount}
            onChange={(e) => setNewBid({...newBid, amount: e.target.value})}
            placeholder="Amount">
            </input>
        </div>
        <div className='col-12 mt-2'>
            <button className='btn btn-primary' onClick={onBidSubmitClick}>
                Add
            </button>
        </div>
    </div>
   </React.Fragment>
  )
}

export default Bids