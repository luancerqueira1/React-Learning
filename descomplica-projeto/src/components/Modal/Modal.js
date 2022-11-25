
import { Button } from '../Button/Button';
import ModalBs from 'react-bootstrap/Modal';


export const Modal = ({title, children, open, controls=[]}) => {
   return (
      <ModalBs show={open} onHide={()=>{}}>
         <ModalBs.Header closeButton>
            <ModalBs.Title>{title}</ModalBs.Title>
         </ModalBs.Header>
         <ModalBs.Body>{children}</ModalBs.Body>
         <ModalBs.Footer>
            {controls.map((control,controlIndex) =>(
               <Button key={controlIndex}
                  variant={control.variant}
                  onClick={control.onclick}
                  label={control.label}
                  loadingLabel={control.loadingLabel}
                  loading={control.loading}
                  disabled={control.disabled}
               />
            ))}
         </ModalBs.Footer>
      </ModalBs>
   );
};
