import React, {useEffect} from 'react';
import './calendar.css';

function Days(props){

    return(
        <div onClick={props.getPoints} 
            className={props.day ? 'calendar-day' : 'calendar-day-empty'}>
                <span className={ props.day == props.today ? 'today' : 'date'}>{props.day}
                </span>
        </div>
    )
}   

export default Days;