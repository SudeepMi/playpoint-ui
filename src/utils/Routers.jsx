import React from "react";
import { Route, Routes } from "react-router-dom";
import Fixture from "../pages/fixture";
import Predict from "../pages/predict";
import NotFound from "../pages/404";
import Home from "../pages/home";
import Profile from "../pages/profile";

import socketIO from "socket.io-client";
const socket = socketIO.connect(import.meta.env.VITE_SOCKET_URL);

export default function PageRouters() {
  const [activeFixtureBackground, setActiveFixtureBackground] =
    React.useState("");

  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route
        path="/"
        element={
          <Home setActiveFixtureBackground={setActiveFixtureBackground} />
        }
      />
       <Route
        path="/profile"
        element={
          <Profile setActiveFixtureBackground={setActiveFixtureBackground} />
        }
      />
      <Route
        path="fixture"
        element={<Fixture activeFixtureBackground={activeFixtureBackground} />}
      />
      <Route path="predict/:fixtureId" element={<Predict socket={socket} />} />
    </Routes>
  );
}