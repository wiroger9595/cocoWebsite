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
        extraSugar,
        health_cerificate
    } = context;

    //get unique types
    let types = getUnique(products, "type");

    //get unique fruit_types
    let fruit_types = getUnique(products, "fruit_type");

    //add all
    //add all
    types = ["All", ...types];

    //add all fruit
    fruit_types = ['All', ...fruit_types];

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
            <div className="form-group">
                <label htmlFor="calories">
                    Calories ${calories}
                </label>
                <input 
                    type="range" 
                    name ="calories" 
                    min={minCalories} 
                    max={maxCalories} 
                    id="calories" 
                    value={calories} 
                    onChange={handleChange} className="form-control" />
                
            </div>

            {/*select calories */ }

 {/*-------------------------------------------------  */}

            {/*select size */ }
            <div className="form-group">
                <label htmlFor="calories">
                    Product's size 
                </label>
                <div className="size-inputs">
                    <input 
                        type="number" 
                        name="minSize" 
                        id="size" 
                        value={minSize} 
                        onChange={handleChange} className="size-input" />
                
                    <input 
                        type="number" 
                        name="maxSize" 
                        id="size" 
                        value={maxSize} 
                        onChange={handleChange} className="size-input" />
                </div>
                
            </div>

            {/*select size */ }

 {/*-------------------------------------------------  */}

            {/*   extra  sugar */ }
            <div className = "form-group">
                <div className="single-extra">
                    <input type="checkbox" name="extraSugar" id="extraSugar" checked={extraSugar} onChange={handleChange}/>

                    <label htmlFor="extraSugar">Non Sugar</label>
                </div>
            
            
            {/*   extra  sugar */ }
 {/*-------------------------------------------------  */}

             {/*   extra  food certication */ }
                <div className="single-extra">
                    <input type="checkbox" name="health_cerificate" id="health_cerificate" checked={health_cerificate} onChange={handleChange}/>

                    <label htmlFor="extraSugar">Health Creticate</label>
                </div>
            </div>
            
            {/*   extra  food certication */ }
        </form>
    </section>
    );
}