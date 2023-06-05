import { TableColumn } from "react-data-table-component";
import { IconHoverAnimation } from "../../../../components/iconHoverAnimation";
import { shelter } from "../../pages";
import { Trash } from "phosphor-react";
import axios from "axios";

export const columns: TableColumn<shelter>[] = [
  {
    name: "Id",
    selector: (row) => row.id ?? 0,
    width: "10%",
    sortable: true
  },
  {
    name: "Nome",
    selector: (row) => row.name,
    width: "30%",
    sortable: true,
  },
  {
    name: "Endereço",
    selector: (row) => row.address,
    sortable: true,
  },
  {
    name: "Bairro",
    selector: (row) => row.district,
    sortable: true,
  },
  {
    name: "",
    style: {
      justifyContent: "end",
    },
    cell: (row) => {

      const redirect = () => {
        window.open(`https://www.google.com/maps/@${row.lat},${row.long},15z?entry=ttu`);
      }

      return (
        <div>
          <IconHoverAnimation
            path="/media/icons/duotune/bootstrap/trash3.svg"
            color="dark"
            onClick={redirect}
          />

        </div>
      );
    },
  },
];
