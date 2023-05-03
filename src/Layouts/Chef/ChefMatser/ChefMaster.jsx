import React from 'react';
import { Link } from 'react-router-dom';

const ChefMaster = ({ data }) => {
    const { id, name, years_of_experience, number_of_recipes, likes, picture } = data;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl h-28 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <h3>  Number of Experience :  {years_of_experience}</h3>
                <h3> Number of Recipes : {number_of_recipes}</h3>
                <h3> Peoples Likes Recipes : {likes}</h3>
                <div className="card-actions">
                    {/* <button className="btn btn-primary">
                        <Link to={`/recepies/${id}`} className='text-white'>View Recipes</Link>
                    </button> */}

                    <Link to={`/recepies/${id}`} className='text-white'><button className="btn btn-primary">
                        View Recipes
                    </button></Link>

                </div>
            </div>
        </div>

    );
};

export default ChefMaster;