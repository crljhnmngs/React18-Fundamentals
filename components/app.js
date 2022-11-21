import React, { useState } from "react";
import Banner from "./banner";
import House from "./house";
import HouseList from "./houseList";

const App = () => {
    //const jxs = <h3>HI JXS</h3>;

    const [selectedHouse, setSelectedHouse] = useState();
    const setSelectedHouseWrapper = (house) => {
        setSelectedHouse(house)
    }
    return (
    <React.Fragment>
        <Banner headerText="Providing houses all over the world"> Providing houses all over the world</Banner>
        {/* <HouseList></HouseList> */}
        {/* <House></House> */}
        {selectedHouse ? ( <House house={selectedHouse}></House> ) : 
        ( <HouseList selectHouse={setSelectedHouseWrapper}></HouseList> )}
    </React.Fragment>
    )
};

export default App;