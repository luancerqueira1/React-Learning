import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CardContainer } from '../../Containers/Card/Card';
import { ModalSavePin } from '../../Containers/ModalSavePin/ModalSavePin';
import { ModalCreateFolder } from '../../Containers/ModalCreateFolder/ModalCreateFolder';
import { Notification } from '../../components/Notification/Notification';
import { useAppContext } from '../../store/AppContext';
import { saveFolderSuccessType } from '../../store/types';
import { fetchPinsAction } from '../../store/action';


export const HomePage = () => {
   const { state, dispatch } = useAppContext();
   const [showFeedback, setShowFeedback] = useState(false);

   const pinsNormalized = state.pins.map(pin => {
      return ({
         ...pin,
         total: state.folders.filter(folder => {
            return folder.pins.includes(pin.id);
         }).length
      })
   });
   useEffect(() => {
      fetchPinsAction(dispatch);
   },[])

   useEffect(() => {
      if (state.type === saveFolderSuccessType) {
         setShowFeedback(true);
      }
   }, [state.type]);

   return (
      <div>
         <ModalSavePin open={state.mode === 'savePin'} />
         <ModalCreateFolder open={state.mode === 'createFolder'} />
         {showFeedback && (
            <Notification
               message='Criado Com Sucesso'
               onClose={() => {
                  setShowFeedback(false);
               }}
            />
         )}
         <Container fluid>
            <Row>
               {pinsNormalized.map((pin) => (
                  <Col key={pin.id} xs={12} md={3}>
                     <CardContainer {...pin} />
                  </Col>
               ))}
            </Row>
         </Container>
      </div>
   );
};
