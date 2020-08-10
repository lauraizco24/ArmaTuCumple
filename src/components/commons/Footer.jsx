import React from 'react';
import '../../assets/css/style.css';

function Footer() {
    return (
        <footer>
            <div className='Footer-container'>

                <div className='Footer-content'>

                    <div className='first-column'>
<ul>
    <li>
       <a href="" >Inicio</a> 
       <a href="" >Quienes Somos</a>
       <a href="" >Productos</a>
       <a href="" >Servicios</a>
    </li>
</ul>

                    </div>
                    <div className='second-column'>

                    <ul>
    <li>
       <a href="" >Mapa del Sitio</a> 
       <a href="" >Contacto</a>
       <a href="" >Franquicia</a>
       <a href="" >Trabaja con nosotros</a>
    </li>
</ul>
                    </div>
                    <div className='third-column'>
                    <ul>
    <li>
       <a href="" >Subscribete a nuestro newsletter</a> 
       <input value="email" placeholder="dejanos tu email"></input>
    </li>
</ul>

                    </div>

                </div>

            </div>
        </footer>

    )
}
export default Footer;

