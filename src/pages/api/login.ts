import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import bcrypt from "bcrypt";

interface LoginResponse {
  message?: string;
  error?: string;
  user?: {
    id: string;
    nama: string;
    email: string;
  };
}

// Initialize Prisma Client
const prismaClient = prisma;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponse>
) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    const email = username;

    try {
      const user = await prismaClient.kawil.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      res.status(200).json({
        message: "Login successful",
        user: { id: user.id, nama: user.nama, email: user.email },
      });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
