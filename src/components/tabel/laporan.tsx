import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { GrFormNext, GrFormPrevious } from "react-icons/gr"; // Import Next and Previous icons
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
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
    setCurrentPage(0);
  };

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const currentPageData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNextPage = () => {
    if (startIndex + itemsPerPage < filteredData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="font-primary">
      <Tabel
        data={currentPageData}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
      <div className="flex justify-between mt-4">
        {currentPage > 0 && (
          <button
            onClick={handlePreviousPage}
            className="border border-black px-2 flex items-center justify-center py-1 text-white bg-blue-500 rounded-lg hover:bg-secondary-100"
          >
            <GrFormPrevious className="text-black text-lg" />
            <span className="ml-2 text-black text-sm">Previous</span>
          </button>
        )}
        {startIndex + itemsPerPage < filteredData.length && (
          <button
            onClick={handleNextPage}
            className="border border-black px-2 flex items-center justify-center py-1 text-white bg-blue-500 rounded-lg hover:bg-secondary-100"
          >
            <span className="mr-2 text-black text-sm">Next</span>
            <GrFormNext className="text-black text-lg" />
          </button>
        )}
      </div>
    </div>
  );
}
