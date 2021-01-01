import React from 'react';
import './calendar.css';

function Popup(props){

    const {title,description,time:{start,end}} = props.event;

    return(
        <div className="popup-container">
            <div className="popup-header">
                <span className="popup-close">&#10006;</span>
            </div>
            <div className="popup-body">
                <form>
                    <div className="input-container">
                        <input type="text" name="title" value={title} placeholder="Add Title" onChange={props.handleEventChange}></input>
                    </div>
                    <div className="textarea-container">
                        <textarea name="description" value={description} placeholder="Description" onChange={props.handleEventChange}></textarea>
                    </div>
                    <div className="button-container">
                        <button onClick={props.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Popup;