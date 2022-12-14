import React from "react";
import { Component } from "react";
import CardProduct from "./CardProduct";
class LastProduct extends Component{

        constructor(){
            super()
            this.state = {
    
                productsList: []
    
            }
        }
    
    componentDidMount(){
    
        fetch("http://localhost:3000/api/products/last-product")

        .then(respuesta => {

            return respuesta.json()})
            
            .then(products =>{
    
            this.setState({productsList: products.data})
            console.log(this.state.productsList)
    
            })
    
    
    }


render(){
	return(
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último producto creado
                </h5>
            </div>
{this.state.productsList.map((products, i) => {

return    <CardProduct {...products} key={i} />
})
}
        </div>
    </div>
    
    )
}
}

export default LastProduct