import { useEffect, useState } from 'react'

const CheckBoxInput = ({model,id,description}) => {
    
    const [check,setCheck]=useState(model[id]);
    
    useEffect(()=>{
        setCheck(model[id]);
    },[model,id]);

    const handleChange = (e) => {

        model[id]=!check;
        setCheck(!check);
    }

    return (<>
        <div class="form-check">
            <label className="form-check-label" htmlFor={id}><b>{description}</b></label>
            <input  className="form-check-input" id={id} checked={check} type="checkbox" onChange={handleChange} />
        </div>

    </>)
}

export default CheckBoxInput;