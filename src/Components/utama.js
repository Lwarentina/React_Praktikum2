import React from "react";
import {Route, Routes } from "react-router-dom";

import Beranda from "./beranda";
import Gallery from "./gallery";
import Hari from "./harib";

class Utama extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<Beranda/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/hari" element={<Hari/>} />
      </Routes>
    );
  }
}

export default Utama;
