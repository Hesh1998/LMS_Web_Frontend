import React from 'react'
import { Link } from 'react-router-dom'

const LecturerHome = () => {

    const courseData = [
        {
            module: '12345 - Integrative Technology 2018/2019',
            img: 'https://imgs.search.brave.com/9_lG4xPYXcH2i2VTAyjIqUtxIJPYrq6KlnqdkvxAM7c/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/S1otdkpJR2xuNUVr/SF9JeFNjZ0RRSGFF/NyZwaWQ9QXBp',
            semester: 1,
            year: 2,
        },
        {
            module: 'INTE 31253 - Software Engineering Concepts 2018/2019',
            img: 'https://imgs.search.brave.com/FF0onte1Sbt77m7eR82PWyZO0BRHG8q9PN4ttgdZ4tE/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/Ync0dk0wU0VkTWNE/OG1vVUpIMmdRSGFG/aiZwaWQ9QXBp',
            semester: 1,
            year: 2,
        },
        {
            module: 'INTE 31262 - Advanced Web Application 2018/2019',
            img: 'https://imgs.search.brave.com/9_lG4xPYXcH2i2VTAyjIqUtxIJPYrq6KlnqdkvxAM7c/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/S1otdkpJR2xuNUVr/SF9JeFNjZ0RRSGFF/NyZwaWQ9QXBp',
            semester: 1,
            year: 2,
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
      <div className="w-full  max-w-[1000px] mx-auto text-left " >
            <div className="flex font-bold text-[30px] my-8">
                <h1 >Welcome, </h1>
                <h1>Mr. Heshan Nanayakkara</h1>
            </div>
            <div className="px-8 py-4 bg-gray-100 rounded-md mb-20" >
                <div className="border-b border-gray-500 py-4">
                    <p className="font-bold text-[20px] " >Your Courses</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4" >
                    
                    {courseData.map((course, index) => 
                        <Link to='/lecturerCourses'>
                            <div key={index} className="mt-4 rounded-lg bg-white drop-shadow-sm hover:drop-shadow-2xl cursor-pointer" >
                                <div className='pb-8' >
                                    <img className="object-cover h-[200px] w-full" src={course.img} alt="Module01" />
                                    <p className="text-center px-2 pt-4 pb-8 font-semibold " >{course.module}</p>
                                    <div className="ml-4 py-2 pb-2 w-[130px] text-[12px] bg-[#7fffd4] rounded-md " >
                                        <p className="text-center " >Semester 0{course.semester}, Year 0{course.year}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                    
                </div>
            </div>
        </div>
      </>
  )
}

export default LecturerHome