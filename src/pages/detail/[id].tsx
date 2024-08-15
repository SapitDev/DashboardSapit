import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

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
  dataTambahan?: {
    anakYatim?: string;
    kendaraan?: string;
    jamban?: string;
    statusRumah?: string;
    ternak?: string;
    bpjs?: string;
    tki?: string;
    umkm?: string;
    saranaUmum?: string;
    prasarana?: string;
  };
};

const DetailPage: React.FC = () => {
  const [data, setData] = useState<DataItem | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`/api/data/${id}`)
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
            <span className="w-60">Jenis Kelamin</span>: {data.jenisKelamin}
          </div>
          <div className="flex">
            <span className="w-60">Tempat Lahir</span>: {data.tempatLahir}
          </div>
          <div className="flex">
            <span className="w-60">Tanggal Lahir</span>: {data.tanggalLahir}{" "}
            (Umur: {calculateAge(data.tanggalLahir)} tahun)
          </div>
          <div className="flex">
            <span className="w-60">Nama Ibu Kandung</span>:{" "}
            {data.namaIbuKandung}
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
            {data.statusPerkawinan}
          </div>
          <div className="flex">
            <span className="w-60">Kedudukan dalam Keluarga</span>:{" "}
            {data.kedudukanDalamKeluarga}
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
            {data.pendidikanTerakhir}
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
            <span className="w-60">Nomor KK</span>: {data.nikKk}
          </div>
          <div className="flex">
            <span className="w-60">Alamat Lengkap</span>: {data.alamatLengkap}
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
            {data.dataTambahan?.anakYatim || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Kendaraan</span>:{" "}
            {data.dataTambahan?.kendaraan || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Jamban</span>:{" "}
            {data.dataTambahan?.jamban || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Status Rumah</span>:{" "}
            {data.dataTambahan?.statusRumah || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Ternak</span>:{" "}
            {data.dataTambahan?.ternak || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">BPJS</span>:{" "}
            {data.dataTambahan?.bpjs || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">TKI</span>:{" "}
            {data.dataTambahan?.tki || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">UMKM</span>:{" "}
            {data.dataTambahan?.umkm || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Sarana Umum</span>:{" "}
            {data.dataTambahan?.saranaUmum || "Tidak Ada"}
          </div>
          <div className="flex">
            <span className="w-60">Prasarana</span>:{" "}
            {data.dataTambahan?.prasarana || "Tidak Ada"}
          </div>
        </div>
      </div>

      <button
        onClick={() => router.push("/beranda")}
        className="mt-4 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
      >
        Back to List
      </button>
    </div>
  );
};

export default DetailPage;

function calculateAge(birthdate: string) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
