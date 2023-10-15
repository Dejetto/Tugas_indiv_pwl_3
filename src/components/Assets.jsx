import React from "react";
import Tanya from "../assets/Questions-pana.png";
import layoutofberanda from "../assets/Layout of beranda.png";
import layoutoftentangandkontak from "../assets/Layout of tentang and kontak.png";

export const Ditanya = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/questions/pana#default&hide=&hide=simple"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={Tanya}
          alt="Questions-pana.png"
        />
      </a>
    </>
  );
};
export const LayoutOFBeranda = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutofberanda}
        alt="Layout of beranda.png"
      />
    </>
  );
};
export const LayoutOFTK = () => {
  return (
    <>
      <img
        className="full-width"
        src={layoutoftentangandkontak}
        alt="Layout of tentang and kontak.png"
      />
    </>
  );
};

export const Nyoba = () => {
  return (
    <>
      <img
        src="https://wallpapercave.com/wp/viVMquu.jpg"
        alt="dejetto.png"
        style={{
          width: "200px",
          borderRadius: "100%",
        }}
      />
    </>
  );
};
