import React from 'react'
import { MODE } from '../../constant';

const ModeComponent = ({ mode, onChangeMode}) => {
    const handleChangeMode = (e) =>{
        e.preventDefault()
        if (mode === MODE.ADD) {
            onChangeMode(MODE.SEARCH)
        } else {
            onChangeMode(MODE.ADD)
        }
    }
    return ( 
        <div className="mode-component">
            <div className="mode-component__note">
                Choose mode
            </div>
            <div className="mode-component__options-group">
                <span className={`mode-component__option ${mode === MODE.ADD ? 'selected' : ''}`} onClick={handleChangeMode}>Add</span>
                <span className={`mode-component__option ${mode === MODE.SEARCH ? 'selected' : ''}`} onClick={handleChangeMode}>Search</span>
            </div>
        </div>
     );
}
 
export default ModeComponent;