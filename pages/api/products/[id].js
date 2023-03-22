import { products } from ".";

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find((pd) => pd.id === id);
  res.status(200).json(product);
}
