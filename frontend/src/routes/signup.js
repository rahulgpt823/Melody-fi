import { Icon } from '@iconify/react'
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import { Link } from 'react-router-dom';
const SignupComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="120" />
      </div>
      
        <div className="font-bold text-2xl mt-10 w-full"> Sign up to start listening</div>
       <div className="inputRegion w-1/4  flex item-center justify-center flex-col">
        <TextInput label="What's your email?" placeholder="Enter your email" className="my-4"/>
        <TextInput label="confirm your email?" placeholder="Enter your email again" className="my-4"/>
        <PasswordInput label="Create a password" placeholder="Create a password" className="my-2"/>
        <TextInput label="What's should we call you?" placeholder="Enter your username" className="my-4"/>
        {/* Add more input fields or a button for signup here */}
        <div className= "w-full mt-2 flex justify-center" >
        <button label="Log In" className='text-xs font-semibold bg-green-400 p-3 px-5  border-solid rounded-xl'>Sign up</button>
        </div>
        <div className=' border-b border-solid border-gray-300  w-full mt-4 '>
         
        </div>
         <div className='font-bold my-2 text-xs w-full'>Already have an account</div>
         
      <div className=' mb-2 text-xs w-full  border border-solid border-gray-500  rounded-lg text-gray-600 font-semibold flex items-center justify-center'  ><Link to="/login">SIGN IN</Link></div>
      </div>
    </div>
  )
}

export default SignupComponent
