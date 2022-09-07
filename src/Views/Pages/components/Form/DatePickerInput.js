
import DatePicker from "react-datepicker2";
import moment from 'moment-jalaali'
import { getPersianDate } from "../../../../utils/PersianDate";

const DatePickerInput = ({model,id,description}) => {

    const handleChange = (value) => {
        model[id]=getPersianDate(value);
    }

    return (<>
        <label htmlFor={id}><b>{description}:</b></label>
        <DatePicker timePicker={false} className="form-control" onChange={handleChange}
                                        isGregorian={false} value={moment(model[id]+' 00:00', 'jYYYY/jM/jD HH:mm')}/>
       
    </>)
}

export default DatePickerInput;