import React from 'react'
// import HospitalIcon from "../assets/hospital.png"

// import LogoutIcon from "../assets/logout.png"


const SideBar = () => {
  return (
    <div className='channel-list__sidebar'>
        <div className='channel-list__sidebar__icon1'>
            <div className='icon1__inner'>
                <img src='https://github.com/adrianhajdin/project_medical_pager_chat/blob/master/client/src/assets/hospital.png?raw=true'alt='Hospital' width="2rem"/>
            </div>
        </div>
        <div className='channel-list__sidebar__icon2'>
            <div className='icon1__inner'>
                <img src='https://github.com/adrianhajdin/project_medical_pager_chat/blob/master/client/src/assets/logout.png?raw=true'alt='Logout' width="2rem"/>
            </div>
        </div>
    </div>
    
  )
}

export default SideBar