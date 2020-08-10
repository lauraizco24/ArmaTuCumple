import React from 'react';
import '../../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import { Button } from 'react-bootstrap';
import cumple from '../../assets/img/cupcake.jpg'
import despe from '../../assets/img/despedidas.jpg'
import bbshower from '../../assets/img/bbshower.jpg'

function Main() {

  return (

    <div>
      <div className='seccionPrincipal' >
        <div className='row'>
          <div className="col-12">
            <h1><span><b className="tituloPrincipal">Arma tu Cumple</b></span></h1>
            <h2 className="slogan ">Todo para tu fiesta, en un solo lugar</h2>
            <Button type="button" className="btn btn-primary btn-lg">Comenzá Acá</Button>
          </div>
        </div>
      </div>

      <div className="serviciosIndex">

        <div className="tituloServicios">
          <h1>Servicios</h1>

        </div>

        <div className="serviciosCards">
          <CardColumns>
            {/* Tarjeta de Servicio de Cumpleaños*/}
            <Card>
              <Card.Img className="imagenServicio" variant="top" src={cumple} />
              <Card.Body>
                <Card.Title>Cumpleaños</Card.Title>
                <Card.Text className="texto">
                  Planifica todo para tu fiesta de cumpleaños desde un solo lugar!
      </Card.Text>
              </Card.Body>
            </Card>
            {/* Tarjeta de Servicio de Despedidas*/}
            <Card>
              <Card.Img className="imagenServicio" variant="top" src={despe} />
              <Card.Body>
                <Card.Title>Despedidas</Card.Title>
                <Card.Text className="texto">
                  Todo para tus despedidas: de Solter@, Divorciad@s, Viajes entre otros.
      </Card.Text>
              </Card.Body>
            </Card>
            {/* Tarjeta de Servicio de BabyShowers*/}
            <Card>
              <Card.Img className="imagenServicio" variant="top" src={bbshower} />
              <Card.Body>
                <Card.Title>Baby Showers</Card.Title>
                <Card.Text className="texto">
                  Todo para que tengas el mejor baby Shower del mundo!
      </Card.Text>
              </Card.Body>
            </Card>


          </CardColumns>
        </div>
      </div>
      <div className="seccionQS">
      <div className="QS">

        <h1 >Quienes Somos</h1>


      </div >

        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
        lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit
        esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
        qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.

        Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam. His putant aeterno interesset at.
        Usu ea mundi tincidunt, omnium virtute aliquando ius ex. Ea aperiri sententiae duo. Usu nullam dolorum quaestio ei,
  sit vidit facilisis ea. Per ne impedit iracundia neglegentur. Consetetur neglegentur eum ut, vis animal legimus inimicus id.</p>
      </div>


    </div>
  );


}
export default Main;
