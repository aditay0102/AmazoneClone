import React, { useState } from 'react'
import {logo} from  "../../assets/index";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { allItems   } from '../../assets/constants';
import HeadereBottom from '../HeadereBottom';

// simple hover effect tailwind css = px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100  

function Headere() {
  const [showAll,setShowALL] = useState(false)
  
  
  return (
    <div>
      <div  className='w-full bg-amazone_blue text-white px-4 py-3 flex items-center gap-4'> 

        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
          <img src={logo} className='w-24 mt-2 '></img>
        </div>

        <div className='px-2 h-[80%] flex items-center border border-transparent hover:border-white cursor-pointer duration-100'>
           <LocationOnIcon/>
           <p className='text-sm text-lightText font-light flex flex-col '>Deliver to 
           <span className='text-sm font-semibold -mt-1 text-white'>India</span></p>
        </div>

                                                                 {/*  search bar */}
        <div className='h-10 rounded-md flex flex-grow relative '>
          <span onClick={()=>setShowALL(!showAll)}
          className='w-14 h-full  bg-gray-200 hover:bg-gray-300 borde-2 cursor-point duration-300 text-sm  text-amazone_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
          All <span><ArrowDropDownIcon/ ></span></span> 
            {
              showAll && (
                <div>
                  <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scrol overflow-x-hidden bg-white border-[1px] bordere-amazone_blue text-black p-2 flex-col gap-1 z-50'>

                  
                    {
                      allItems.map((item)=>(
                        <li className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazone_blue cursor-pointer duration-200" key={item._id}>{item.title}</li>
                      ))
                    }   

                
                  </ul>
                </div>
              )
            }
      
          <input className='h-full text-base text-amazone_blue flex-grow outline-none border-none px-2'  type="text" />  
          <span className='w-12 h-full flex items-center justify-center bg-amazone_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md'><SearchIcon/></span>     
        </div>
                                                                {/* Sign In Starts */}
        <div className='flex flex-col items-start justify-center px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100 '>
          <p className='text-sm text-lightText font-extralight'>Hello ,sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>Accounts & Lists 
            <span>
              <ArrowDropDownIcon/>
            </span>
          </p>
        </div>
                                                      {/* Orders and returns start  */}
        <div className='flex flex-col items-start justify-center px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100  '>
          <p className='text-sm text-lightText  font-extralight'>Return</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>                                               

                                                      {/* Cart Starts */}
          <div className='flex items-start justify-center px-2 h-[80%]  border border-transparent hover:border-white cursor-pointer duration-100  relative'>
            <ShoppingCartIcon/>
            <p className='text-xs mt-3  font-semibold text-whiteText'>Cart 
              <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazone_blue flex justify-center items-center rounded-full'>0</span>
            </p>
          </div>                                              

      </div>
        <HeadereBottom/>  
    </div>
  )
}

export default Headere