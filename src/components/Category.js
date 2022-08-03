import React from 'react'
import Categories from './../data/Data';

const Category = ({category,setCategory}) => {
 
    return(
        <select 
            className='category' 
            onChange={ (e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            {Categories.map( (cat) => 
            (<option key={cat.value} value={cat.value} >{cat.category}</option>)
               
            )}
        </select>
        );
}

export default Category;