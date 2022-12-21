// REACT BOOTSTRAP-ICONS
import { ChevronRight } from 'react-bootstrap-icons';

// REACT COMPONENTES
import { Link } from 'react-router-dom';

// ESTILOS
import './CategoryCard.scss';

const CategoryCard = () => {
  return (
    <div className='categoryCard-container d-flex flex-column flex-md-row mx-auto gap-4'>
      <div className='card-termos pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/dmh74auqy/image/upload/v1671584777/BLACKSTANLEY/pngwing.com_qkoe38.png'
          alt=''
        />
        <h6>TERMOS</h6>
        <Link to='category/termos'>
          <button className='btn--arrow mx-auto'>
            COMPRAR <ChevronRight />
          </button>
        </Link>
      </div>

      <div className='card-botellas pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/dmh74auqy/image/upload/v1671584777/BLACKSTANLEY/pngwing.com_qkoe38.png'
          alt=''
        />
        <h6>BOTELLAS</h6>
        <Link to='category/botellas'>
          <button className='btn--arrow mx-auto'>
            COMPRAR <ChevronRight />
          </button>
        </Link>
      </div>

      <div className='card-combos pb-3 d-flex flex-column align-items-center justify-content-end'>
        <div className='categoryCard-transparent'></div>
        <img
          src='https://res.cloudinary.com/dmh74auqy/image/upload/v1671584777/BLACKSTANLEY/pngwing.com_qkoe38.png'
          alt=''
        />
        <h6>COMBOS</h6>
        <Link to='/category/combos'>
          <button className='btn--arrow mx-auto'>
            COMPRAR <ChevronRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
