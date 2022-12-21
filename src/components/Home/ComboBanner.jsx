// BOOTSTRAP
import { Card } from 'react-bootstrap';

// REACT COMPONENTS
import { Link } from 'react-router-dom';

const ComboBanner = () => {
  return (
    <Card className='card-header--container'>
      <picture>
        <source
          srcSet='https://res.cloudinary.com/dmh74auqy/image/upload/v1671564476/BLACKSTANLEY/COMBO_ltuuhe.jpg'
          media='(min-width: 992px)'
          className='card-header--img'
        />
        <img
          src='https://res.cloudinary.com/dmh74auqy/image/upload/v1671564476/BLACKSTANLEY/COMBO_ltuuhe.jpg'
          alt='Card image'
          className='card-header--img'
        />
      </picture>
      <Card.ImgOverlay className='p-0 my-auto card-header--infoContainer'>
        <p className='card-header--pretitle my-0'>Nuevo Combo</p>
        <h2 className='card-header--title my-0 text-center'>
          TRES PRODUCTOS STANLEY
        </h2>
        <p className='card-header--text my-0 text-center'>
          Para acompañarte en el día a día, te ofrecemos este combo de Termo, con color a elección, Botella y Mate. NO TE LO PODES PERDER!
        </p>
        <Link to='detail/3'>
          <button className='btn--orange'>VER PRODUCTO</button>
        </Link>
      </Card.ImgOverlay>
    </Card>
  );
};

export default ComboBanner;
