import './App.css';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot, faBriefcaseMedical, faCheck} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
    <div className="container-fluid main">
      <div id="navbar" className="row justify-content-center">
        <div className="col-md-12 col-12 super-center"><p>
          <a href='https://www.facebook.com/114985333628809/posts/531784095282262/?sfnsn=scwspmo'><FontAwesomeIcon className="icon" icon={faFacebook}/> Ana Rosa Romo Huerta</a>
          <FontAwesomeIcon className="icon" icon={faEnvelope}/> lftanarosarh@outlook.com
          <FontAwesomeIcon className="icon" icon={faWhatsapp}/> (475) 103 7410
        </p></div>
      </div>
      <div id="landing" className="row justify-content-center super-center">
        <div className="col-lg-5 col-md-4 col-10">
          <h1>Lic. Ana Rosa Romo Huerta</h1>
          <h3><FontAwesomeIcon className="icon" icon={faBriefcaseMedical}/> Fisioterapeuta</h3>
          <p>
            <FontAwesomeIcon icon={faCheck}/> Curar 
            <FontAwesomeIcon className="icon" icon={faCheck}/> Cuidar
            <FontAwesomeIcon className="icon" icon={faCheck}/> Rehabilitar
          </p>
        </div>
        <div className="col-lg-6 col-md-7 col-12 super-center">
          <img src={require("./doctor_img.png")} className="img-A" alt="doctor"/>
        </div>
      </div>
      <div id="menu" className="row justify-content-around box">
        <div className="col-lg-3 col-md-4 col-sm-10 col-10 menu-item box super-center">
          <h4>Atencion en:</h4>
          <ul>
            <li>Pacientes gariatricos</li>
            <li>Higiene de columna</li>
            <li>Prevencion de caidas</li>
            <li>Pacientes pediatricos</li>
            <li>Estimulacion temprana</li>
            <li>Pacientes con amputacion</li>
            <li>Lesiones deportivas</li>
            <li>Procesos agudos y cronicos</li>
            <li>Tratamiento pre y post quirurgicos</li>
            <li>fortalecimiento muscular</li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-6 menu-item box super-center">
          <h4>Tratamiento de:</h4>
          <ul>
            <li>Esguince</li>
            <li>Tendinitis</li>
            <li>Bursitis</li>
            <li>Desgarres Musculares</li>
            <li>Contracturas Musculares</li>
            <li>Escoliosis</li>
            <li>Luxaciones</li>
            <li>Artritis Reumatoide</li>
            <li>Artrosis</li>
            <li>Fibromialgia</li>
            <li>Ostreoporosis</li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-2 col-sm-4 col-4 menu-item box super-center">
          <h4>Dolores en:</h4>
          <ul>
            <li>Hombro</li>
            <li>Espalda</li>
            <li>Codo</li>
            <li>Mano</li>
            <li>Rodilla</li>
            <li>Tobillo</li>
            <li>Pie</li>
          </ul>
        </div>
      </div>
      <div id="contactme" className="row justify-content-center">
        <div id="info" className="col-lg-4 col-md-5 col-sm-10 col-11 super-center">
          <h3>Contactame</h3>            
          <p><a href='https://www.facebook.com/114985333628809/posts/531784095282262/?sfnsn=scwspmo'><FontAwesomeIcon className="icon" icon={faFacebook}/> Ana Rosa Romo Huerta</a></p>
          <p><FontAwesomeIcon className="icon" icon={faWhatsapp}/> (475) 103 7410</p>
          <p><FontAwesomeIcon className="icon" icon={faEnvelope}/> lftanarosarh@outlook.com</p>
        </div>

        <div id="mail" className="col-lg-6 col-md-6 col-sm-10 col-11 super-center">
          <h3>Enviame un correo</h3>
          <ContactForm/>
        </div>
      </div>
      <div id="map" className="row justify-content-center">
        <div className='super-center'>
          <h3>Direccion</h3>
          <p><FontAwesomeIcon className="icon" icon={faLocationDot}/> Enrique Segoviano</p>
        </div>
        <div className="col-lg-8 col-md-10 col-sm-10 col-11">
          <iframe className="box" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10199.156327208146!2d-102.24053171087341!3d21.523064905871806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842984c68d69b4eb%3A0x49fd6eb470c40ec2!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20la%20Encarnaci%C3%B3n!5e0!3m2!1ses!2sus!4v1651963101883!5m2!1ses!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div id="testimonials" className="row justify-content-center">
        <h3 className="super-center">Testimonios</h3>
        <div className="col-lg-6 col-md-8 col-sm-8 col-9 box">
          hola
        </div>
      </div>
    </div>
    <div id="footer"><p className='super-center'>2022 Omar Ortega</p></div>
    </>
  );
}

export default App;
