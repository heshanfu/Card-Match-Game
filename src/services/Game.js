import { CARD_STATUS, DECK_SIZE, CARD_SIZES } from "../constants";

const BASE_URL = "https://picsum.photos";
const LIMIT = Math.ceil(DECK_SIZE / 2);

/**
 * Create new game
 */
export default () => {
  const urls = getRandomUrls();
  const deck = urls.concat(urls);

  while (deck.length > DECK_SIZE) {
    deck.pop();
  }

  const shuffledDeck = deck.sort(() => 0.5 - Math.random());

  return shuffledDeck;
};

export const getRandomUrls = () => {
  const imageUrl = `${BASE_URL}/${CARD_SIZES.width}/${CARD_SIZES.height}?random=`;
  const urlArray = [];

  for (let index = 0; index < LIMIT; index++) {
    urlArray.push({
      id: index,
      url: imageUrl + index,
      status: CARD_STATUS.HIDDEN
    });
  }

  return urlArray;
};
