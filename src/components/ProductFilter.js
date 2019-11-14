import React from 'react';
import {useContext} from 'react';
import Title from './Title'; 
import {ProductContext} from '../context';

//get all unique values
// const getUnique = (items, value) => {
//     return [...new Set(items.map(item => item[value]))]
// }

export default function ProudctFilter({products}) {
    const context = useContext(ProductContext);

    const {
        handleChange, 
        type, 
        capacity, 
        calories, 
        minCalories, 
        maxCalories, 
        minSize, 
        maxSize, 
        extraSugar
    } = context;

    //get unique types
    // let types = getUnique(products, "type");
    // add all
    // types = ["all", ...types];

    // types = types.map((item, index) => {
    //     return (
    //         <option value={item} key={index}>
    //             {item}
    //         </option>
    //     )
    // })


    return (
     <section className="filter-container"> 
        <Title title ="search products" />
        <form className = "filter-form">


            {/*select type */ }
            <div className = "form-group">
                <label htmlFor ="type">Item Type</label>
                <select 
                name="type" 
                id="type" 
                value={type} 
                className="form-control"
                onChange={handleChange}>

                    <option value="Drink">Drink</option>
                </select>
            </div>
            {/*select type */ }

            {/*select guests */ }
            <div className = "form-group">
                <label htmlFor ="capacity">Guests</label>
                <select 
                name="capacity" 
                id="capacity" 
                value={capacity} 
                className="form-control"
                onChange={handleChange}>

                    {/* {types} */}
                </select>
            </div>
            
            {/*select guests */ }
        </form>
    </section>
    );
}