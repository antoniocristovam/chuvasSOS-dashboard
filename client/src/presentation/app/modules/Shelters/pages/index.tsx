import { Datatable } from "../../../components/datatable";
import { columns } from "../common/columnsTable/index";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, FormGroup, Input, Label } from "reactstrap";

export interface shelter {
  id?: number;
  name: string;
  address: string;
  district: string;
  lat: number;
  long: number;
}

const Shelters = () => {

  const [data, setData] = useState(Array<shelter>)
  const [shelter, setShelter] = useState<shelter>({ name: '', address: '', district: '', lat: 0, long: 0 })
  const [isIdEnabled, setIsIdEnabled] = useState(true);

  useEffect(() => {
    loadShelters()
  }, [])

  const loadShelters = async () => {
    const response = await axios.get('http://localhost:5000/shelter')
    setData(response.data.shelters)
    console.log(response.data)
  }

  const saveShelter = async () => {
    const response = await axios.post('http://localhost:5000/shelter', shelter)
    console.log(response)
  }

  const editShelter = async () => {
    const response = await axios.put(`http://localhost:5000/shelter/${shelter.id}`, shelter)
    console.log(response)
  }

  const submit = async () => {
    if (isIdEnabled) {
      await editShelter()
    } else {
      await saveShelter()
    }
    await loadShelters()
  }

  const handleIdToggle = () => {
    setIsIdEnabled(!isIdEnabled);
  };

  return (
    <>
      <div className="p-5">
        <h1>Pontos de apoio</h1>
        <Datatable data={data} columns={columns} />
      </div>
      <div className="p-5">
        <Container className="mt-5">
          <h1>Formulário para ponto de apoio</h1>
          <Form>
            <FormGroup>
              <Label for="title">Id</Label>
              <Input
                id="id"
                name="id"
                placeholder="Digite o id do ponto de apoio"
                type="text"
                onChange={(value) => { shelter.id = parseInt(value.target.value) }}
                disabled={!isIdEnabled}
              />
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    checked={isIdEnabled}
                    onChange={handleIdToggle}
                  />{' '}
                  {isIdEnabled ? 'Você está no modo edição ' : 'Você está no modo de inserção'}
                </Label>
              </FormGroup>
              <Label for="title">Nome</Label>
              <Input
                id="name"
                name="name"
                placeholder="Digite o nome do ponto de apoio"
                type="text"
                onChange={(value) => { shelter.name = value.target.value }}
              />
              <Label className="mt-2" for="message">
                Endereço
              </Label>
              <Input
                id="address"
                name="address"
                placeholder="Digite o endereço do ponto de apoio"
                type="text"
                onChange={(value) => { shelter.address = value.target.value }}
              />
              <Label className="mt-2" for="message">
                Bairro
              </Label>
              <Input
                id="district"
                name="district"
                placeholder="Digite o bairro do ponto de apoio"
                type="text"
                onChange={(value) => { shelter.district = value.target.value }}
              />
              <Label className="mt-2" for="message">
                Latitude
              </Label>
              <Input
                id="lat"
                name="lat"
                placeholder="Digite a latitude do ponto de apoio"
                type="number"
                onChange={(value) => { shelter.lat = parseFloat(value.target.value) }}
              />
              <Label className="mt-2" for="message">
                Longitude
              </Label>
              <Input
                id="district"
                name="district"
                placeholder="Digite a longitude do ponto de apoio"
                type="number"
                onChange={(value) => { shelter.long = parseFloat(value.target.value) }}
              />
              <Button className="btn btn-success" onClick={submit}>
                Enviar
              </Button>
            </FormGroup>
          </Form>
        </Container>

      </div>
    </>
  );
};

export default Shelters;
