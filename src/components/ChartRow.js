import React from "react";

function ChartRow (props) {
return(

    <React.Fragment>

        <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.detail}</td> 
        </tr>


    </React.Fragment>


)
}

export default ChartRow