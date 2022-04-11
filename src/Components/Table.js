import React from 'react';
import { connect } from 'react-redux';
import { TODO_SET_STATE, TODO_DELETE } from '../Todos/Redux/constants';
import './table.scss';

const Table = ({
  tableHeader,
  tableBody,
  isTodos,
  setCurrentState,
  deleteTodo
}) => {
  const onEdit = (id) => {
    setCurrentState(id);
  }
  const onDelete = (id) => {
    deleteTodo(id);
  }

  return (
    <div>
      <ul className="responsive-table">
        <li className="table-header">
          {tableHeader && tableHeader.map((data, idx) => (
            <div className={"col col-" + (idx + 1)} key={idx}>{data}</div>
          ))}
          {isTodos &&
            <React.Fragment>
              <div className='col col-1'></div>
              <div className='col col-1'></div>
            </React.Fragment>
          }
        </li>
        {tableBody && tableBody.map((rowData, idx) => (
          <li className="table-row" key={idx} >
            {rowData.map((cellData, idx) => (
              <div className={"col col-" + (idx + 1)} data-label={idx} key={idx}>{cellData}</div>
            ))}
            {isTodos &&
              <React.Fragment>
                <div className='col col-1 table-button' onClick={() => onEdit(rowData[0])}>Edit</div>
                <div className='col col-1 table-button' onClick={() => onDelete(rowData[0])} >Delete</div>
              </React.Fragment>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => {
  return {
  }};

const mapDispatchToProps = dispatch => ({
  setCurrentState: (data) => dispatch({
    type: TODO_SET_STATE,
    data
  }),
  deleteTodo: (id) => dispatch({
    type: TODO_DELETE,
    id
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);