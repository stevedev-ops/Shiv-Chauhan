import React from 'react'
import Card from './Card'

const Projects = () => {
    return (
        <div className='flex flex-col gap-10 mt-7' id='projects'>
            <hr />
            <div className='projects uppercase text-3xl px-24 mb-5 mt-24'>
                Featured Projects
            </div>

            <div className='projectCards flex justify-center px-36'>
                <Card />
            </div>
            <div className='flex justify-center mb-20'>
                {/* <a href="">
                    <button className='view_all border  px-5 w-58 text-lg rounded uppercase'>View All Projects</button>
                </a> */}
            </div>
            <hr />
        </div>
    )
}

export default Projects
