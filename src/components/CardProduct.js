import React from "react";
import { Link } from "react-router-dom";

function CardProduct (props){
return(

    <div className="card-body">
    <div className="text-center">
        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={props.image} alt={props.name}/>
    </div>
    <p>{props.description}</p>
    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle de producto</a>
</div>

)
}

export default CardProduct