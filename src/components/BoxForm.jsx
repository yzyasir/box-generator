import React, {useContext} from'react';
import BoxenContext from '../contexts/BoxContext';


const BoxForm = props => {

    const {color, setColor, boxen, setBoxen} = useContext(BoxenContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxen(banana => [...banana, color]);
        setColor("");
    }
    return (
       <form className="col-5 mx-auto" onSubmit={handleSubmit}>
           {/* need to call handleSubmit to activate it */}
            <div className="form-group">
                <label htmlFor="color">Color</label>
                <input 
                type="text" 
                className="form-control"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                />
{/* here we are using context */}
{/* if i want to keep adding on classes I can keep adding .whatever over and over */}
            </div>
            <input type="submit" value="Add Box" className="btn btn-warning btn-outline-primary"/>
       </form>
   )
}

export default BoxForm;