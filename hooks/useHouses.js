import React, { useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis tortor a consequat aliquam. Suspendisse quis convallis justo. Fusce et scelerisque diam. Vestibulum viverra neque arcu, at maximus lorem lobortis convallis. Duis ac eros tempus, convallis diam quis, aliquet mi. Vivamus at ultricies enim, eget dictum lacus. Cras sit amet ex viverra, fermentum libero non, cursus sem. Vivamus vitae velit a ex rutrum mattis. Integer sit amet magna feugiat, viverra nisl vitae, varius neque. Vivamus vel urna sed nisl luctus elementum. Sed ipsum enim, cursus id dolor in, auctor consequat massa. Morbi varius accumsan lectus, in vulputate nisi scelerisque venenatis. Sed facilisis fermentum ipsum, eu euismod lectus iaculis ac. Pellentesque at lectus sed lacus tincidunt blandit vel non lorem. Praesent molestie sagittis sagittis."

const houseArray = [
    {
        id: 1,
        address: "12 Valley of Kings, Mandaue",
        country: "Philippines",
        price: 100000,
        description: desc,
        photo: '',
    },
    {
        id: 2,
        address: "89 Matumbo Pusok, Cebu",
        country: "Philippines",
        price: 500000,
        description: desc,
        photo: '',
    },
    {
        id: 3,
        address: "69 Maribago, Lapi-Lapu City",
        country: "Philippines",
        price: 888888.69,
        description: desc,
        photo: '',
    },
    
]

const bindsArray = [
    {
        id: 1,
        houseId: 1,
        bidder: "Ferdi",
        amount: 400000,
    },
    
]

export default function useHouses() {
    const [houses, setHouses] = useState(houseArray);
    const [bids, setBids] = useState(bindsArray);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    return { houses, setHouses, desc, bids };
}

