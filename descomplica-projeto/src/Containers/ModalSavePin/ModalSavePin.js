import ListGroup from 'react-bootstrap/ListGroup'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';


export const ModalSavePin = ({open}) => {
   return (
      <Modal
         title='Salvar Pin'
         open={open}
         controls={[
            {
               label: 'Criar Pasta',
               variant: 'secondary',
               loading: false,
               loadingLabel:'Criando',
               onClick: () => {
                  console.log('clicou aquiii');
               },
            },
         ]}
      >
         <ListGroup variant='flush'>
            <ListGroup.Item>
               <Row>
                  <Col xs={8}>luan</Col>
                  <Col className='text-end' xs={4}>
                     <Button label='Salvar' loadingLabel='Salvando' />
                  </Col>
               </Row>
            </ListGroup.Item>
            <ListGroup.Item>
               <Row>
                  <Col xs={8}>luan</Col>
                  <Col className='text-end' xs={4}>
                     <Button label='Salvar' loadingLabel='Salvando' />
                  </Col>
               </Row>
            </ListGroup.Item>
         </ListGroup>
      </Modal>
   );
}