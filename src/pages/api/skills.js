// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from "../../../prisma/client";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await prisma.Skills.findMany();

      return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
