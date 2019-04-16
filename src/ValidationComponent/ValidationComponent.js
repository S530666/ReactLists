import React from 'react';
const validationcomponent = (props) => {
    return (
        <div>
            {props.length <=5 ?
                <p> Text too short </p>
                : <p> Text long enough </p>
                }
        </div>
    )
}
export default validationcomponent;