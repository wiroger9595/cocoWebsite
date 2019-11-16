import React from 'react';
import {useContext} from 'react';
import Title from './Title'; 
import {ProductContext} from '../context';

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function ProudctFilter({products}) {
    const context = useContext(ProductContext);

    const {
        handleChange, 
        type,
        fruit_type, 
        capacity, 
        calories, 
        minCalories, 
        maxCalories, 
        minSize, 
        maxSize, 
        extraSugar
    } = context;

    //get unique types
    let types = getUnique(products, "type");

    //get unique fruit_types
    let fruit_types = getUnique(products, "fruit_type");

    //add all
    types = ["all", ...types];

    //add all fruit
    fruit_types = ['all', ...fruit_types];

    //item mapping code here
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });

    //fruit mapping code here
    fruit_types = fruit_types.map((item, index) => {
        return (
            <option value={item} key={index}>
                {item}
            </option>
        );
    });


    //////////////////////////////////////////////////////
    //let fruitHere = getUnique(products, 'fruit_type');
    // fruitHere = fruitHere.map((item,index) => {
    //     return <option key={index} value={item}>
    //         {item}
    //     </option>
    // })
    return (
     <section className="filter-container"> 
        <Title title ="search products" />
        <form className = "filter-form">

 {/*-------------------------------------------------  */}
            {/*select type */ }
            <div className = "form-group">
                <label htmlFor ="type">Item Type</label>
                <select 
                name="type" 
                id="type" 
                value={type} 
                className="form-control"
                onChange={handleChange}>

                    {types}
                </select>
            </div>
            {/*select type */ }
 {/*-------------------------------------------------  */}

            {/*select guests */ }
            <div className = "form-group">
                <label htmlFor ="fruit_type">Fruit Type</label>
                <select 
                name="fruit_type" 
                id="fruit_type" 
                value={fruit_type} 
                className="form-control"
                onChange={handleChange}>

                {fruit_types}
                </select>
            </div>
            
            {/*select guests */ }
 {/*-------------------------------------------------  */}

            {/*select calories */ }
            {/* <div className="form-group">
                <label htmlFor="calories">
                    Product's calories ${calories}
                </label>
                <input type="range" name ="calories" min={minCalories} max={maxCalories} id="calories" value={calories} onChange={handleChange} className="form-control" />
                
            </div> */}

            {/*select calories */ }


        </form>
    </section>
    );
}