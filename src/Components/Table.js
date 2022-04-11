import './table.scss';

const Table = ({
  tableHeader,
  tableBody
}) => {
  return (
    <div>
      <ul class="responsive-table">
        <li class="table-header">
          {tableHeader && tableHeader.map((data, idx) => (
            <div class={"col col-" + (idx + 1)} key={idx}>{data}</div>
          ))}
        </li>
        {tableBody && tableBody.map((rowData, idx) => (
          <li class="table-row" key={idx} >
            {rowData.map((cellData, idx) => (
              <div class={"col col-" + (idx + 1)} data-label={idx} key={idx}>{cellData}</div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Table;