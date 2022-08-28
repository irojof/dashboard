import React from "react";

class LastProduct extends Component{

        constructor(){
            super()
            this.state = {
    
                productsList: []
    
            }
        }
    
    componentDidMount(){
    
        fetch("http://localhost:3001/api/products/")
        .then( res => res.json())
        .then(products => {
    
            this.setState ({productsList:products.data})
    
        console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", products )
    
       
        })
    
        .catch(error => console.log(error))
    
    }


render(){
	return(

            <div className="col-sm-6 col-md-3 my-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img 
                                className="img-fluid px-3 px-sm-4 mt-3 mb-4" 
                                src={product.image}
                                alt={product.name} 
                                style={{ width: '90%', height: '400px', objectFit: 'cover' }} 
                            />
                        </div>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
    )
}
}

export default LastProduct