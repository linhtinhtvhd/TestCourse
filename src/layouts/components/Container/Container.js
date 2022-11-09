import logo from '../../../acess/img/logo.svg'
import ItemContent from '../../../components/ItemContent/ItemContent';
import './Container.css'
import cssImg from '../../../acess/img/css.svg'
import htmlImg from '../../../acess/img/html.svg'
import urlImg from '../../../acess/img/url.svg'
import { ActiveContext } from '../../../StateContext/State';
import { AiOutlineMenuUnfold} from "react-icons/ai";
import {useContext} from 'react'

function Container() {

    const {setIsActive,isActive} = useContext(ActiveContext)

    const handleToggleSidebar = ()=>{
        if(isActive){
            setIsActive(false)
        }
        else{
            setIsActive(true)
        }
    }

    return ( <div className="container">
       <div className='container-wrapper'>
            <div className="logo">
                <img className="logo-img" src={logo} alt="logo"/>
                <AiOutlineMenuUnfold className='icon' onClick={handleToggleSidebar}/>
            </div>
            <div className='container-header'>
                <p className='container-header-tittle'>Lorem ipsum dolor sit asmet?</p>
                <p className='container-header-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div className='content'>
                <ItemContent image={cssImg}/>
                <ItemContent image={htmlImg}/>
                <ItemContent image={urlImg}/>
            </div>
            
       </div>
    </div>);
}

export default Container;