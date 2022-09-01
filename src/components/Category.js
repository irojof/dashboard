import React from "react";
import { Link } from "react-router-dom";

function Category (props){
return(

            <div className="col-lg-6 mb-4">
                <div className="card bg-light text-black shadow">
                    <div className="card-body">
                    {props.category_name} : {props.category_name=='unico'?10:20}
                    </div>
                </div>
            </div>

)
}

export default Category