import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';
import { useAppContext } from '../../store/AppContext';
import { closeModalsAction } from '../../store/action';
import { fetchFoldersAction, openModalCreateFolder ,savePinInFolderAction} from '../../store/action';

export const ModalSavePin = ({ open }) => {
   const { state, dispatch } = useAppContext();
   const [itensLoading , setItensLoading] = useState({});
   
   const handleClose = () => {
      dispatch(closeModalsAction());
   };

   const handleClickCreateFolder = () => {
      dispatch(openModalCreateFolder());
   };

   const foldersNormalized = state.folders.map(folder => {
      return ({
         ...folder,
         saved: folder.pins.includes(state.activePinId)
      })
   });

   useEffect(() => {
      fetchFoldersAction(dispatch);
   },[])
   
   const handleClick = async (folderId) => {
      //loading true
      setItensLoading((prevState) => {
         return {
            ...prevState,
            [folderId]: true,
         };
      });

      await savePinInFolderAction(dispatch, state.activePinId, folderId);

      //loading false
         setItensLoading((prevState) => {
            return {
               ...prevState,
               [folderId]: false,
            };
         });
       
   };
   
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
               onClick: handleClickCreateFolder
            },
         ]}>
         <ListGroup variant='flush'>
            {foldersNormalized.map((folder,folderIndex) => (
               <ListGroup.Item key={folderIndex}>
                  <Row>
                     <Col xs={8}>{folder.name}</Col>
                     <Col className='text-end' xs={4}>
                        <Button
                           label={folder.saved ? 'Salvo' : 'Salvar'}
                           loadingLabel='Salvando'
                           onClick={() => handleClick(folder.id)}
                           variant={folder.saved ? 'secondary' : 'primary'}
                           disabled={folder.saved}
                           loading={itensLoading[folder.id]} />
                     </Col>
                  </Row>
               </ListGroup.Item>
            ))}
         </ListGroup>
      </Modal>
   );
};
