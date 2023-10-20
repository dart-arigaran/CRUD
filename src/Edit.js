import React from 'react';

const Edit = (props) => {
  const UpdateData = () => {
    fetch(`http://localhost:4000/posts/${props.patch.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(props.formdata),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not update data');
        }
      })
      .then(alert('Successfully Updated'))
      .catch((err) => {
        console.error('Error to fetching data', err);
      });
  };

  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <form>
            <p>
              <label htmlFor='Namelabel'>Name</label>
              <br />
              <input
                autoComplete='label'
                type='text'
                id='Namelabel'
                name='name'
                onChange={props.EditChange}
                value={props.formdata.name}
                className='form-control'
              />
            </p>
            <p>
              <label htmlFor='Numberlabel'>Age</label>
              <br />
              <input
                autoComplete='label2'
                type='number'
                id='Numberlabel'
                name='age'
                onChange={props.EditChange}
                value={props.formdata.age}
                className='form-control'
              />
            </p>
            <p>
              <label htmlFor='Phonelabel'>Phone</label>
              <br />
              <input
                autoComplete='label3'
                type='number'
                id='Phonelabel'
                name='mobile'
                onChange={props.EditChange}
                value={props.formdata.mobile}
                className='form-control'
              />
            </p>
            <p>
              <label htmlFor='Emaillabel'>Email</label>
              <br />
              <input
                autoComplete='label4'
                type='email'
                id='Emaillabel'
                name='mail'
                onChange={props.EditChange}
                value={props.formdata.mail}
                className='form-control'
              />
            </p>
            <p>
              <label htmlFor='addresslabel'>Address</label>
              <br />
              <input
                autoComplete='label4'
                type='text'
                id='addresslabel'
                name='address'
                onChange={props.EditChange}
                value={props.formdata.address}
                className='form-control'
              />
            </p>
            <div class='input-group mb-3'>
              {/*  <div class='input-group-prepend'>
                <span class='input-group-text'>Upload</span>
              </div> */}
              <div class='custom-file'>
                <input
                  type='file'
                  class='custom-file-input'
                  id='inputGroupFile01'
                  autoComplete='label4'
                  className='form-control'
                  name='file'
                  value={props.formdata.file}
                  onChange={props.EditChange}
                />
                <label class='custom-file-label' for='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            </div>
            <p>
              <input type='button' onClick={UpdateData} value='Update' className='btn btn-info' />
              &nbsp;&nbsp;
              <input type='button' onClick={props.EditCancel} value='Cancel' className='btn btn-block' />
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Edit;
