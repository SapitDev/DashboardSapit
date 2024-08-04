import React from "react";
import Laporan from "@/components/tabel/laporan";

export default function Beranda() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mt-4 mb-2">Data Warga Desa Sapit</h1>
        <h2 className="text-xl font-semibold mb-4 text-primary-500">
          Seluruh data warga Dusun Batu Cangku Utara
        </h2>
        <Laporan />
      </div>
    </>
  );
}
