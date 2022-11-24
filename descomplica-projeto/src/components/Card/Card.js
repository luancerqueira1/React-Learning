
import CardBs from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Card =({image,title,total})=> {
   return (
      <CardBs className=''>
         <CardBs.Img src={image}alt='CardBs image'
         />
         <CardBs.ImgOverlay>
            <Button variant='primary'>
               Profile <Badge bg='secondary'>{total}</Badge>
            </Button>
         </CardBs.ImgOverlay>
         <CardBs.Body>
            <CardBs.Title>{title}</CardBs.Title>
         </CardBs.Body>
      </CardBs>
   );
}

