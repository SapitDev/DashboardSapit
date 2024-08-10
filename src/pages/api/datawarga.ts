// pages/api/data-warga.ts
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      nama,
      nik_kk,
      nik,
      jenis_kelamin,
      status_perkawinan,
      tempat_lahir,
      tanggal_lahir,
      pendidikan_terakhir,
      pekerjaan,
      alamat_lengkap,
      kedudukan_dalam_keluarga,
      nama_ibu_kandung,
    } = req.body;

    try {
      const newWarga = await prisma.dataWarga.create({
        data: {
          nama,
          nik_kk,
          nik,
          jenis_kelamin,
          status_perkawinan,
          tempat_lahir,
          tanggal_lahir: new Date(tanggal_lahir).toISOString(),
          pendidikan_terakhir,
          pekerjaan,
          alamat_lengkap,
          kedudukan_dalam_keluarga,
          nama_ibu_kandung,
          kawilId: "kawil_id_placeholder",
        },
      });

      res.status(201).json(newWarga);
    } catch (error) {
      res.status(500).json({ error: "Failed to add new data warga" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
