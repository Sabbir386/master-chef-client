import React from 'react';
import { Link } from 'react-router-dom';

const ChefMaster = ({ data }) => {
    const { id, name, experience, recipes, likes } = data;

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary">
                        <Link to={`/recepies/${id}`} className='text-black'>View Recipes</Link>
                    </button>

                </div>
            </div>
        </div>

    );
};

export default ChefMaster;