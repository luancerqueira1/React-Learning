// import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { ModalSavePin } from '../../Containers/ModalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../Containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';

export const HomePage = () => {
   return (
      <div>
         <ModalSavePin open={false} />
         <ModalCreateFolder open={false} />
         <Notification
            message='Criado Com Sucesso'
            onClose={() => {
               console.log('ok');
            }} />
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
