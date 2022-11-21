import React from 'react'
import currencyFormatter from '../helpers/currencyFormatter'


const HouseRow = ({ house, selectHouse }) => {
return (
    <tr onClick={() => selectHouse(house)}  key={house.id} >
        <td>{house.address}</td>
        <td>{house.country}</td>
        {house.price && (
        <td className={`${house.price >= 500000 ? "text-primary" : ""}`}>
            {currencyFormatter.format(house.price)}
        </td>
        )}
    </tr>

)
}

const HouseRowMemo = React.memo(HouseRow);


//Render only the new value not all the table component
export { HouseRowMemo };
export default HouseRow;