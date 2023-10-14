import React from "react";
import Question from "../assets/Questions-pana.png";
import layoutofberanda from "../assets/Layout of beranda.png";
import layoutoftentangandkontak from "../assets/Layout of tentang and kontak.png";

export const Questing = ({ width }) => {
  return (
    <>
      <a
        href="https://storyset.com/illustration/questions/pana#2D3122FF&hide=&hide=simple"
        target="_blank"
        rel="noreferrer"
      >
        <img
          width={width == null ? 300 : width}
          height={width == null ? 300 : width}
          src={Question}
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

export const Testingwe = () => {
  return (
    <>
      <img
        src="https://wallpapercave.com/wp/viVMquu.jpg"
        alt="entah.png"
        style={{
          width: "200px",
          borderRadius: "100%",
        }}
      />
    </>
  );
};
