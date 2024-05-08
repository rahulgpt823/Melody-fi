import { Icon } from '@iconify/react/dist/iconify.js'
import LogoTextInput from '../components/shared/LogoTextInput.jsx'
import spotify_logo_white from '../assets/images/spotify_logo_white.svg'
const HomeComponent = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-1/5 h-full bg-black flex flex-col content-center justify-between">
        {/**This is dive of side*/}
        <div className="logoDiv py-3 px-5  flex content-center  justify-center">
          <img src={spotify_logo_white} alt={'spotify_logo'} width={100} />
        </div>
        <div className="">
          <div className="cursor-pointer">
            <LogoTextInput
              icon_name={'majesticons:home'}
              icon_text={'Home'}
              active={true}
              className=""
            />
            <LogoTextInput
              icon_name={'teenyicons:search-outline'}
              icon_text={'Search'}
              active={true}
              className=""
            />
            <LogoTextInput
              icon_name={'fluent:library-32-regular'}
              icon_text={'Your Library'}
              active={true}
              className=""
            />
          </div>

          <div className="py-5">
            <LogoTextInput
              icon_name={'f7:plus-square-fill'}
              icon_text={'Create Playlist'}
              active={true}
            />
            <LogoTextInput
              icon_name={'fluent-emoji-flat:heart-decoration'}
              icon_text={'Liked songs'}
              active={true}
            />
          </div>
        </div>
        <div className="border w-1/3 px-1 mb-2 flex items-center justify-start rounded-full text-xs gap-1   text-white cursor-pointer ">
          <Icon icon="fluent:globe-24-regular" />
          English
        </div>
      </div>

      <div className="w-4/5 h-full flex flex-col">
        {/**This is dive of nav component*/}
        <div className="h-1/10 bg-app-onyx flex items-center justify-between text-white px-4">
          {/**
           * this is navbar
           */}
          <div className="text-6xl flex gap-4  text-gray-600 justify-between">
            <p>{`<`}</p>
            <p>{`>`}</p>{' '}
          </div>
          <div className="mx-1 text-lg flex justify-center ">
            {/**right side of nav bar */}
            <button
              label="Log In"
              className=" font-semibold p-3 px-5 m-1 border-none hover:text-gray-400 "
            >
              Premium
            </button>
            <button
              label="Log In"
              className=" font-semibold p-3 px-5 m-1  hover:text-gray-400"
            >
              Support
            </button>
            <button
              label="Log In"
              className=" font-semibold p-3 px-5 m-1 hover:text-gray-400 "
            >
              Download
            </button>
            <div
              className="border-r-3  h-10 border-white m-2 items-center justify-center 
         "
            ></div>
            <button
              label="Log In"
              className=" font-semibold p-3 px-5 m-1 hover:text-gray-400"
            >
              Sign up
            </button>
            <button
              label="Log In"
              className=" font-semibold bg-white p-3 px-5 m-1 text-black border-solid rounded-full hover:text-gray-400"
            >
              Log In
            </button>
          </div>
        </div>
        <div className=" h-9/10 bg-gray-500 flex flex-col text-black text-lg font-normal ">
          {/**This is content page*/}
          <div className="h-1/10 w-full flex justify-between p-2 ">
            {/** `${palylist_title}`*/}
            <p className="cursor-pointer">Playlist</p>
            <p className='cursor-pointer'>show all</p>
          </div>
          {/**This is content page*/}
          <div className="h-9/10  bg-gray-600 w-full flex p-4">
            <CardComponent />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeComponent

const CardComponent = (title, description, imgLink) => {
  return <div className="w-1/6 h-1/2 border-2 rounded-lg flex flex-col ">
    <img className="h-2/3 w-full rounded-md" src="https://upload.wikimedia.org/wikipedia/en/3/39/The_Weeknd_-_Starboy.png" alt="poster" />
    <div className="font-semibold text-base flex m-1 text-white">{/**Title */}Weekend Special </div>
    <div className="font-semibold text-xs flex-col p-1 inline-flex text-white ">{/**Descption */}Hear all your Weekend favorite hits!! enjoy the soulful mix </div>
    </div>
}
