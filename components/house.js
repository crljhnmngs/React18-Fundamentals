import React from 'react'
import currencyFormatter from '../helpers/currencyFormatter'
import Bids from './bids'

export default function House({ house }) {
  return (
    <React.Fragment>
    <div className='row'>
        <div className='col-6'>
            <div className='row'>
                {/* <img className='img-fluid' src={house.photo !== '' ? '' : './images/house.jpg'}/> */}
                <img src='./images/house.jpg' alt='House Image'/>
            </div>
        </div>
        <div className='col-6'>
            <div className='row mt-2'>
                <h2 className='col-12 mb-3'>{house.country}</h2>
                <h3 className='col-12 mb-3'>{house.address}</h3>
                <h3 className={`${house.price >= 500000 ? 'col-12 mb-5 text-warning'  : 'col-12 mb-5'}`}>{currencyFormatter.format(house.price)}</h3>
                <p className='col-12'>{house.description}</p>
            </div>
            <Bids></Bids>
        </div>
    </div>
    </React.Fragment>
  )
}
