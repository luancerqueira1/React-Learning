import { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction } from '../../store/action';
import { fetchFoldersAction } from '../../store/action';

export const ModalSavePin = ({ open }) => {
   const { state, dispatch } = useAppContext();
   const handleClose = () => {
      console.log('fechando');
      dispatch(closeModalsAction());
   };
   useEffect(() => {
      fetchFoldersAction(dispatch);
   },[]);
   return (
      <Modal
         title='Salvar Pin'
         open={open}
         onHide={handleClose}
         controls={[
            {
               label: 'Criar Pasta',
               variant: 'secondary',
               loading: false,
               loadingLabel: 'Criando',
               onClick: () => {
                  console.log('clicou aquiii');
               },
            },
         ]}
      >
         <ListGroup variant='flush'>
            {state.folders.map((folder,folderIndex) => (
               <ListGroup.Item key={folderIndex}>
                  <Row>
                     <Col xs={8}>{folder.name}</Col>
                     <Col className='text-end' xs={4}>
                        <Button label='Salvar' loadingLabel='Salvando' />
                     </Col>
                  </Row>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </Modal>
   );
};
