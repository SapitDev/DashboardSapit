import React from "react";

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

type TabelProps = {
  data: DataItem[];
};

const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return age - 1;
  }
  return age;
};

const Tabel: React.FC<TabelProps> = ({ data }) => {
  return (
    <>
      <div className="ml-28 mr-14 mt-10">
        <div className="overflow-x-auto pr-5 lg:pr-0">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 bg-primary-600 text-white rounded-tl-lg">
                  No
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">Nama</th>
                <th className="px-4 py-2 bg-primary-600 text-white">NIK/KK</th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Jenis Kelamin
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Status Perkawinan
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Tempat Lahir
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Tanggal Lahir
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Pendidikan Terakhir
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Pekerjaan
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Alamat Lengkap
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Kedudukan dalam Keluarga
                </th>
                <th className="px-4 py-2 bg-primary-600 text-white">Umur</th>
                <th className="px-4 py-2 bg-primary-600 text-white">
                  Nama Ibu Kandung
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((entry, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? "bg-primary-50" : "bg-primary-100"
                  }
                >
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.nama}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.nik_kk}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.jenis_kelamin}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.status_perkawinan}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.tempat_lahir}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.tanggal_lahir}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.pendidikan_terakhir}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.pekerjaan}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.alamat_lengkap}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.kedudukan_dalam_keluarga}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {calculateAge(entry.tanggal_lahir)}
                  </td>
                  <td className="border border-primary-600 px-4 py-2 text-center">
                    {entry.nama_ibu_kandung}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Tabel;
