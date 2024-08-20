import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Tabel from "@/components/subcomponents/tabel";

type DataItem = {
  _id: string;
  nama: string;
  nikKk: string;
  nik: string;
  jenisKelamin: string;
  statusPerkawinan: string;
  tempatLahir: string;
  tanggalLahir: string;
  pendidikanTerakhir: string;
  pekerjaan: string;
  alamatLengkap: string;
  kedudukanDalamKeluarga: string;
  namaIbuKandung: string;
};

export default function LaporanRincian() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("/api/data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="font-primary">
      {/* Kategori: Informasi Pribadi */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Informasi Pribadi
        </h2>
      </div>
    </div>
  );
}
