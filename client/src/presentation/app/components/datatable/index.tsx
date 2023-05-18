import DatatableComponent, {
  IDataTableProps,
} from "react-data-table-component";
import "./styles/_datatable.scss";

type IProps = IDataTableProps<any>;

export const Datatable = ({ columns, data, ...rest }: IProps) => {
  return (
    <>
      <DatatableComponent
        columns={columns}
        data={data}
        pagination
        {...rest}
        noDataComponent={null}
      />
      {data.length === 0 && <p>No Data</p>}{" "}
    </>
  );
};
