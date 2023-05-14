import { TableColumn } from "react-data-table-component";

export interface SHELTERS {
  id: number;
  name: string;
  endereco: string;
  bairro: string;
}

export const columns: TableColumn<SHELTERS>[] = [
  {
    name: "Nome",
    selector: (row) => row.name,
    width: "30%",
    sortable: true,
  },
  {
    name: "Endereço",
    selector: (row) => row.endereco,
    sortable: true,
  },
  {
    name: "Bairro",
    selector: (row) => row.bairro,
    sortable: true,
  },
  {
    name: "",
    style: {
      justifyContent: "end",
    },
  },
];
