import React from "react";
import { Component } from "react";
import CardProduct from "./CardProduct";
import CardUser from "./CardUser";
class LastUser extends Component{

        constructor(){
            super()
            this.state = {
    
                usersList: []
    
            }
        }
    
    componentDidMount(){
    
        fetch("http://localhost:3000/api/users/last-user")

        .then(respuesta => {

            return respuesta.json()})
            
            .then(users =>{
    
            this.setState({usersList: users.data})
            console.log(this.state.usersList)
    
            })
    
    
    }


render(){
	return(
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último usuario creado
                </h5>
            </div>
{this.state.usersList.map((users, i) => {

return    <CardUser {...users} key={i} />
})
}
        </div>
    </div>
    
    )
}
}

export default LastUser