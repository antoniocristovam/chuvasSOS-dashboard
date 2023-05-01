import { Container, Table, TableColumn, TableTitle, Title} from "./styles";

const Shelters = () => {
  const sheltersList: Array<Object> = [
    {
      equipamento_publico: 'Escola Santo Antonio',
      tipo: 'Abrigo',
      municipal_estadual: 'NaN',
      endereco: 'Rua Diff Tutancamon, nº 1341AC',
      bairro: 'Egito Antigo',
    },
    {
      equipamento_publico: 'Alberto Ainstein',
      tipo: 'Escola',
      municipal_estadual: 'NaN',
      endereco: 'Rua alemã, nº 300kmS',
      bairro: 'Lingua de fora',
    },
    {
      equipamento_publico: 'Pedro II',
      tipo: 'Base militar',
      municipal_estadual: 'NaN',
      endereco: 'Buff Monarquia, Nº 1845',
      bairro: 'Brasil Diferente',
    }
  ]

  return (
    <div>
      <Title>Abrigos</Title>

      <Container>
        <div>
          <TableTitle>Lista de Abrigo</TableTitle>
          <Table>
            <tr>
              <TableColumn>Local</TableColumn>
              <TableColumn>Tipo</TableColumn>
              <TableColumn>Endereço</TableColumn>
              <TableColumn>Bairro</TableColumn>
            </tr>
            {sheltersList.map(shelter => {
              return(
                <tr>
                  <TableColumn>{shelter.equipamento_publico}</TableColumn>
                  <TableColumn>{shelter.tipo}</TableColumn>
                  <TableColumn>{shelter.endereco}</TableColumn>
                  <TableColumn>{shelter.bairro}</TableColumn>
                </tr>
              )
            })}
          </Table>
        </div>
  
        <div>
            <h1>MAPA AQUI</h1>
        </div>
  
      </Container>
    </div>
  );
};

export default Shelters;