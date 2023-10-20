import React from 'react';
const Register = (props) => {
  return (
    <>
      <div className='d-flex w-100 vh-90 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
          <form>
            <p>
              <label htmlFor='Namelabel'>Name</label>
              <br />
              <input
                type='text'
                autoComplete='label'
                id='Namelabel'
                className='form-control'
                name='name'
                value={props.Rname}
                onChange={props.Rchange}
                required
              />
            </p>
            <p>
              <label htmlFor='Agelabel'>Age</label>
              <br />
              <input
                type='number'
                autoComplete='label2'
                id='Agelabel'
                className='form-control'
                name='age'
                value={props.Rage}
                onChange={props.Rchange}
                required
              />
            </p>
            <p>
              <label htmlFor='Phonelabel'>Phone</label>
              <br />
              <input
                type='number'
                autoComplete='label3'
                id='Phonelabel'
                className='form-control'
                name='mobile'
                value={props.Rmobile}
                onChange={props.Rchange}
                required
              />
            </p>
            <p>
              <label htmlFor='Emaillabel'>Email</label>
              <br />
              <input
                type='email'
                autoComplete='label4'
                id='Emaillabel'
                className='form-control'
                name='mail'
                value={props.Rmail}
                onChange={props.Rchange}
                required
              />
            </p>
            <p>
              <label htmlFor='addresslabel'>address</label>
              <br />
              <input
                type='address'
                autoComplete='label4'
                id='addresslabel'
                className='form-control'
                name='address'
                value={props.Raddress}
                onChange={props.Rchange}
                required
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
                  value={props.Rfail}
                  onChange={props.Rchange}
                  required
                />
                <label class='custom-file-label' for='inputGroupFile01'>
                  Choose file
                </label>
              </div>
            </div>
            <p>
              <input onClick={props.Rsubmit} className='btn btn-info' type='submit' value='Register' />
              &nbsp;&nbsp;
              {/*  <button onClick={props.listTable} className='btn btn-info'>
                ViewList
              </button> */}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
