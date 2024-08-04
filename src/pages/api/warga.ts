import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const warga = await prisma.dataWarga.findMany({
      include: {
        dataTambahan: true,
      },
    });
    res.status(200).json(warga);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat mengambil data warga" });
  }
}
