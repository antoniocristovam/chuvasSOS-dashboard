import axios from "axios";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";

const Alerts = () => {

  const [ title, setTitle ] = useState<string>();
  const [ message, setMessage ] = useState<string>();
  const [ priority, setPriority ] = useState<string>();

  const submit = ()=>{
    console.log(title, message, priority)
    axios.post('http://localhost:5000/notification', {title, message, priority}, );
  }

  return (
    <>
      <Container>
        <Form>
          <FormGroup>
            <Label for="title">
            Título
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Digite o título da notificação"
              type="text"
              onChange={ (value) => setTitle(value.target.value)}
            />
            <Label for="message">
            Corpo
            </Label>
            <Input
              id="message"
              name="message"
              placeholder="Digite o corpo da notificação"
              type="textarea"
              onChange={ (value) => setMessage(value.target.value)}
            />
            <Label for="exampleSelectMulti">
            Prioridade
            </Label>
            <Input
              id="priority"
              multiple
              name="priority"
              type="select"
              onChange={ (value) => setPriority(value.target.value)}
            >
              <option>
                Alta
              </option>
              <option>
                Média
              </option>
              <option>
                Baixa
              </option>
            </Input>
            <Button onClick={submit}>Enviar</Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
};

export default Alerts;
