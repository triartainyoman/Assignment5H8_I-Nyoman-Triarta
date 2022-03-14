import React from "react";

function NamaAntrian(props) {
  const antrian_terakhir = props.length - 1;
  return (
    <div>
      <span>{antrian_terakhir == props.id ? "" : "=>"}</span>
      <p className="nama_antrian">{props.nama}</p>
    </div>
  );
}

export default NamaAntrian;
