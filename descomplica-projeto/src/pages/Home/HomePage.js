import { useState , useEffect} from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from '../../components/Card/Card';
import { CardContainer } from '../../Containers/Card/Card';
import { ModalSavePin } from '../../Containers/ModalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../Containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { saveFolderSuccessType } from '../../store/types';

export const HomePage = () => {
   const { state, dispatch } = useAppContext();
   const [showFeedback, setShowFeedback] = useState(false);

   useEffect(() => {
      if (state.type === saveFolderSuccessType) {
         setShowFeedback(true);
      }
   },[state.type]);
 
   return (
      <div>
         <ModalSavePin open={state.mode === 'savePin'} />
         <ModalCreateFolder open={state.mode === 'createFolder'} />
         {showFeedback && (
            <Notification
               message='Criado Com Sucesso'
               onClose={() => {setShowFeedback(false)}} 
            />
         )}
         <Container fluid>
            <Row>
               <Col xs={12} md={3}>
                  <CardContainer id='123'
                     onClick={() => {
                        console.log('okok');
                     }}
                     title='matemática'
                     image='https://picsum.photos/200/300?53'
                     total='0'
                  />
               </Col>
               <Col xs={12} md={3}>
                  <CardContainer id='133'
                     title='trigonometria'
                     image='https://picsum.photos/200/300?13'
                     total='0'
                  />
               </Col>
               <Col xs={12} md={3}>
                  <CardContainer
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
