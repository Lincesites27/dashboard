import './Sidebar.css'
import logo from '../../assets/logo.svg'


const Sidebar = ({sidebarOpen, closeSidebar}) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
       
       <div className='sidebar__title'>
        <div className='sidebar__img'>
            <img src={logo} alt="logo" />
            <h1>LinceSites | React</h1>
        </div>

        <i onClick={()=> closeSidebar()}
        className="fa fa-times"
        id='sidebarIcon'
        aria-hidden="true"
        >

        </i>
       </div>

       <div className='sidebar__menu'>
        <div className="sidebar__link active_menu_link" >
        <i class="bi bi-house-door"></i>
            <a href="#">Home</a>
        </div>
        <h2>ADMIN</h2>

        <div className="sidebar__link">
        <i className='bi bi-ticket'></i>
            <a href="#">Área administrativa</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-building"></i>
            <a href="#">Lojas</a>
        </div>
        <div className="sidebar__link">
        <i className='bi bi-archive'></i>
            <a href="#">Produtos</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-list-task"></i>
        
            <a href="#">Categorias</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-journal"></i>
            <a href="#">Pedidos</a>
        </div>
        <h2>PESSOAS</h2>
        <div className="sidebar__link">
        <i class="bi bi-people"></i>
            <a href="#">Administradores</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-person-circle"></i>
            <a href="#">Usuarios</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-cash"></i>
            <a href="#">Pagamentos e custos</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-bar-chart-line"></i>
            <a href="#">A plataforma</a>
        </div>
        <div className="sidebar__link">
        <i class="bi bi-shield-check"></i>
            <a href="#">Políticas de privacidade</a>
        </div>
        <div className="sidebar__logout">
        <i class="bi bi-power"></i>
            <a href="#">Log out</a>
        </div>


       </div>
    
    </div>
  )
}

export default Sidebar