import { React, Component } from "react";
import loginImg from '../assets/loginImg.png';
import Register from "./Register";

class Login extends Component {
  render() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block h-full">
                <img className="h-screen w-full" src={loginImg} alt="login Image "/>
            </div>
      
            <div className="bg-gray-800 flex flex-col justify-center">
                <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <h2 className="text-4xl dark:text-white font-bold text-center">Login</h2>
                    <div className="flex flex-col text-gray-400 py-2 text-left">
                        <label>Email</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="email"/>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2 text-left">
                        <label>Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password"/>
                    </div>
                    <button className="w-full my-5 py-2 bg-teal-500 shadow-lg hover:shadow-teal-500/40 text-white font-semibold rounded-lg">Login</button>
                </form>
                <button onClick={()=> window.open('/register', "_blank")} >register</button>
            </div>  
           
      </div>

    );
  }
}

export default Login;
