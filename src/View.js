import React from 'react';

const View = (props) => {
  return (
    <>
      <table className='table table-striped table-dark'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>PHONE</th>
            <th>EMAIL</th>
            <th>Address</th>
            <th>File</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.table.map((items) => (
            <tr key={items.id}>
              <td>{items.id}</td>
              <td>{items.name}</td>
              <td>{items.age}</td>
              <td>{items.mobile}</td>
              <td>{items.mail}</td>
              <td>{items.address}</td>
              <td>{items.file}</td>
              <td>
                <button className='btn btn-success' onClick={(e) => props.EditForm(items.id)}>
                  Edit
                </button>
                &nbsp;&nbsp;
                <button className='btn btn-danger' onClick={(e) => props.Delete(items.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default View;
