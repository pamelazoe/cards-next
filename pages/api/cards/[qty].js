import { Deck, Hand } from "../../../lib/deck/deck";
const deck = new Deck();
export default function handler(req, res) {
  const { qty } = req.query;
  const cards = deck.dispatchCards(parseInt(qty));
  res.status(200).json(cards);
}
