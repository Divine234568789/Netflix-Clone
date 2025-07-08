import React from "react";
import Header from "../header/header";

function Home({ onPageChange }) {
  return (
    <div>
      <Header onPageChange={onPageChange} />
      <h1>THIS IS THE HOME PAGE</h1>
    </div>
  );
}

export default Home;
