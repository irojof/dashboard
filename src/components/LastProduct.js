import React from "react";
import { Component } from "react";
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
        
// if(product != undefined)
    <div className="col-sm-6 col-md-3 my-4">
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">{ this.state.productsList ? this.state.productsList.name : <div>'Loading…'</div>}
</h5>
        </div>
        <div className="card-body">
            <div className="text-center">
                <img 
                    className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                    src={ this.state.productsList ? this.state.productsList.image : <div>'Loading…'</div>}
                    alt={ this.state.productsList ? this.state.productsList.name : <div>'Loading…'</div>} 
                    style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
                />
            </div>
            <p>{this.state.productsList ? this.state.productsList.price : <div>'Loading…'</div>}</p>
        </div>
    </div>
</div>
// else {
    
// }

    )
}
}

export default LastProduct