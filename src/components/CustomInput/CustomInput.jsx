import React, {useState} from 'react';
import CustomButton from '../CustomButton/CustomButton'
import { MODE } from '../../constant';


const CustomInput = ({mode, onSubmit}) => {
    const [value, setValue] = useState("")
    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (mode === MODE.ADD) {
            const item = {name: value, isChecked: false}
            onSubmit(item)
        } else {
            onSubmit(value)
        }

        setValue("")
    }

    return (
        <div className="custom-input">
            <input 
                className="custom-input__input" 
                placeholder="Enter your todo"
                value = {value}
                onChange = {onChangeValue}
                />
            <CustomButton onClick={handleSubmit}>Add</CustomButton>
        </div>
    );
}

export default CustomInput;