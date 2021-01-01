import React, {useState,useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import moment from 'moment';
import Days from './Days'
import './calendar.css'
import Popup from './Popup';

function Calendar(){

    // dateobject
    const [dateObject,setDateObject] = useState(moment());

    const [totalSlots,setTotalSlots] = useState([]);
    const [today,setToday] = useState(0);
    const [popup,setPopup] = useState(false);

    const [event,setEvent] = useState({
        title:'',
        description:'',
        time: {
            start:'',
            end:''
        }        
    });

    // [Sun,Mon,Tue,Thu,....]
    const weekDaysShort = moment.weekdaysShort();
    
    // first day of the month
    const firstDayOfTheMonth = () => {
        let firstDay = moment(dateObject).startOf('month').format('d')
        return firstDay;
    }

    // returns days in a month
    const daysInMonth = () => {
        return dateObject.daysInMonth();
    }

    // current day
    const currentDay = () => {
        return dateObject.format("D");
    }

    // toggle popup
    const togglePopup = () => {
        setPopup(!popup);
    }

    const getPoints = (e) => {
        console.log(e.clientX,e.clientY);
    }

    const fillTotalSlots = () => {

        let total = [];

        for(let i=0;i<firstDayOfTheMonth();i++){
           total.push(''); 
        }

        for(let i=1;i<=daysInMonth();i++){
            total.push(i);
        }

        return total;
    }
    
    const handleEventChange = (e) => {
        setEvent({...event, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        console.log(event);
        e.preventDefault();
    }

    useEffect(()=>{
        setToday(currentDay());
        setTotalSlots(fillTotalSlots());
    },[])

    return(
        <div className="container">
            <div className="header">

            </div>
            <div className="calendar">
                <div className="weekdays">
                    {
                        weekDaysShort.map((item)=><div key={uuidv4()} className="weekdays-item"><span>{item}</span></div>)
                    }
                </div>
                <div className="month">
                    {
                        totalSlots.map((item)=><Days key={uuidv4()} day={item} today={today} getPoints={getPoints}></Days>)
                    }
                </div>
            </div>
            <Popup event={event} handleEventChange={handleEventChange} handleSubmit={handleSubmit}>

            </Popup>
        </div>
    )
}

export default Calendar;