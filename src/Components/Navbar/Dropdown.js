import React, { useContext } from 'react'
import { DropdownStyles } from './DropdownStyles'
import { useNavigate } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import {RiMovie2Fill,RiLogoutCircleFill} from 'react-icons/ri'
import {MdRecentActors} from 'react-icons/md'
import {AiOutlineLogin} from 'react-icons/ai'
import {SiGnuprivacyguard} from 'react-icons/si'
import { MovieContext } from '../Context/AppContext'

const Dropdown = () => {
  const navigate = useNavigate()
  const {value} = useContext(MovieContext)
  const {setValue} = useContext(MovieContext)
  return (
    <DropdownStyles>
      <div className="pages-drop">
          <div className="page-drop" onClick={()=>navigate('/')}>
            <FaHome size={20} color={'red'}/>
            <span>Home</span>
          </div>
          <div className="page-drop" onClick={()=>navigate('/mymovies')}>
            <RiMovie2Fill size={20} color={'#07f7db'}/>
            <span>MyMovies</span>
          </div>
          <div className="page-drop" onClick={()=>navigate('/myactors')}>
            <MdRecentActors size={20} color={'#f7dd9c'}/>
            <span>MyActors</span>
          </div>
          <div className="page-drop" onClick={value? ()=>setValue(null):()=>navigate('/login')}>
            {value?<RiLogoutCircleFill fontSize={19} color={'red'}/>:<AiOutlineLogin size={20} color={'#1157fa'}/>}
            <span>{value?'Logout':'Login'}</span>
          </div>
          <div className="page-drop" onClick={()=>navigate('/signup')}>
            <SiGnuprivacyguard size={20} color={'#11f537'}/>
            <span>Signup</span>
          </div>
        </div>
    </DropdownStyles>
  )
}

export default Dropdown