import React, {Component} from "react";
import Category from "./Category";

class CategoryInDb extends Component {
    
	constructor(){
		super()

		this.state = {

			categoryList : []

		}
	}

	componentDidMount() {

		fetch("http://localhost:3001/api/category/")

		.then(respuesta => {
				
		return respuesta.json()})
		
		.then(category =>{

		this.setState({categoryList: category.data})

        console.log("🚀 ~ file: CategoryInDb.js ~ line 27 ~ CategoryInDb ~ componentDidMount ~ category.data}", category.data)

		})



	}

	cambiarBackground(){
		let background = document.querySelector(".category-background")
		background.classList.add('bg-secondary')
	}

	render(){
	return(

        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 onMouseOver = {()=> this.cambiarBackground()} className="m-0 font-weight-bold text-gray-800">Category in Data Base</h5>
								</div>
								<div className="card-body category-background">
									<div className="row">

										{this.state.categoryList.map((category, i) => {

											return  <Category {...category} key={i} />
										})
										}
									</div>
								</div>
							</div>
						</div>
					

    )
}
}
export default CategoryInDb