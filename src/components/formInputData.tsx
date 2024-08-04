// pages/form.js
import React from "react";

export default function FormInputData() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="container mx-auto p-10 bg-white shadow-lg rounded-lg w-full max-w-2xl">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="nomor_rumah"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nomor Rumah
            </label>
            <input
              type="text"
              id="nomor_rumah"
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nomor Rumah"
            />
          </div>
          <div>
            <label
              htmlFor="jumlah_jiwa"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Jumlah Jiwa
            </label>
            <input
              type="number"
              id="jumlah_jiwa"
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Jumlah Jiwa"
            />
          </div>
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nama"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="NIK KK"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="NIK"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Tempat Lahir"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pendidikan Terakhir"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Pekerjaan"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Alamat Lengkap"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kedudukan dalam Keluarga"
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
              className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Nama Ibu Kandung"
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
