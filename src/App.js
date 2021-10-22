import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DenseAppBar from './components/DenseAppBar';
// import SiderDemo from './components/SiderDemo';

function App() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    axios.get('https://achesuarota.com.br/api/1.0/store/getStores')
      .then(function (response) {
        setPosts(response.data.result)
      })
  }, [])

  return (
    <div className="App">
      <DenseAppBar />
      <header className="App-header">
        <div className="flex">
          <div className="flex-none w-48 h-20 relative">
            <img src="https://achesuarota.com.br/application/modules/user/views/assets/images/custom_bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          {
            Object.values(posts).map(value => {
              return (
                <div>
                  <p><strong>Nome:</strong> {value.name}</p>
                  <p><strong>Website:</strong> {value.website}</p>
                  <p><strong>Endereço:</strong> {value.address}</p>
                  <p><strong>Telefone:</strong> {value.telephone}</p>
                  <h4>Foto</h4>

                  {
                    Object.values(value.images).map(image =>
                      <img src={image.full.url} />
                    )
                  }
                </div>
              )
            })
          }
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* </SiderDemo> */}
    </div>
  );
}

export default App;
