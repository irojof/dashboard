import React from "react";
import { Link } from "react-router-dom";

function CardUser (props){
return(

    <div className="card-body">
    <div className="text-center">
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.image} alt={props.first_name}/>
    </div>
    <p>{props.first_name}</p>
    <p>{props.email}</p>
    <p>{props.date}</p>
    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de Usuario</a>
</div>

)
}

export default CardUser