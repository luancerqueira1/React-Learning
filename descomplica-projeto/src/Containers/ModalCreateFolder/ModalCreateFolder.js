import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import Form from 'react-bootstrap/Form';

export const ModalCreateFolder = ({ open }) => {
   const [folderName, setFolderName] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('ok submit',folderName);
   }
   const handleChange = (e) => {
      setFolderName(e.target.value);
   }

   return (
      <Modal
         open={open}
         title='Criar Pasta'
         controls={[
            {
               label: 'criar e salvar',
               loadingLabel: 'Criando',
               variant: 'secondary',
               loading: true,
               type: 'submit',
               form:'form-criar-pasta',
            },
         ]}
      >
         <Form onSubmit={handleSubmit} id='form-criar-pasta'>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
               <Form.Label>Nome Da Pasta</Form.Label>
               <Form.Control type='text' placeholder='Ex .Matemática' value={folderName} onChange={handleChange} />
            </Form.Group>
         </Form>
      </Modal>
   );
};