import React from "react"
import logo from "../assets/images/logo-DH.png"
import {Link, Route, Switch } from 'react-router-dom'
import ContentWarapper from "./ContentWrapper"
import LastMovie from "./LastMovie"
import CategoryInDb from "./CategoryInDb"
import CardList from "./CardList"
import Chart from "./Chart"
import NotFound from "./NotFound"
import SearchMovies from "./SearchMovies"


function SideBar () {

    return (

		<>

		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src= {logo} alt="Giants Market" />
				</div>
			</a>

			<hr className="sidebar-divider my-0"/>

			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard - Giants Market</span></Link>
			</li>

			<hr className="sidebar-divider"/>

			<div className="sidebar-heading">Actions</div>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-user">
					<i className="fas fa-fw fa-user"></i>
					<span>Ultimo usuario</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/last-product">
					<i className="fas fa-fw fa-dolly"></i>
					<span>Ultimo producto</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link collapsed" to="/category-list">
					<i className="fas fa-fw fa-folder"></i>
					<span>Lista de categorias</span>
				</Link>
			</li>



			<li className="nav-item">
				<Link className="nav-link" to="/table">
					<i className="fas fa-fw fa-table"></i>
					<span>Lista de productos</span>
				</Link>
			</li>

			<hr className="sidebar-divider d-none d-md-block"/>
		</ul>

		<Switch>

			<Route exact={true} path="/"> <ContentWarapper /></Route>
			<Route  path="/last-movie"> <LastMovie /></Route>
			<Route  path="/category-list"> <CategoryInDb /> </Route>
			<Route  path="/charts"> <CardList /> </Route>
			<Route  path="/table"> <Chart /> </Route>
			<Route  path="/search"> <SearchMovies /> </Route>
			{/* <Route  path="category/:id"> <CategoryDetail /></Route> */}
			<Route path="*"> <NotFound /> </Route>

		</Switch>

	</>

		
    )
}

export default SideBar