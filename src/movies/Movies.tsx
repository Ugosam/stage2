import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


const Movies = () => {
    const [loading, setLoading] = React.useState(false);
    const [apiResponse, setApiResponse] = React.useState<any>()
    const navigate = useNavigate();
    const { id } = useParams();

    interface movieData {
        id: number,

        title: string,

        poster_path: string,

        country: string,

        release_date: string,

        vote_average: number,

        genre_ids: number[],

        overview: string,

        original_title: string


    }


    const URL = `https://api.themoviedb.org/3/movie/${id}`;
    // const URLB = `https://api.themoviedb.org/3/movie/${id}/videos`;
    
    const Api = async () => {
        setLoading(true);
        try {
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmE3YzA4N2JiYzMxN2ZmYjEyNmRiNDgwY2Q3MTg2NyIsInN1YiI6IjY1MDFkMzc0ZGI0ZWQ2MTAzMmE4MDE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPFngvlHva6b3L5vxBKMWWTDG3-VW-gQsJKoCnakTu8`
                }
            })

            const responseAPI = await response.json();
            console.log('response', responseAPI);
            if (response.ok) {
                setApiResponse(responseAPI);
                console.log('out', apiResponse );
                setLoading(false);
            }
        }

        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        Api();

    }, [id])


    const releaseDate = new Date(apiResponse?.release_date);

    // Get the year
    const year = releaseDate.getFullYear();

    // Given time in minutes
    const totalMinutes = apiResponse?.runtime;

    // Calculate hours and minutes
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    const result = `${hours}h ${minutes}m`

    console.log(`${hours} hours ${minutes} minutes`);
    // This will log: "1 hours 42 minutes"


    return (
        <>
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 rounded-br-sm" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">

                        <li className='mb-[6rem] flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500'>

                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500">

                                <img src='image/tv.png' />
                                <span className="ml-3">MovieBox</span>
                            </a>


                        </li>
                        <Link to={`/`}>
                            <li className=''>

                                <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-red-700 group hover:text-red-500">

                                    <img src='image/home.png' />
                                    <span className="ml-3">Home</span>
                                </a>

                            </li>
                        </Link>
                        <li >
                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500 ">

                                <img src='image/Movie Projector.png' />
                                <span className="ml-3 ">Movies</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500">

                                <img src='image/TV Show.png' />
                                <span className="ml-3">Tv Series</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500">

                                <img src='image/Calendar.png' />
                                <span className="ml-3 ">Upcoming</span>
                            </a>
                        </li>

                        <li>
                            {/* <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg--100 dark:hover:bg-gray-700 group"> */}

                            <div className="max-w-sm p-6 bg-red border border-red-500 rounded-lg shadow dark:bg-gray-800 dark:border-red-700">

                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Play movie quizes <br /> and earn <br />free tickets</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-8 border-rounded text-red-300">
                                    Start Playing

                                </a>
                            </div>

                            {/* </a> */}
                        </li>

                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-100 dark:hover:bg-gray-700 group hover:text-red-500">

                                <img src='image/Logout (1).png' />
                                <span className="ml-3">Log out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div>
                    <video controls className='w-[100vw] rounded-lg' height='20%' >
                        <source src="https://www.youtube.com/watch?v=uDCBSnWkuH0" type="video/mp4" />

                    </video>

                </div>
                <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-12 w-[50vw]' >



                    <div className='mr-8 w-[25vw]' >

                        <h4 className='font' data-testid='movie-title movie-release-date movie-runtime'>{apiResponse?.original_title}:{year}.PG-13.{result} <button type='button' className='text-red-500 mr-4'>Action</button> <button type='button' className='text-red-500'>Drama</button>
                        </h4>


                        <p className='mt-2' data-testid='movie-overview'>{apiResponse?.overview}</p>
                        {/* <hr /> */}
                        <h3 className='mt-1 ' style={{ clear: 'left' }}> Director :   <span className='text-red-600'>JOY</span> </h3>
                        <h3 className='mt-1 ' style={{ clear: 'left' }}> Writers:     <span className='text-red-600'>JOY</span> </h3>
                        <h3 className='mt-1 ' style={{ clear: 'left' }}> Stars :      <span className='text-red-600'>JOY</span> </h3>
                        <button type="button" className="text-red-300 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium border  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 flex items-center hover:text-white mt-3" >

                            <span >Top rate movie #</span>

                        </button>
                        {/* <hr /> */}
                        {/* <hr /> */}
                    </div>



                    <div className='mt-1 w-[25vw]' >
                        <img src="image/Star.png" className='' alt="" />{apiResponse?.vote_average}|350K
                        <button type="button" className="text-red-300 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium border  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 flex items-center hover:text-white mt-3" >
                            <img src='image/Tickets.png' alt='' className='mr-4' />
                            <span >See Showtimes</span>

                        </button>
                        <button type="button" className="mt-3 text-black-300 bg-gray-300 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium border  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 flex items-center hover:text-white" >
                            <img src='image/List.png' alt='' className='mr-4' />
                            <span >More Watch Options</span>

                        </button>
                        <img src="imagec/Group.png" alt="" className='mt-3' />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Movies