import React, { useContext } from 'react';
import BoxenContext from '../contexts/BoxContext';



const Boxen = props => {
    const {boxen} = useContext(BoxenContext);
    return (
        <div>
            {
                boxen.map((box, i) => {
                    return <div
                                style={{backgroundColor:box, width:"300px", height:"300px", border:"5px solid black"}}
                                // adding in some inline styling
                                // even accepts hex keys as well
                    ></div>
                })
            }
        </div>
    )
}

export default Boxen;