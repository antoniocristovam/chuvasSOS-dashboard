import { Datatable } from "../../../components/datatable";
import { fakeDataShelters } from "../common/fakeData";
import { columns } from "../common/columnsTable/index";

const Shelters = () => {
  return (
    <>
      <div className="p-5">
        <h1>Pontos de apoio</h1>
        <Datatable data={fakeDataShelters} columns={columns} />
      </div>
    </>
  );
};

export default Shelters;
