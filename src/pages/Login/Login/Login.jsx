import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/Bs';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
    const auth = getAuth(app);
    const navlink = useNavigate();


    const provider = new GoogleAuthProvider();

    const gitHubProvider = new GithubAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                navlink('/');


            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                navigate('/');
                console.log(loggedInUser);

            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const [loginError, setLoginError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);
    const from = location.state?.from?.pathname || '/';
    const handleLogin = event => {
        event.preventDefault();
        const htmlForm = event.target;
        const email = htmlForm.email.value;
        const password = htmlForm.password.value;
        // validate
        setLoginError('');


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                toast('successfully Login');
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message);

            })
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Input email" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="input Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">htmlForgot password?</a>
                                </div>
                                <button className='btn btn-primary p-3'>Login</button>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <span className="font-medium text-primary-600 hover:underline dark:text-primary-600">
                                        <Link to="/register">Register</Link>
                                    </span>
                                </p>
                            </form>
                            <p className='text-red-500'>{loginError}</p>
                        </div>
                    </div>
                </div>

                {/* login with google and github */}
                <div className='text-center mb-5'>
                    <h2 className='text-xl font-medium mb-3'>Login with :</h2>
                    <button onClick={handleGoogleSignIn} className="btn-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-3"><FcGoogle className='me-3'></FcGoogle>  Sign in Google</button>
                    <br />
                    <button onClick={handleGithubLogin} className="btn-primary btn btn-xs sm:btn-sm md:btn-md lg:btn-lg mb-3"><BsGithub className='me-3'></BsGithub> Sign in Github</button>

                </div>
            </section >


        </>
    );
};

export default Login;