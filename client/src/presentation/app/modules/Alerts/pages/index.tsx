import axios from "axios";
import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const Alerts = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("");

  const submit = () => {
    console.log(title, message, priority);
    axios.post("http://localhost:5000/notification", {
      title,
      message,
      priority,
    });
  };

  return (
    <>
      <Container className="mt-5">
        <Form>
          <FormGroup>
            <Label for="title">Título</Label>
            <Input
              id="title"
              name="title"
              placeholder="Digite o título da notificação"
              type="text"
              onChange={(value) => setTitle(value.target.value)}
            />
            <Label className="mt-2" for="message">
              Descrição
            </Label>
            <Input
              id="message"
              name="message"
              placeholder="Digite o corpo da notificação"
              type="textarea"
              onChange={(value) => setMessage(value.target.value)}
            />
            <Label className="mt-2" for="exampleSelectMulti">
              Prioridade
            </Label>
            <FormGroup row>
              <Col sm={12}>
                <Input
                  id="priority"
                  name="select"
                  type="select"
                  onChange={(value) => setPriority(value.target.value)}
                >
                  <option>Estado de Observação</option>
                  <option>Estado de Atenção</option>
                  <option>Estado de Alerta</option>
                </Input>
              </Col>
            </FormGroup>
            <Button className="btn btn-success" onClick={submit}>
              Enviar
            </Button>
            <div className="mt-5">
              <h4>Entenda os diferentes níveis de avisos:</h4>
              <p>Estado de Observação - RISCO MODERADO</p>
              <p>Estado de Atenção: RISCO MODERADO A ALTO</p>
              <p>Estado de Alerta: - RISCO MUITO ALTO</p>
            </div>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default Alerts;
