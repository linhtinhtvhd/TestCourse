import './Sidebar.css'
import {useContext} from 'react'
import { ActiveContext } from '../../../StateContext/State';
function Sidebar() {

    const {isActive} = useContext(ActiveContext)
    return (  <div className={`sidebar ${isActive ?'active':null}`} >
        <ul>
            <li className='sidebar-item'>
                Home
            </li>
            <li className='sidebar-item'>
               Services
            </li>
            <li className='sidebar-item sidebar-item-hover'>
                News
            </li>
            <li className='sidebar-item'>
                Blog
            </li>
            <li className='sidebar-item'>
               Contact
            </li>
        </ul>

    </div>);
}

export default Sidebar;