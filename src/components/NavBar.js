import './NavBar.css'
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import whatsapp from '../img/whatsapp.png'


const NavBar = () => {
  return (
    <div className="conteudo_lateral">
       <div className="logo"> 
        <h3>Dashboard Lince/React</h3>
       </div>

       <div className='itens_menu'>
         <span class="material-symbols-outlined">
face
</span><h5>Sobre Mim</h5>
       </div>
       <div className='itens_menu'>
         <span class="material-symbols-outlined">
terminal
</span><h5>Portfólio</h5>
       </div>
       <div className='itens_menu'>
         <span class="material-symbols-outlined">
psychology
</span><h5>Skills</h5>
       </div>
       <div className='itens_menu'>
         <span class="material-symbols-outlined">
share
</span><h5>Mídias Sociais</h5>
       </div>
       <div className='itens_menu'>
         <span class="material-symbols-outlined">
memory
</span><h5>GitHub</h5>
       </div>

       <div className='midias'>

        <a href=""><img src={facebook} width='25px'  alt="" /></a>
        <a href=""><img src={instagram} width='25px'  alt="" /></a>
        <a href=""><img src={linkedin} width='25px'  alt="" /></a>
        <a href=""><img src={whatsapp} width='25px'  alt="" /></a>

       </div>

       

      
    </div>
  )
}

export default NavBar