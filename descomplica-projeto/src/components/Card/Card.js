
import CardBs from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export const Card =()=> {
   return (
      <CardBs className=''>
         <CardBs.Img
            src='https://images.pexels.com/photos/12156808/pexels-photo-12156808.jpeg?cs=srgb&dl=pexels-mustafa-aqmal-syahputra-12156808.jpg&fm=jpg'
            alt='CardBs image'
         />
         <CardBs.ImgOverlay>
            <Button variant='primary'>
               Profile <Badge bg='secondary'>9</Badge>
               <span className='visually-hidden'>unread messages</span>
            </Button>
            <CardBs.Text>Last updated 3 mins ago</CardBs.Text>
         </CardBs.ImgOverlay>
         <CardBs.Body>
            <CardBs.Title>Titulo</CardBs.Title>
            Luan Gama Cerqueira
         </CardBs.Body>
      </CardBs>
   );
}

