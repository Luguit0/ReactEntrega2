// ESTILOS
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className='aboutUs-container my-4 d-lg-flex gap-4'>
      <picture>
        <source
          srcSet='https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/06/537280.jpg'
          media='(min-width: 992px)'
          className='aboutUs-img'
        />
        <source
          srcSet='https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/06/537280.jpg'
          media='(min-width: 768px)'
          className='aboutUs-img'
        />
        <img
          src='https://resizer.iproimg.com/unsafe/880x/filters:format(webp)/https://assets.iprofesional.com/assets/jpg/2022/06/537280.jpg'
          alt=''
          className='aboutUs-img'
        />
      </picture>
      <div className='aboutUs-infoContainer'>
        <h2 className='aboutUs-title'>
          ACERCANDOTE LOS <span className='orange'>MEJORES</span> TERMOS Y ACCESORIOS STANLEY
        </h2>
        <p className='aboutUs-text'>
        Creados y fundados en EE. UU, te traemos los mejores productos y accesorios stanley a la puerta de tu casa para que puedas disfrutarlos y que te acompañen en todos los  momentos del día.
        Productos 100% Originales Importados y con garantia. 
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
