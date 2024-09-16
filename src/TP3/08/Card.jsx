import "./styles.css"
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>Titulo do Cartao</Card.Title>
        <Card.Text>
            Descrição do Cartao
        </Card.Text>
        <Card.Text>
            Rotapé do Cartao
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;