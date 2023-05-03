import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
    const { id } = useParams();
    const ChefDeatils = useLoaderData();
    console.log(ChefDeatils);

    const { picture, bio, likes, years_of_experience, number_of_recipes, name } = ChefDeatils;
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
                <div class="flex flex-wrap">
                    <div class="w-full md:w-1/3 lg:px-4">
                        <div class="bg-white rounded-lg shadow-lg mb-4">
                            <img src="https://via.placeholder.com/640x480.png/0099CC?text=Card+Image" alt="Card Image" class="w-full rounded-t-lg" />
                            <div class="p-4">
                                <h3 class="text-lg font-medium mb-2">Card Title</h3>
                                <p class="text-gray-600">Card Description</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:px-4">
                        <div class="bg-white rounded-lg shadow-lg mb-4">
                            <img src="https://via.placeholder.com/640x480.png/0099CC?text=Card+Image" alt="Card Image" class="w-full rounded-t-lg" />
                            <div class="p-4">
                                <h3 class="text-lg font-medium mb-2">Card Title</h3>
                                <p class="text-gray-600">Card Description</p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 lg:px-4">
                        <div class="bg-white rounded-lg shadow-lg mb-4">
                            <img src="https://via.placeholder.com/640x480.png/0099CC?text=Card+Image" alt="Card Image" class="w-full rounded-t-lg" />
                            <div class="p-4">
                                <h3 class="text-lg font-medium mb-2">Card Title</h3>
                                <p class="text-gray-600">Card Description</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default ChefRecipes;