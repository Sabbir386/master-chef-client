import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const { id } = useParams();
    const ChefDeatils = useLoaderData();
    console.log(ChefDeatils);
    return (
        <div>
            <h2>chef recepes page</h2>

        </div>
    );
};

export default ChefRecipes;