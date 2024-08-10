import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

type DataItem = {
  id: number;
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

const DetailPage: React.FC = () => {
  const [data, setData] = useState<DataItem | null>(null);
  const router = useRouter();
  const { id } = router.query; // Mengambil id dari URL

  useEffect(() => {
    if (id) {
      fetch(
        `https://66aae6c8636a4840d7c8cd3b.mockapi.io/data-warga/datawargadusun/${id}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-semibold mb-4">{data.nama}</h2>
      <table className="w-full table-auto mb-4">
        <tbody>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">Nomor KK</td>
            <td className="px-4 py-2 text-secondary-600">{data.nik_kk}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">NIK</td>
            <td className="px-4 py-2 text-secondary-600">{data.nik}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Jenis Kelamin
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.jenis_kelamin}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Status Perkawinan
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.status_perkawinan}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Tempat Lahir
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.tempat_lahir}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Tanggal Lahir
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.tanggal_lahir} (Umur: {calculateAge(data.tanggal_lahir)}{" "}
              tahun)
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Pendidikan Terakhir
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.pendidikan_terakhir}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">Pekerjaan</td>
            <td className="px-4 py-2 text-secondary-600">{data.pekerjaan}</td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Alamat Lengkap
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.alamat_lengkap}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Kedudukan dalam Keluarga
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.kedudukan_dalam_keluarga}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2 font-bold text-primary-600">
              Nama Ibu Kandung
            </td>
            <td className="px-4 py-2 text-secondary-600">
              {data.nama_ibu_kandung}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        onClick={() => router.push("/")}
        className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
      >
        Back to List
      </button>
    </div>
  );
};

export default DetailPage;

function calculateAge(birthdate: string): number {
  const birthDate = new Date(birthdate);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return age - 1;
  }
  return age;
}
