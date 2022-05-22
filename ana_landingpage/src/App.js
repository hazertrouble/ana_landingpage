import './App.css';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="container-fluid main">
      <div id="navbar" className="row justify-content-center">
        <div className="col-md-5 col-6"><h4>Ana Rosa</h4></div>
        <div className="col-md-5 col-6"><p>(475) 103 7410</p></div>
      </div>
      <div id="landing" className="row justify-content-center">
        <div className="col-md-6 col-6">
          <h1>Ana Rosa Fisioterapeuta</h1>
          <p className="col-6">blah blah blah</p>
        </div>
        <div className="col-md-5 col-6">
          <h2>( imagen )</h2>
        </div>
      </div>
      <div id="menu" className="row justify-content-around box">
        <div className="col-lg-3 col-md-3 col-sm-10 col-11 menu-item box move-up">
          <h4>dolores</h4>
          <p>blah blah blah</p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-10 col-11 menu-item box move-up">
          <h4>fracturas</h4>
          <p>blah blah blah</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-10 col-11 menu-item box move-up">
          <h4>etc</h4>
          <p>blah blah blah</p>
        </div>
      </div>
      <div id="contactme" className="row justify-content-center">
        <div id="info" className="col-lg-4 col-md-5 col-sm-10 col-11 super-center">
          <h4>Contacta me</h4>      
          <p>(475) 103 7410</p>
          <p>facebook</p>
          <p>instagram</p>
        </div>

        <div id="mail" className="col-lg-6 col-md-6 col-sm-10 col-11 super-center">
          <h4>Enviame un correo</h4>
          <ContactForm/>
        </div>
      </div>
      <div id="map" className="row justify-content-center">
        <h4 className="super-center">Direccion</h4>
        <p className="super-center">Enrique Segoviano</p>
        <div className="col-lg-8 col-md-10 col-sm-10 col-11">
          <iframe className="box" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10199.156327208146!2d-102.24053171087341!3d21.523064905871806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842984c68d69b4eb%3A0x49fd6eb470c40ec2!2sParroquia%20de%20Nuestra%20Se%C3%B1ora%20de%20la%20Encarnaci%C3%B3n!5e0!3m2!1ses!2sus!4v1651963101883!5m2!1ses!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div id="testimonials" className="row justify-content-center">
        <h4 className="super-center">Testimonios</h4>
        <div className="col-lg-6 col-md-8 col-sm-8 col-9 box">
          hola
        </div>
      </div>
      <div id="fotter" className='super-center'>
        <p>2022 omar ortega</p>
      </div>
    </div>
  );
}

export default App;
