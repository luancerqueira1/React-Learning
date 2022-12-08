import Badge from 'react-bootstrap/Badge';
import ListGroupBs from 'react-bootstrap/ListGroup';

export const ListGroup = ({items = []}) => {
   return (
      <ListGroupBs as='ul'>
         {items.map((item) => (
            <ListGroupBs.Item
               as='li'
               className='d-flex justify-content-between align-items-start'>
               <div className='ms-2 me-auto'>
                  <div className='fw-bold'>{item.title}</div>
               </div>
               <Badge bg='primary' pill>
                  {item.total}
               </Badge>
            </ListGroupBs.Item>
         ))}
      </ListGroupBs>
   );
};
