import avatar from '../../assets/avatar.png'
import './Navbar.css'


const Navbar = ({sidebarOpen, openSideBar}) => {
  return (
    <nav className='navbar'>
        <div className="nav_icon" onClick={()=> openSideBar()}>
        <i class="bi bi-list" aria-hidden="true"></i>
        </div>

        <div className="navbar_left">
        <a href="#">Produtos</a>
        <a href="#">Usuários</a>
        <a href="#" className="active_link">Admin</a>

        </div>

        <div className="navbar_right">

        <a href="#">
        <i class="bi bi-search"></i>
        </a>

        <a href="#">
        <i class="bi bi-clock"></i>
        </a>

        <a href="#">
        <img src={avatar} alt="avatar" width="30"/>
        </a>

        </div>

    </nav>
  )
}

export default Navbar