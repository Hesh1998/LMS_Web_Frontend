import React from 'react'

const studentModule = (props) => {

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
        }
    ]
    const backImg = 'https://imgs.search.brave.com/cnrBYZfDyycK4Palz1bD85doe4-k22lVz3nE_DBjk_8/rs:fit:960:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/T3RGVmRZdGpFTnVP/eE4zUDZ0bk1BSGFE/cSZwaWQ9QXBp'

  return (
    <>
        {/* Main NavBar */}
        <div className="Navbar">
            <nav class="nav-menu">
            <h2>Learning Management System</h2>
            <ul class="menu">
                <li>
                <a href="/">Home</a>
                </li>
                <li>
                <a className="border-b" href="/courses">Courses</a>
                </li>
                <li>
                <a href="#">Profile</a>
                </li>
            </ul>

            <div className="serach">
                <input
                type="text"
                name="search"
                className="search"
                placeholder="Search here.."
                />
                <button type="submit" class="searchButton">
                <i class="fa fa-search"></i>
                </button>
            </div>
            </nav>
        </div>

        {/* Sub NavBar */}
        <div className='bg-[#100f10] w-full h-[50px]  justify-left text-white px-40  ' >
            <ul className='flex pt-2' >
                <li className='mx-4 border-b ' ><a href="/studentModule">Course</a> </li>
                <li className='mx-4' ><a href="/studentGrade">Grade</a> </li>
            </ul>
        </div>

        {/* Container */}
        <div className='w-max-w-[1000px] mx-auto h-[400px]' >
            <h1 className='text-[30px] text-left font-bold px-48 py-8' >12345 - Integrative Technology 2018/2019</h1>
            <img className='object-cover w-[1000px] h-[300px] mx-auto' src={backImg} alt='Background Img' />
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
        </div>
        )}
        
    </>
  )
}

export default studentModule