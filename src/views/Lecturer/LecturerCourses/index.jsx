import React from 'react'
import { BiEdit } from 'react-icons/bi';

const LecturerCourses = () => {

    const moduledata = [
        {
            tasks: [
                {
                    title: 'Session 1- Lecture Slides- 5th July 2022 - File PDF document Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Recording- Session 1- 5th July 2022 - File Video file (MP4) Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
            ]
        },
        {
            tasks: [
                {
                    title: 'Session 3- Lecture Slides- 19th July 2022 - File PDF document Uploaded ',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Web Application Tutorial',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Recording- Session 1- 5th July 2022 - File Video file (MP4) Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                }
            ]
        },
        {
            tasks: [
                {
                    title: 'Session 1- Lecture Slides- 5th July 2022 - File PDF document Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Recording- Session 1- 5th July 2022 - File Video file (MP4) Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
            ]
        },
        {
            tasks: [
                {
                    title: 'Session 3- Lecture Slides- 19th July 2022 - File PDF document Uploaded ',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Web Application Tutorial',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                },
                {
                    title: 'Recording- Session 1- 5th July 2022 - File Video file (MP4) Uploaded',
                    link: 'https://www.youtube.com/watch?v=jlZBOyINeFs&list=RD2D83YdOKM_E&index=2'
                }
            ]
        },
        
    ]

  return (
    <>
        <div className="Navbar">
        <nav class="nav-menu px-12 ">
          <h2>Learning Management System</h2>

          <ul class="menu">
            <li>
              <a href="/lecturerHome">Home</a>
            </li>
            <li>
              <a href="/studentCourses">Courses</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>

          {/* <div className="search">
            <input
              type="text"
              name="search"
              className="search"
              placeholder="Search here.."
            />
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
            </button>
          </div> */}
        </nav>
      </div>
        {/* Container */}
        <div className='w-max-w-[1000px] mx-auto' >
            <h1 className='text-[30px] text-left font-bold px-48 py-8' >12345 - Integrative Technology 2018/2019</h1>
        </div>
        <div className="flex justify-end">
            <button className='mx-60 bg-[#7fffd4] px-4 py-2 rounded-xl' >Add New</button>
        </div>

        {/* Week */}
        {moduledata.map((data, index) => 
            <div className='max-w-[1000px] mx-auto my-4 py-4 pb-8 px-8 bg-gray-100 rounded-md hover:drop-shadow-lg text-left' >
            <h2 className='text-[20px] font-bold' >Week {index+1}</h2>
            <ul className='pl-8 pt-4' >
                {data.tasks.map((tasks, number) => 
                    <li className='py-2' ><a  className='' href={tasks.link}>{tasks.title}</a></li>
                )}
            </ul>
            <div className='flex justify-end cursor-pointer ' >
                <BiEdit  />
            </div>
            </div>
        )}
    </>

  )
}

export default LecturerCourses