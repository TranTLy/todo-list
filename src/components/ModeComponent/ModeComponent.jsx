import React from 'react'
import { MODE } from '../../constant';

const ModeComponent = ({ mode, onChangeMode}) => {
    const handleChangeMode = (e) =>{
        // console.log("e:", e)
        e.preventDefault()
        // console.log("e:", e.target.value)
        if (mode === MODE.ADD) {
            onChangeMode(MODE.SEARCH)
        } else {
            onChangeMode(MODE.ADD)
        }
    }
    return ( 
        <div className="mode">
            <span onClick={handleChangeMode}>Add</span>
            {/* <i class={`${mode === MODE.ADD ? "fas fa-toggle-off" : "fas fa-toggle-on"}`}/> */}
            {/* <i class="fas fa-toggle-off"></i> */}
            <span>Search</span>



                {/* {
                    mode === MODE.ADD ?
                    <label>
                        <input name='mode' type="radio" class="mode__radio"
                            value={MODE.ADD}
                            checked
                            onChange={handleChangeMode}
                        />Add
                </label>
                    : <label>
                        <input name='mode' type="radio" class="mode__radio"
                            value={MODE.ADD}
                            // checked={mode === MODE.ADD}
                            onChange={handleChangeMode}
                        />Add
                </label>
                } */}
        </div>
     );
}
 
export default ModeComponent;