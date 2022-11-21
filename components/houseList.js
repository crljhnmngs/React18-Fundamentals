import React from "react";
import useHouses from "../hooks/useHouses";
import { HouseRowMemo } from "./houseRow";



const HouseList = ({ selectHouse }) => {

    const {houses, setHouses, desc} = useHouses();
// const [count, setCounter] = useState(0);
// setCounter(current => count + 1);

const addHouse = () => {
    setHouses([
        ...houses,
        {
        id: 4,
        address: "70 Bangkal, Lapi-Lapu City",
        country: "Philippines",
        price: 888882,
        description: desc,
        photo: '',
        }
    ]);
}

return (
    <React.Fragment>

        <div className='row mb-2'>
        <h5 className='themeFontColor text-center'>
        Houses currently on the market
        </h5>
        </div>

        <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={addHouse} >
            Add
        </button>
        </div>
        
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Asking Price</th>
                </tr>
            </thead>
            <tbody>
                {houses.map(h => 
                    <HouseRowMemo key={h.id} house={h} selectHouse={selectHouse} />
                )}
            </tbody>
        </table>

    </React.Fragment>
) 
}

export default HouseList;