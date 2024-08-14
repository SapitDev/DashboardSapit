import React from "react";

interface FormDataProps {
  formData: {
    jenisBantuan: string;
    jenisUsulan: string;
    anakYatim: string;
    kendaraan: string;
    jamban: string;
    statusRumah: string;
    ternak: string;
    bpjs: string;
    tki: string;
    umkm: string;
    saranaUmum: string;
    prasarana: string;
  };
  handleInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    formSetter: React.Dispatch<React.SetStateAction<any>>
  ) => void;
  formSetter: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: () => void;
}

const FormData: React.FC<FormDataProps> = ({
  formData,
  handleInputChange,
  formSetter,
  onSubmit,
}) => {
  return (
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
          value={formData.jenisBantuan}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.jenisUsulan}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.anakYatim}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.kendaraan}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.jamban}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.statusRumah}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.ternak}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.bpjs}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.tki}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.umkm}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.saranaUmum}
          onChange={(e) => handleInputChange(e, formSetter)}
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
          value={formData.prasarana}
          onChange={(e) => handleInputChange(e, formSetter)}
          className="bg-gray-50 border border-primary-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Prasarana"
        />
      </div>

      <div className="col-span-2 flex justify-end">
        <button
          type="button"
          onClick={onSubmit}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-warning-500"
        >
          Simpan
        </button>
      </div>
    </div>
  );
};

export default FormData;
