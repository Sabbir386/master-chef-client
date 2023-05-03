import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ChefRecipes = () => {
    const [favourite, setFavourite] = useState(true);
    const [favouriteOne, setFavouriteOne] = useState(true);
    const [favouriteTwo, setFavouriteTwo] = useState(true);
    const { id } = useParams();
    const ChefDeatils = useLoaderData();
    console.log(ChefDeatils);

    const handlefavourite = () => {
        toast('Added Favourite');
        setFavourite(false);
    }
    const handlefavouriteOne = () => {
        toast('Added Favourite');
        setFavouriteOne(false);
    }
    const handlefavouriteTwo = () => {
        toast('Added Favourite');
        setFavouriteTwo(false);
    }

    const { picture, bio, likes, years_of_experience, number_of_recipes, name, recipes } = ChefDeatils;
    return (
        <div className=' w-50 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 '>
            <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="card lg:card-side bg-base-100 shadow-xl items-center justify-center">
                    <figure><img className='h-80' src={picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{bio}</p>
                        <h3>  Number of Experience :  {years_of_experience}</h3>
                        <h3> Number of Recipes : {number_of_recipes}</h3>
                        <h3> Peoples Likes Recipes : {likes}</h3>
                        <div className="card-actions justify-end">

                        </div>
                    </div>
                </div>
            </div>



            <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/3 lg:px-4">
                        <div className="bg-white rounded-lg shadow-lg mb-4">
                            <img className='h-48 rounded-lg w-full object-cover' src={recipes[0].image} alt="Card Image" />
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2"><small className='text-2xl'>Recipe Name :</small>  {recipes[0].name}</h3>
                                <p className="text-gray-600 "><small className='text-xl font-medium'>Ingredients :</small> {
                                    recipes[0]?.ingredients.map(n => <ul>
                                        <li>
                                            {n}
                                        </li>
                                    </ul>)
                                }
                                </p>
                                <p className=' font-medium mt-2'>Cooking Method :
                                    <br />
                                    <small>
                                        {recipes[0]?.cookingMethod}


                                    </small>
                                </p>
                                <p className=' font-medium mt-2'>Ratings :
                                    <small>
                                        {recipes[1]?.ratings}


                                    </small>
                                </p>
                                <button disabled={!favourite} onClick={handlefavourite} className='btn btn-primary text-white  p-2 mt-3'>Add to favourite</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 lg:px-4">
                        <div className="bg-white rounded-lg shadow-lg mb-4">
                            <img className='h-48 rounded-lg w-full object-cover' src={recipes[1].image} alt="Card Image" />
                            <div className="p-4">
                                <h3 className="text-xl  font-medium mb-2"><small className='text-2xl'>Recipe Name :</small>  {recipes[1].name}</h3>
                                <p className="text-gray-600 "><small className='text-xl font-medium'>Ingredients :</small> {
                                    recipes[1]?.ingredients.map(n => <ul>
                                        <li>
                                            {n}
                                        </li>
                                    </ul>)
                                }
                                </p>
                                <p className=' font-medium mt-2'>Cooking Method :
                                    <br />
                                    <small>
                                        {recipes[1]?.cookingMethod}


                                    </small>
                                </p>
                                <p className=' font-medium mt-2'>Ratings :
                                    <small>
                                        {recipes[1]?.ratings}


                                    </small>
                                </p>
                                <button disabled={!favouriteOne} onClick={handlefavouriteOne} className='btn btn-primary text-white  p-2 mt-3'>Add to favourite</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 lg:px-4">
                        <div className="bg-white rounded-lg shadow-lg mb-4">
                            <img className='h-48 rounded-lg w-full object-cover' src={recipes[2].image} alt="Card Image" />
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2"><small className='text-2xl'>Recipe Name :</small>  {recipes[2].name}</h3>
                                <p className="text-gray-600 "><small className='text-xl font-medium'>Ingredients :</small> {
                                    recipes[2]?.ingredients.map(n => <ul>
                                        <li>
                                            {n}
                                        </li>
                                    </ul>)
                                }
                                </p>
                                <p className=' font-medium mt-2'>Cooking Method :
                                    <br />
                                    <small>
                                        {recipes[2]?.cookingMethod}


                                    </small>
                                </p>
                                <p className=' font-medium mt-2'>Ratings :
                                    <small>
                                        {recipes[2]?.ratings}


                                    </small>
                                </p>
                                <button disabled={!favouriteTwo} onClick={handlefavouriteTwo} className='btn btn-primary text-white  p-2 mt-3'>Add to favourite</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ChefRecipes;