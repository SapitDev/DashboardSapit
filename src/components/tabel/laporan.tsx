import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Tabel from "@/components/subcomponents/tabel";

type DataItem = {
  nama: string;
  nik_kk: string;
  nik: string;
  jenis_kelamin: string;
  status_perkawinan: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  pendidikan_terakhir: string;
  pekerjaan: string;
  alamat_lengkap: string;
  kedudukan_dalam_keluarga: string;
  nama_ibu_kandung: string;
};

export default function Laporan() {
  const [data, setData] = useState<DataItem[]>([]);
  const searchParams = useSearchParams();

  const search = searchParams.get("search");
  const [keyword, setKeyword] = useState(
    () => searchParams.get("keyword") || ""
  );

  useEffect(() => {
    fetch(
      "https://66aae6c8636a4840d7c8cd3b.mockapi.io/data-warga/datawargadusun"
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const onKeywordChangeHandler = (newKeyword: string) => {
    setKeyword(newKeyword);
  };

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="font-primary">
      <Tabel data={filteredData} />
    </div>
  );
}
