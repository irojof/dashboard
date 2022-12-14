import React from "react"
import CardList from "./CardList"
import CategoryInDb from "./CategoryInDb"
import SearchMovies from "./SearchMovies"
// import LastUser from "./LastUser"
 import LastProduct from "./LastProduct"
import LastUser from "./LastUser"
			
function ContentRowTop (){
    
    return(
            
            <div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Giants Market Dashboard</h1>
					</div>
			        <CardList />
					<div className="row">
					{/* <SearchMovies /> */}
					<LastProduct />
					<CategoryInDb />
					</div>
			</div>


    )
}

export default ContentRowTop