import React, { useState } from "react";

export default function FormInputData() {
  const [showSecondForm, setShowSecondForm] = useState(false);

  // State for the first form
  const [form1, setForm1] = useState({
    nomorRumah: "",
    jumlahJiwa: "",
    nama: "",
    nikKk: "",
    nik: "",
    jenisKelamin: "",
    statusPerkawinan: "",
    tempatLahir: "",
    tanggalLahir: "",
    pendidikanTerakhir: "",
    pekerjaan: "",
    alamatLengkap: "",
    kedudukanDalamKeluarga: "",
    namaIbuKandung: "",
  });

  // State for the second form
  const [form2, setForm2] = useState({
    jenisBantuan: "",
    jenisUsulan: "",
    anakYatim: "",
    kendaraan: "",
    jamban: "",
    statusRumah: "",
    ternak: "",
    bpjs: "",
    tki: "",
    umkm: "",
    saranaUmum: "",
    prasarana: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!showSecondForm) {
      setShowSecondForm(true);
    } else {
      // Handle form submission here
      console.log("Form 1 Data: ", form1);
      console.log("Form 2 Data: ", form2);
    }
  };

  const handleBack = () => {
    setShowSecondForm(false);
  };

  const handleInputChange = (e, formSetter) => {
    const { id, value } = e.target;
    formSetter((prevState) => ({ ...prevState, [id]: value }));
  };

  return (
    <div className="flex items-center justify-center">
      <form
        className="container mx-auto p-10 bg-white shadow-lg rounded-lg w-full"
        onSubmit={handleSubmit}
      >
        {!showSecondForm ? (
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="nomorRumah"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nomor Rumah
              </label>
              <input
                type="text"
                id="nomorRumah"
                value={form1.nomorRumah}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nomor Rumah"
              />
            </div>
            <div>
              <label
                htmlFor="jumlahJiwa"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jumlah Jiwa
              </label>
              <input
                type="number"
                id="jumlahJiwa"
                value={form1.jumlahJiwa}
                onChange={(e) => handleInputChange(e, setForm1)}
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
                value={form1.nama}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama"
              />
            </div>
            <div>
              <label
                htmlFor="nikKk"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                NIK KK
              </label>
              <input
                type="text"
                id="nikKk"
                value={form1.nikKk}
                onChange={(e) => handleInputChange(e, setForm1)}
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
                value={form1.nik}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="NIK"
              />
            </div>
            <div>
              <label
                htmlFor="jenisKelamin"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jenis Kelamin
              </label>
              <select
                id="jenisKelamin"
                value={form1.jenisKelamin}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Pilih</option>
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="statusPerkawinan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Status Perkawinan
              </label>
              <select
                id="statusPerkawinan"
                value={form1.statusPerkawinan}
                onChange={(e) => handleInputChange(e, setForm1)}
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
                htmlFor="tempatLahir"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tempat Lahir
              </label>
              <input
                type="text"
                id="tempatLahir"
                value={form1.tempatLahir}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tempat Lahir"
              />
            </div>
            <div>
              <label
                htmlFor="tanggalLahir"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tanggal Lahir
              </label>
              <input
                type="date"
                id="tanggalLahir"
                value={form1.tanggalLahir}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div>
              <label
                htmlFor="pendidikanTerakhir"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Pendidikan Terakhir
              </label>
              <input
                type="text"
                id="pendidikanTerakhir"
                value={form1.pendidikanTerakhir}
                onChange={(e) => handleInputChange(e, setForm1)}
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
                value={form1.pekerjaan}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Pekerjaan"
              />
            </div>
            <div>
              <label
                htmlFor="alamatLengkap"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Alamat Lengkap
              </label>
              <textarea
                id="alamatLengkap"
                value={form1.alamatLengkap}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Alamat Lengkap"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="kedudukanDalamKeluarga"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kedudukan dalam Keluarga
              </label>
              <input
                type="text"
                id="kedudukanDalamKeluarga"
                value={form1.kedudukanDalamKeluarga}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Kedudukan dalam Keluarga"
              />
            </div>
            <div>
              <label
                htmlFor="namaIbuKandung"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Ibu Kandung
              </label>
              <input
                type="text"
                id="namaIbuKandung"
                value={form1.namaIbuKandung}
                onChange={(e) => handleInputChange(e, setForm1)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama Ibu Kandung"
              />
            </div>
          </div>
        ) : (
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="jenisBantuan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jenis Bantuan
              </label>
              <input
                type="text"
                id="jenisBantuan"
                value={form2.jenisBantuan}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Jenis Bantuan"
              />
            </div>
            <div>
              <label
                htmlFor="jenisUsulan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jenis Usulan
              </label>
              <input
                type="text"
                id="jenisUsulan"
                value={form2.jenisUsulan}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Jenis Usulan"
              />
            </div>
            <div>
              <label
                htmlFor="anakYatim"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Anak Yatim
              </label>
              <input
                type="text"
                id="anakYatim"
                value={form2.anakYatim}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Anak Yatim"
              />
            </div>
            <div>
              <label
                htmlFor="kendaraan"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Kendaraan
              </label>
              <input
                type="text"
                id="kendaraan"
                value={form2.kendaraan}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Kendaraan"
              />
            </div>
            <div>
              <label
                htmlFor="jamban"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Jamban
              </label>
              <input
                type="text"
                id="jamban"
                value={form2.jamban}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Jamban"
              />
            </div>
            <div>
              <label
                htmlFor="statusRumah"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Status Rumah
              </label>
              <input
                type="text"
                id="statusRumah"
                value={form2.statusRumah}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Status Rumah"
              />
            </div>
            <div>
              <label
                htmlFor="ternak"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Ternak
              </label>
              <input
                type="text"
                id="ternak"
                value={form2.ternak}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Ternak"
              />
            </div>
            <div>
              <label
                htmlFor="bpjs"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                BPJS
              </label>
              <input
                type="text"
                id="bpjs"
                value={form2.bpjs}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="BPJS"
              />
            </div>
            <div>
              <label
                htmlFor="tki"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                TKI
              </label>
              <input
                type="text"
                id="tki"
                value={form2.tki}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="TKI"
              />
            </div>
            <div>
              <label
                htmlFor="umkm"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                UMKM
              </label>
              <input
                type="text"
                id="umkm"
                value={form2.umkm}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="UMKM"
              />
            </div>
            <div>
              <label
                htmlFor="saranaUmum"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Sarana Umum
              </label>
              <input
                type="text"
                id="saranaUmum"
                value={form2.saranaUmum}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Sarana Umum"
              />
            </div>
            <div>
              <label
                htmlFor="prasarana"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Prasarana
              </label>
              <input
                type="text"
                id="prasarana"
                value={form2.prasarana}
                onChange={(e) => handleInputChange(e, setForm2)}
                className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Prasarana"
              />
            </div>
          </div>
        )}
        <div className="flex justify-between">
          {showSecondForm && (
            <button
              type="button"
              onClick={handleBack}
              className="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {showSecondForm ? "Submit" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
}
