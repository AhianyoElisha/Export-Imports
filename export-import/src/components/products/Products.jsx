import React from 'react'
import Data from "./Data"
import "./products.css"

const Products = () => {
  return (
    <section className="products container section">
        <div className="grey__area">
            <div className="center__header">
                <h2 className="section__title">Products</h2>
            </div>
            <h1 className="products__title">Featured Products</h1>
            <div className="products__container">
                {Data.map(({id, image, title, location})=> {
                    return (
                        <div className="product__card" key={id}>
                            <img src=0" alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Products