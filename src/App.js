import React, { useEffect, useState } from 'react';
import Register from './Register';
import View from './View';
import Edit from './Edit';
import Header from './Components/Header';

function App() {
  const [item, setItem] = useState({ name: '', age: '', mobile: '', mail: '', address: '', file: '' });
  // const [data, setData] = useState([]);
  // const [values, setValues] = useState([]);
  const [table, setTable] = useState([]);
  const [click, setClick] = useState(false);
  const [edit, setEdit] = useState(false);
  const [formdata, setFormdata] = useState({
    name: '',
    age: '',
    mobile: '',
    mail: '',
    address: '',
    file: '',
  });
  const [patch, setPatch] = useState([]);

  const API_URL = 'http://localhost:4000/posts';

  const OnChange = (changeEvent) => {
    const { name, value } = changeEvent.target;
    setItem({ ...item, [name]: value });
  };

  const RegisterForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw Error('there is a problem to fetching side');
      }
      console.log('success');
      alert('data added successfully');
      setItem({ name: '', age: '', mobile: '', mail: '', address: '', file: '' });
    } catch (error) {
      console.log('error occur on page', error);
    }
  };

  useEffect(
    () => async () => {
      try {
        const tableValue = await fetch(API_URL, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        });
        const get = await tableValue.json();
        if (!tableValue.ok) {
          throw Error('There was an issue with the fetch');
        }
        setTable(get);
      } catch {
        console.error('Error in fetching data');
      }
    },
    []
  );

  const Viewlist = (e) => {
    e.preventDefault();
    setClick(true);
  };

  const EditForm = async (id) => {
    setEdit(true);
    fetch(`http://localhost:4000/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPatch(data);
        setFormdata(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const EditChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...patch, [name]: value });
  };

  const EditCancel = () => {
    setEdit(!edit);
  };

  const DeleteForm = async (id) => {
    if (window.confirm('are you sure delete this item')) {
      fetch(`http://localhost:4000/posts/${id}`, {
        method: 'DELETE',
      });
    }
  };

  return (
    <>
      <Header />
      <section style={{ width: '100%', display: 'flex', border: '2px solid black' }}>
        <article style={{ width: '18%' }}>
          <h1>sider</h1>
        </article>
        <article style={{ width: '80%' }}>
          <View table={table} EditForm={EditForm} Delete={DeleteForm} />
        </article>
      </section>

      {edit ? (
        <Edit
          patch={patch}
          setPatch={setPatch}
          EditChange={EditChange}
          formdata={formdata}
          setFormdata={setFormdata}
          EditCancel={EditCancel}
        />
      ) : (
        <Register
          Rsubmit={RegisterForm}
          Rchange={OnChange}
          Rname={item.name}
          Rage={item.age}
          Rmobile={item.mobile}
          Rmail={item.mail}
          Raddress={item.address}
          Rfile={item.Rfile}
          listTable={Viewlist}
        />
      )}
    </>
  );
}

export default App;
