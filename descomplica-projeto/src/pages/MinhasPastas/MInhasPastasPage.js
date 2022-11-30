import { Container } from 'react-bootstrap';
import { ListGroup } from '../../components/ListGroup/ListGroup';

export const MinhasPastasPage = () => {
   return (
      <Container>
         <ListGroup
            items={[
               { title: 'matematica', total: 3 },
               { title: 'Javascript', total: 10 },
            ]}
         />
      </Container>
   );
};
