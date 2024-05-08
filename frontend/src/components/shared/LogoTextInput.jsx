import { Icon } from "@iconify/react/dist/iconify.js"

const LogoTextInput = ({icon_name,icon_text,active}) => {
  return <div className="logotextdiv flex justify-start gap-1 ">
    <div classname="px-5 py-2" >{/**
     * logo
     */}
     <Icon icon={icon_name} color={active?"white":"gray"} fontSize={15} /></div>

         <div className={`${active? "text-white": "text-gray-400"} font-semibold text-xs pb-3 hover:text-white `}>{/**
     * text
     */}
     {icon_text}</div>
  </div>
}

export default LogoTextInput;