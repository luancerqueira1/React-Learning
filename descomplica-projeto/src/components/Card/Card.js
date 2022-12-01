import CardBs from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useAppContext } from '../../store/AppContext';

export const Card = ({ image, title, total }) => {
   const user = useAppContext();
   return (
      <CardBs className=''>
         <CardBs.Img src={image} alt='CardBs image' />
         <CardBs.ImgOverlay>
            <Button variant='primary'>
               Profile <Badge bg='secondary'>{total}</Badge>
            </Button>
         </CardBs.ImgOverlay>
         <CardBs.Body>
            <CardBs.Title>
               {title}
            </CardBs.Title>
         </CardBs.Body>
      </CardBs>
   )
};
