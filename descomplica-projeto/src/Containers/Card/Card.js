import { Card } from '../../components/Card/Card';
import { useAppContext } from '../../store/AppContext';
import { openModalSavePinAction } from '../../store/action';

export const CardContainer = (props) => {
   const { state, dispatch } = useAppContext();
   const handleClick = (pinId) => {
      console.log('clicou handle');
      dispatch(openModalSavePinAction(pinId))
   }
   return (
      <Card {...props} onClick={handleClick} />
   )
};