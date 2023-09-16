import { useEffect, useState } from 'react'
import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [apiResponse, setApiResponse] = useState([])
    const navigate = useNavigate();


    const URL = 'https://api.themoviedb.org/3/discover/movie';
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
                setApiResponse(responseAPI.results);
                setLoading(false);

            }

        }

        catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        Api();

    }, [])
    return (
        <>
            <div className="bg-white shadow dark:bg-gray-900">
                {/* Section one */}
                <div className="md:px-4 px-1  min-h-screen" style={{
                    backgroundImage: 'url(/image/Poster.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}>
                    <div className='grid grid-cols-3 gap-[6rem] mb-[7rem] pl-[7rem]'>
                        <div className='text-white-400'>
                            <img src='image/logo.png' />
                        </div>

                        <div>
                            <form className="w-full col-span-4">
                                <label htmlFor="simple-search" className="block mb-2 text-sm font-medium text-white-500 dark:text-white"></label>
                                <div className="relative mt-[4px]">
                                    <input
                                        type="text"
                                        id="simple-search"
                                        className="border text-white text-lg placeholder-white placeholder-opacity-50 rounded-lg focus:ring-white-500 outline-white block w-full md:w-full px-4 py-3 dark:border-white-600 dark:text-white dark:focus:ring-white-500 bg-transparent"
                                        placeholder="What do you want to watch?"
                                        required
                                    />



                                    <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </form>


                        </div>

                        <div className="flex items-center">
                            <h1 className="text-white ml-[9rem] text-3xl md:text-2xl lg:text-2xl ">Sign in</h1>
                            <div className="bg-red-700 rounded-full p-2 ml-2.5">
                                <img src="image/Menu (2).png" alt="" className="w-8 h-8 rounded-full" />
                            </div>

                        </div>


                    </div>

                    <div className='md:mt-0 pl-[7rem] md:ml-0'>
                        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl'>John Wick 3:</h1>
                        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mt-1.5">parabellum</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                            <div className="flex items-center mt-1.5">
                                <img src="image/imdb.png" alt="" className="mr-2" />
                                <h6 className="text-white text-sm md:text-xl lg:text-1xl ml-2">86.0/100</h6>
                                <img src="image/app.png" alt="" className="ml-9" />
                                <h6 className="text-white text-lg md:text-xl lg:text-2xl ml-5">97%</h6>9
                            </div>

                        </div>
                        <h5 className='text-white text-sm md:text-base lg:text-lg mt-1.5'>John Wick is on the run after killing a member <br /> of the international assassins' guild, and with <br />a $14 million price tag on his head, he is the <br /> target of hit men and women everywhere.</h5>

                        <button
                            type='button'
                            className="flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-sm px-5 py-1.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
                        >
                            <img src='image/play.png' className='mr-2' />
                            <span className="text-white text-base md:text-lg lg:text-xl">WATCH TRAILER</span>
                        </button>

                    </div>

                </div>
                <div className='mx-[5rem] mt-[4rem]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="sm:col-start-1 sm:col-end-2">
                            <h1 className="text-2xl font-bold text-dark-400">Featured Movie</h1>
                        </div>
                        <div className="flex items-center justify-center sm:justify-end mt-3 sm:mt-0">
                            <a href="#" className="flex items-center text-red-600 hover:underline ">
                                See More <img src="image/chevron.png" alt="Chevron" className="mr-[4rem]" />
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-8">
                        {apiResponse.slice(0, 10).map((movie: any) => (
                            <Link to={`/movies/${movie.id}`} key={movie.id}>
                                <div className='max-w-md mx-auto bg-white dark:bg-gray-800 overflow-hidden' data-testid='movie-card' >
                                    <img className="h-auto max-w-full" data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                                    <div className="p-0">
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2" data-testid='movie-release-date'>{movie.release_date}</p>

                                        <h6 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" data-testid='movie-title'>{movie.original_title}</h6>

                                        <div className="grid grid-cols-2 gap-5">
                                            <div className="flex items-center">
                                                <img src="image/imdb.png" alt="" className="mr-2" />
                                                <h6>{movie.vote_average}/100</h6>
                                            </div>
                                            <div className="flex items-center">
                                                <img src="image/app.png" alt="" className="mr-2" />
                                                <h6>{movie.vote_average}%</h6>
                                            </div>
                                        </div>

                                        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-2">
                                            Action,Adventure, Horror
                                        </p> */}

                                    </div>
                                </div>
                            </Link>

                        ))

                        }
                    </div>



                </div>

                {/* footer */}


                <footer className='flex justify-center items-center w-full bg-white dark:bg-gray-900 mt-4'>
                    <div className="mx-auto p-2 md:py-8">

                        <div className='grid grid-cols-4 gap-[-20px]'>
                            <div className='mx-[1rem]'>
                                <img src='image/facebook.png' alt='facebook-icon' />
                            </div>

                            <div className='mx-[1rem]'>
                                <img src='image/instagram.png' alt='instagram-icon' />
                            </div>
                            <div className='mx-[1rem]'>
                                <img src='image/twitter.png' alt='twitter-icon' />
                            </div>
                            <div className='mx-[1rem]'>
                                <img src='image/youtube.png' alt='youtube-icon' />
                            </div>

                        </div>

                        <div className='grid grid-cols-3 gap-2 text-sm text-gray-500 text-center dark:text-dark-400 mt-7'>
                            <h3 className='font-bold font-2xl mx-[1rem]'>Conditions of use</h3>
                            <h5 className='font-bold font-2xl'>Privacy & Policy </h5>
                            <h5 className='font-bold font-2xl'>Press Room</h5>
                        </div>
                        <span className="block text-sm text-gray-500 mt-7 sm:text-center sm:text-base dark:text-gray-400 lg:text-lg">
                            ©2021 MovieBox by Adriana Eka Prayudha
                        </span>

                    </div>
                </footer>


            </div>


        </>
    )
}

export default HomePage



//  API KEY `62a7c087bbc317ffb126db480cd71867`

// API READ ACCESS TOKEN `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MmE3YzA4N2JiYzMxN2ZmYjEyNmRiNDgwY2Q3MTg2NyIsInN1YiI6IjY1MDFkMzc0ZGI0ZWQ2MTAzMmE4MDE0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EPFngvlHva6b3L5vxBKMWWTDG3-VW-gQsJKoCnakTu8`