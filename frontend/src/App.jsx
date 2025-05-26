import React from "react";

import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/form" element={<CreateUser />} />
          <Route path="/users" element={<UserList />} />
        </Routes>
      </div>
    </div>
  );
}
