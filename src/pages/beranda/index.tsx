import { useEffect } from "react";
import { useRouter } from "next/router";
import Laporan from "@/components/tabel/laporan";
import { MdAddBox } from "react-icons/md";
import Link from "next/link";
import DashboardLayout from "@/layout/layout";
import AuthHelper from "@/utils/authHelper";

export default function Beranda() {
  const router = useRouter();

  useEffect(() => {
    AuthHelper.checkAuth(router);
  }, [router]);
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
        </div>
        <Link
          className="flex items-center space-x-4 border border-primary-500  px-4 py-2 rounded-md text-primary-500 hover:text-white hover:bg-primary-400 cursor-pointer"
          href={"/form"}
        >
          <h1 className="text-lg font-semibold">Tambah Data</h1>
          <MdAddBox className="text-2xl  " />
        </Link>
      </div>
      <Laporan />
    </DashboardLayout>
  );
}
