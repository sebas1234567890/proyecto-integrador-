
import SearchBar from '../SearchBar/SearchBar'

import style from './Nav.module.css'
import { Link } from 'react-router-dom'

const Nav = ({onSearch}) => {
return(
    <div>
        <SearchBar onSearch={onSearch} />
            <Link to= "/About" >
          <button>  About  </button>
           </Link>
           <Link to = "/home"> 
           <button> home </button>
           </Link>

           
    </div>
)

}


export default Nav;
