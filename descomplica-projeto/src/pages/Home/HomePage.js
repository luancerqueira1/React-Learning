import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ModalCreateFolder } from '../../Containers/ModalCreateFolder/ModalCreateFolder';
import { Card } from '../../components/Card/Card';

export const HomePage = () => {
   return (
      <div>
         <ModalCreateFolder open={true} />


         <Container fluid>
            <Row>
               <Col xs={12} md={3}>
                  <Card
                     title='matemática'
                     image='https://picsum.photos/200/300?53'
                     total='0'
                  />
               </Col>
               <Col xs={12} md={3}>
                  <Card
                     title='trigonometria'
                     image='https://picsum.photos/200/300?13'
                     total='0'
                  />
               </Col>
               <Col xs={12} md={3}>
                  <Card
                     title='matemática'
                     image='https://picsum.photos/200/300?22'
                     total='0'
                  />
               </Col>
            </Row>
         </Container>
      </div>
   );
};
