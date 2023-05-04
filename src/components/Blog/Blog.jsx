import React from 'react';

const Blog = () => {
    return (
        <div className=' px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
            <div className=' text-center my-3'>
                <h1 className='text-center my-3'><span className='text-xl font-semibold'>Question 1 : </span>: Tell us the differences between uncontrolled and controlled components ?</h1>
                <p className='text-center'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div className='text-center my-3'>
                <h1 className='text-center my-3'><span className='text-xl font-semibold'>Question 2 : </span>: How to validate React props using PropTypes ?</h1>
                <p className='text-center'>PropTypes.any : The prop can be of any data type.
                    PropTypes.bool : The prop should be a Boolean.
                    PropTypes.number : The prop should be a number.
                    PropTypes.string : The prop should be a string.
                    PropTypes.func : The prop should be a function.
                    PropTypes.array : The prop should be an array.</p>
            </div>
            <div className=' text-center my-3'>
                <h1 className='text-center my-3'><span className='text-xl font-semibold'>Question 3 : </span>:Tell us the difference between nodejs and express js ?</h1>
                <p className='text-center'>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
            </div>
            <div className=' text-center my-3'>
                <h1 className='text-center my-3'><span className='text-xl font-semibold'>Question 4 : </span>: What is a custom hook, and why will you create a custom hook ?</h1>
                <p className='text-center'>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
            <button>

            </button>
        </div >
    );
};

export default Blog;