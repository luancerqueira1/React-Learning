import CardBs from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


export const Card = ({id, image, title, total, onClick }) => {
   return (
      <CardBs>
         <CardBs.Img src={image} alt='CardBs image' />
         <CardBs.ImgOverlay>
            <Button variant='primary' onClick={() => onClick(id)}>
               Salvar <Badge bg='secondary'>{total}</Badge>
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
