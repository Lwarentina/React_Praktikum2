import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  render() {
    return(
      <div><hr />
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <Link class="nav-link" to="/">Beranda</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/gallery">Gallery</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/hari">Hari Besar</Link>
          </li>
        </ul><hr />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;