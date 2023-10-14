// component
import Header from "../components/Header";
import { Questing } from "../components/Assets";
import { ThemeContext } from "../context/themeContext";
import { AddButton, MinButton, ResetButton } from "../components/Button";

// library
import React, { useContext, useState } from "react";
import { ScreenContext } from "../context/screenContenxt";

const Beranda = () => {
  const { theme } = useContext(ThemeContext);
  const { screenSize } = useContext(ScreenContext);
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 5);
  };

  const decrement = () => {
    number > 0 ? setNumber(number - 5) : alert(`Number already ${number}`);
  };

  const resetNumber = () => {
    number === 0 ? alert(`Number already ${number}`) : setNumber(0);
  };

  return (
    <>
      <Header />
      <main className={theme}>
        <div
          className={`container ${
            screenSize > 1000
              ? "row flex-full"
              : screenSize > 600 && screenSize <= 1000
              ? "column"
              : "column full-width item-center"
          }`}
        >
          <div className="container row item-center">
            <Questing />
            <div className="container column">
              <h1>Tugas Individu 3?</h1>
              <p>
                Tugas individu minggu 3 itu kegiatan tugas untuk mahasiswa
                kelas Pemrograman Web Lanjut agar dapat melakukan pengembagan 
                bakat dan keahlianya dalam dunia pemrograman web
              </p>
            </div>
          </div>
          <div className="container column full-width item-center minimal-gap">
            <h1>Coba komponen full state dibawah</h1>
            <div className="container column full-width item-auto-space">
              <div
                className={`container row item-auto-space ${
                  screenSize > 600 ? "half-width" : "full-width"
                }`}
              >
                <AddButton actions={increment} />
                <MinButton actions={decrement} />
              </div>
              <h1
                style={{
                  marginBottom: 20,
                }}
              >
                {number}
              </h1>
              <ResetButton actions={resetNumber} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Beranda;
