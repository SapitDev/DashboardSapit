import React, { useState } from "react";

type FormData = {
  jumlah_jiwa: number;
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

export default function FormInputData() {
  const [formData, setFormData] = useState<FormData>({
    jumlah_jiwa: 0,
    nama: "",
    nik_kk: "",
    nik: "",
    jenis_kelamin: "",
    status_perkawinan: "",
    tempat_lahir: "",
    tanggal_lahir: "",
    pendidikan_terakhir: "",
    pekerjaan: "",
    alamat_lengkap: "",
    kedudukan_dalam_keluarga: "",
    nama_ibu_kandung: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: id === "jumlah_jiwa" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/datawarga", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, kawilId: "your-kawil-id" }),
      });

      if (response.ok) {
        alert("Data berhasil ditambahkan!");
        setFormData({
          jumlah_jiwa: 0,
          nama: "",
          nik_kk: "",
          nik: "",
          jenis_kelamin: "",
          status_perkawinan: "",
          tempat_lahir: "",
          tanggal_lahir: "",
          pendidikan_terakhir: "",
          pekerjaan: "",
          alamat_lengkap: "",
          kedudukan_dalam_keluarga: "",
          nama_ibu_kandung: "",
        });
      } else {
        alert("Terjadi kesalahan, silakan coba lagi.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Terjadi kesalahan, silakan coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center ">
      <form
        className="container mx-auto p-10 bg-white shadow-lg rounded-lg w-full "
        onSubmit={handleSubmit}
      >
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="nama"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama
            </label>
            <input
              type="text"
              id="nama"
              value={formData.nama}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nama"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nik_kk"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              NIK KK
            </label>
            <input
              type="text"
              id="nik_kk"
              value={formData.nik_kk}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="NIK KK"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nik"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              NIK
            </label>
            <input
              type="text"
              id="nik"
              value={formData.nik}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="NIK"
              required
            />
          </div>
          <div>
            <label
              htmlFor="jenis_kelamin"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Jenis Kelamin
            </label>
            <select
              id="jenis_kelamin"
              value={formData.jenis_kelamin}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="status_perkawinan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Status Perkawinan
            </label>
            <select
              id="status_perkawinan"
              value={formData.status_perkawinan}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            >
              <option value="">Pilih</option>
              <option value="Belum Kawin">Belum Kawin</option>
              <option value="Kawin">Kawin</option>
              <option value="Cerai Hidup">Cerai Hidup</option>
              <option value="Cerai Mati">Cerai Mati</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="tempat_lahir"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tempat Lahir
            </label>
            <input
              type="text"
              id="tempat_lahir"
              value={formData.tempat_lahir}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Tempat Lahir"
              required
            />
          </div>
          <div>
            <label
              htmlFor="tanggal_lahir"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Tanggal Lahir
            </label>
            <input
              type="date"
              id="tanggal_lahir"
              value={formData.tanggal_lahir}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pendidikan_terakhir"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pendidikan Terakhir
            </label>
            <input
              type="text"
              id="pendidikan_terakhir"
              value={formData.pendidikan_terakhir}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pendidikan Terakhir"
              required
            />
          </div>
          <div>
            <label
              htmlFor="pekerjaan"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Pekerjaan
            </label>
            <input
              type="text"
              id="pekerjaan"
              value={formData.pekerjaan}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pekerjaan"
              required
            />
          </div>
          <div>
            <label
              htmlFor="alamat_lengkap"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Alamat Lengkap
            </label>
            <textarea
              id="alamat_lengkap"
              value={formData.alamat_lengkap}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Alamat Lengkap"
              required
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="kedudukan_dalam_keluarga"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Kedudukan dalam Keluarga
            </label>
            <input
              type="text"
              id="kedudukan_dalam_keluarga"
              value={formData.kedudukan_dalam_keluarga}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kedudukan dalam Keluarga"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nama_ibu_kandung"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nama Ibu Kandung
            </label>
            <input
              type="text"
              id="nama_ibu_kandung"
              value={formData.nama_ibu_kandung}
              onChange={handleChange}
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nama Ibu Kandung"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
