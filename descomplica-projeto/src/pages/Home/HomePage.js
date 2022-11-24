import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal }  from '../../components/Modal/Modal'
import { Card } from '../../components/Card/Card';

export const HomePage = () => {
   return (
      <div>
         <Modal
            open={true}
            title='Salvar Pin'
            controls={[
               {
                  label: 'criar pasta',
                  variant: 'primary',
                  onclick: () => {
                     console.log('clicou')
                  }
               },
               {
                  label: 'Fechar',
                  variant: 'secondary',
                  onclick: () => {
                     console.log('clicou')
                  }
               },
            ]}>

            
            <p>ola Todos </p>
         </Modal>
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
