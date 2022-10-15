import React from 'react'

const studentGrade = () => {

    const tableData = [
        {
            title: "Grading Community",
            description: "Web Development Assignment",
            range: '0-30',
            grade: '25.0',
        },
        {
            title: "Grading Community",
            description: "Web Development Assignment",
            range: '0-30',
            grade: '25.0',
        },
        {
            title: "Grading Community",
            description: "Web Development Assignment",
            range: '0-30',
            grade: '25.0',
        },
        {
            title: "Grading Community",
            description: "Web Development Assignment",
            range: '0-30',
            grade: '25.0',
        },
    ]

  return (
    <>
        {/* NavBar */}
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
                <li className='mx-4 ' ><a href="/studentModule">Course</a> </li>
                <li className='mx-4 border-b' ><a href="/studentGrade">Grade</a> </li>
            </ul>
        </div>
        {/* Container */}
        <div className='w-max-w-[1000px] mx-auto' >
            <h1 className='text-[30px] text-left font-bold px-48 py-8' >12345 - Integrative Technology 2018/2019</h1>
            {/* <img className='object-cover w-[1000px] h-[300px] mx-auto' src={backImg} alt='Background Img' /> */}
        </div>

        {/* Grade */}
        <div className='max-w-[1000px] mx-auto my-4 py-4 pb-8 px-8 bg-gray-100 rounded-md hover:drop-shadow-lg text-left' >
            <table className='w-full' >
                <tr>
                    <th>Grade Item</th>
                    <th>Range</th>
                    <th>Grade</th>
                </tr>
                {tableData.map(data => 
                    <tr className='bg-white border-b ' >
                    <td className='px-4 py-2' >
                        <div>
                            <p>{data.title}</p>
                            <p>{data.description}</p>
                        </div>
                    </td>
                    <td>{data.range}</td>
                    <td>{data.grade}</td>
                </tr>
                )}   
            </table>
        </div>
    </>
  )
}

export default studentGrade