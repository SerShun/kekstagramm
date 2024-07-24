import { generateId, getRandomArrayElement, getRandomNumber } from './utils.js';

const OBJECT_ID = generateId();
const COMMENT_ID = generateId();
const MIN_COMMENTS_LENGTH = 0;
const MAX_COMMENTS_LENGTH = 30;
const MAX_PHOTOS_LENGTH = 25;
const COMMENTS = [
  'Эта фотография просто захватывает дух! ',
  'Какие краски! Прямо как в сказке!',
  'Очаровательный момент, запечатленный на фото!',
  'Не могу оторваться от этой картинки, такой магии в каждом кадре!',
  'Ваша фотография прямо как лучик солнца в моем ленте',
  'Этот ракурс просто идеальный! Как вы это сделали?',
  'Какая гармония цветов! Просто вдохновляюще!',
  'Такие красивые детали! Вы мастер своего дела!',
  'С такими фотографиями хочется возвращаться к ним снова и снова',
  'Это действительно достойно увидеть! Спасибо за эту красоту!',
];

const DESCRIPTION = [
  'Эмоциональная реакция на красоту и вдохновение.',
  'Восхищение яркими цветами и атмосферой фотографии.',
  'Подчеркнутая красота момента, запечатленного на снимке.',
  'Увлекательное впечатление от волшебства фотографии.',
  'Лучи солнца, озаряющие этот удивительный кадр.',
  'Идеальный ракурс, подчеркивающий красоту сюжета.',
  'Симфония оттенков, создающая неповторимую атмосферу.',
  'Искусные детали, подчеркивающие мастерство автора.',
  'Возврат к этому снимку снова и снова, вызывающему восторг.',
  'Ощущение благодарности за удивительное переживание через фотографию.',
];

const NAMES = ['James', 'Ugin', 'Igor', 'John', 'Anna', 'Nancy'];
const Avatar = {
  FROM: 1,
  TO: 6,
};
const Likes = {
  FROM: 15,
  TO: 100,
};

function generateComment() {
  return {
    id: COMMENT_ID(),
    avatar: `img/avatar-${getRandomNumber(Avatar.FROM, Avatar.TO)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  };
}

function generateObject() {
  const id = OBJECT_ID();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomNumber(Likes.FROM, Likes.TO),
    comments: Array.from(
      { length: getRandomNumber(MIN_COMMENTS_LENGTH, MAX_COMMENTS_LENGTH) },
      generateComment
    ),
  };
}

export const photosData = Array.from( {length: MAX_PHOTOS_LENGTH}, generateObject);
