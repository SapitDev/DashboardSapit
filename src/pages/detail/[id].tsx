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
  jenis_bantuan?: {
    anak_yatim?: string;
    kendaraan?: string;
    jamban?: string;
    status_rumah?: string;
    ternak?: string;
    bpjs?: string;
    tki?: string;
    umkm?: string;
    sarana_umum?: string;
    prasarana?: string;
  };
};

const DetailPage: React.FC = () => {
  const [data, setData] = useState<DataItem | null>(null);
  const router = useRouter();
  const { id } = router.query;

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
    <div className="max-w-8xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold text-primary-500 mb-2">{data.nama}</h2>

      {/* Kategori: Informasi Pribadi */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Informasi Pribadi
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex">
            <span className="w-60">Nama</span>: {data.nama}
          </div>
          <div className="flex">
            <span className="w-60">NIK</span>: {data.nik}
          </div>
          <div className="flex">
            <span className="w-60">Jenis Kelamin</span>: {data.jenis_kelamin}
          </div>
          <div className="flex">
            <span className="w-60">Tempat Lahir</span>: {data.tempat_lahir}
          </div>
          <div className="flex">
            <span className="w-60">Tanggal Lahir</span>: {data.tanggal_lahir}{" "}
            (Umur: {calculateAge(data.tanggal_lahir)} tahun)
          </div>
          <div className="flex">
            <span className="w-60">Nama Ibu Kandung</span>:{" "}
            {data.nama_ibu_kandung}
          </div>
        </div>
      </div>

      {/* Kategori: Status */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Status
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex">
            <span className="w-60">Status Perkawinan</span>:{" "}
            {data.status_perkawinan}
          </div>
          <div className="flex">
            <span className="w-60">Kedudukan dalam Keluarga</span>:{" "}
            {data.kedudukan_dalam_keluarga}
          </div>
        </div>
      </div>

      {/* Kategori: Pendidikan dan Pekerjaan */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Pendidikan dan Pekerjaan
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex">
            <span className="w-60">Pendidikan Terakhir</span>:{" "}
            {data.pendidikan_terakhir}
          </div>
          <div className="flex">
            <span className="w-60">Pekerjaan</span>: {data.pekerjaan}
          </div>
        </div>
      </div>

      {/* Kategori: Alamat */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Alamat
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex">
            <span className="w-60">Nomor KK</span>: {data.nik_kk}
          </div>
          <div className="flex">
            <span className="w-60">Alamat Lengkap</span>: {data.alamat_lengkap}
          </div>
        </div>
      </div>

      {/* Kategori: Jenis Bantuan */}
      <div className="bg-white border border-primary-200 shadow rounded-lg p-5 mb-2">
        <h2 className="text-lg font-semibold shadow-lg rounded-lg bg-gradient-to-r from-primary-500 to-primary-100 text-white p-3 mb-2">
          Jenis Bantuan
        </h2>
        <div className="space-y-2 text-gray-900 font-medium leading-loose">
          <div className="flex">
            <span className="w-60">Anak Yatim</span>:{" "}
            {data.jenis_bantuan?.anak_yatim || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Kendaraan</span>:{" "}
            {data.jenis_bantuan?.kendaraan || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Jamban</span>:{" "}
            {data.jenis_bantuan?.jamban || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Status Rumah</span>:{" "}
            {data.jenis_bantuan?.status_rumah || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Ternak</span>:{" "}
            {data.jenis_bantuan?.ternak || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">BPJS</span>:{" "}
            {data.jenis_bantuan?.bpjs || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">TKI</span>:{" "}
            {data.jenis_bantuan?.tki || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">UMKM</span>:{" "}
            {data.jenis_bantuan?.umkm || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Sarana Umum</span>:{" "}
            {data.jenis_bantuan?.sarana_umum || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Prasarana</span>:{" "}
            {data.jenis_bantuan?.prasarana || "Tidak Ada"}
          </div>
        </div>
      </div>

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
