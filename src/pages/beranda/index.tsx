import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Laporan from "@/components/tabel/laporan";
import { MdAddBox } from "react-icons/md";
import Link from "next/link";
import DashboardLayout from "@/layout/layout";
import AuthHelper from "@/utils/authHelper";

export default function Beranda() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    AuthHelper.checkAuth(router);
  }, [router]);

  // Fetch data dari API berdasarkan searchQuery
  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery.length > 0) {
        try {
          const response = await fetch(
            `/api/search?query=${encodeURIComponent(searchQuery)}`
          );
          const data = await response.json();
          setSearchResults(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold mt-4 mb-2">
            Data Warga Desa Sapit
          </h1>
          <h2 className="text-xl font-semibold mb-4 text-primary-500">
            Seluruh data warga Dusun Batu Cangku Utara
          </h2>

          {/* Input Search */}
          <input
            type="text"
            className="border p-2 rounded-md w-full"
            placeholder="Cari nama warga..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Link
          className="flex items-center space-x-4 border border-primary-500 px-4 py-2 rounded-md text-primary-500 hover:text-white hover:bg-primary-400 cursor-pointer"
          href={"/form"}
        >
          <h1 className="text-lg font-semibold">Tambah Data</h1>
          <MdAddBox className="text-2xl" />
        </Link>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Hasil Pencarian:</h2>
          <ul className="list-disc pl-5">
            {searchResults.map((result, index) => (
              <li key={index}>{result.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Laporan />
      )}
    </DashboardLayout>
  );
}
