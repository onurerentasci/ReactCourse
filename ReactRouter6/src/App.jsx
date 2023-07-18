import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPath from "./components/WrongPath";
import History from "./components/History";
import Team from "./components/Team";
import Company from "./components/Company";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";

const LazyAboutUs = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />

        {/* lazy load işlemi  web sayfalarının performansını artırmak için kullanılır. 
        Temel olarak, kullanıcının sayfayı ilk yüklediğinde tüm bileşenleri indirmek yerine, yalnızca kullanıcının görüntülediği kısmı yükler. 
        Bu, sayfanın yükleme süresini azaltır ve başlangıç ​​yüklemesini optimize eder.  */}

        <Route path="/mission" element={<Mission />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:memberID" element={<MemberDetail />} />
        {/* ikinci '/' sonrasında tanımladığımız ifade dinamik route olur */}

        <Route path="/history" element={<History />}>
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
          {/* child route a sakın '/' koyma */}
        </Route>

        <Route path="*" element={<WrongPath />} />
        {/* kullanıcı üstteki pathler dışında bir yere giderse '*' ile tanımlı component gösterilir */}
      </Routes>
    </div>
  );
}

export default App;
