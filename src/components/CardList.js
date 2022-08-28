import React from "react"
import Card from "./Card"

let products = {
    title: 'Total de productos',
    color: 'info', 
    cuantity: 21,
    icon: 'fa-dolly'
}

let users = {
    title:'Total de usuarios', 
    color:'dark', 
    cuantity: '79',
    icon:'fa-user'
}

let category = {
    title:'Total de categorías' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-truck'
}


let cardProps = [products, users, category]

function CardList () {

return(

	<div className="row">

	{

		cardProps.map((data, i) => {

		return	<Card data ={data} key= {i} />

		})

	}

	</div>

    
)
}

export default CardList

