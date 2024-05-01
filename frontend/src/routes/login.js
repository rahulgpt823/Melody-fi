import { Icon } from '@iconify/react'
import TextInput from '../components/shared/TextInput';
import PasswordInput from '../components/shared/PasswordInput';
import  {Link}  from 'react-router-dom';
const LoginComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify" width="120" />
      </div>
      
        <div className="font-bold mt-10 w-full"> To continue, log in to Spotify</div>
       <div className="inputRegion w-1/4  flex item-center justify-center flex-col">
        <TextInput label="Email Id or Username" placeholder="Email Id or Username" className="my-4"/>
        <PasswordInput label="Password" placeholder="Password here" className="my-2"/>
        {/* Add more input fields or a button for signup here */}
        <div className= "w-full mt-2 flex justify-end" >
        <button label="Log In" className='text-xs font-semibold bg-green-400 p-3 px-5  border-solid rounded-xl'>Log In</button>
        </div>
        <div className=' border-b border-solid border-gray-300  w-full mt-4 '>
         
        </div>
         <div className='font-bold my-2 text-xs w-full'>Don't have an account</div>
      <div className=' mb-2 text-xs w-full  border border-solid border-gray-500  rounded-lg text-gray-600 font-semibold flex items-center justify-center '><Link to="/signup">SIGN UP FOR SPOTIFY</Link></div>
      </div>
    </div>
  )
}

export default LoginComponent
