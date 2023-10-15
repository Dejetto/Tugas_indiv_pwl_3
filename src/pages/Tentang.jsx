import React, { useContext, useEffect, useState } from "react";
import { DirectButton, ScrollTop } from "../components/Button";
import { ThemeContext } from "../context/themeContext";
import {Nyoba,} from "../components/Assets";


const Tentang = () => {
  const { theme } = useContext(ThemeContext);
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300
        ? setShowScrollButton(true)
        : setShowScrollButton(false);
    });
  }, []);
  return (
    <>
      <main className={theme}>
        {showScrollButton && (
          <ScrollTop
            actions={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        )}
        <h1>Spesifikasi Tugas Individu Minggu 3</h1>
        <div className="container column minimal-gap">
          <div className="container column half-width minimal-gap">
            <h3 id="komponenhalaman">Komponen apa</h3>
            <section>
              <p>
                Beberapa komponen entah. Untuk lebih lengkapnya, kamu dapat
                mengunjungi repositori berikut<sup>{`[2]`}</sup>.
              </p>
              <div
                className="container row minimal-gap item-center"
                style={{
                  marginTop: 10,
                }}
              >
                <Nyoba />
                <div className="container column item-center">
                  <div className="container column">
                    <h3>Dejetto</h3>
                    <h4>Tugas-Individu-3-PWL</h4>
                  </div>
                  <div className="container column">
                    <DirectButton
                      text={"Kunjungi Repositori"}
                      to_page={
                        "https://github.com/Dejetto/Tugas_indiv_pwl_3.git"
                      }
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Tentang;
