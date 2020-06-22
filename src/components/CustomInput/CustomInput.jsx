import React, {useState, useEffect} from 'react';
import CustomButton from '../CustomButton/CustomButton'
import { MODE } from '../../constant';


const CustomInput = ({mode, onSubmit}) => {
    const [value, setValue] = useState("")

    useEffect(()=>{
        setValue("")
    }, [mode])
    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (mode === MODE.ADD) {
            if (value.trim().length >0){
                const item = {name: value, isChecked: false}
                onSubmit(item)
                setValue("")
            }
        } else {
            onSubmit(value)
        }
    }

    return (
        <div className="custom-input">
            <input 
                className="custom-input__input" 
                placeholder="Enter your todo"
                value = {value}
                onChange = {onChangeValue}
                />
            <span className="custom-input__btn">
                <CustomButton onClick={handleSubmit}>{mode===MODE.ADD? 'Add' : 'Search'}</CustomButton>
            </span>
        </div>
    );
}

export default CustomInput;