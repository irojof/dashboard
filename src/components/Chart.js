import React, { Component } from 'react';
import ChartRow from './ChartRow';


class Chart extends Component{
    constructor(){
        super()
        this.state = {

            productsList: []

        }
    }

componentDidMount(){

    fetch("http://localhost:3000/api/products")
    .then( res => res.json())
    .then(products => {

        this.setState ({productsList:products.data})

    console.log("🚀 ~ file: Chart.js ~ line 19 ~ Chart ~ componentDidMount ~ data ", products )

   
    })

    .catch(error => console.log(error))

}


render(){
    return(

        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Detalle</th>
                                
                            </tr>
                        </thead>
                        <tbody>


                    { this.state.productsList ? this.state.productsList.map ((row, i) =>

                        <ChartRow {...row} key={i}  />) : <div> Loading... </div>
                        
                    }

                    

                        </tbody>
                    </table>
                </div>
            </div>
        </div>



    )
}
}

export default Chart