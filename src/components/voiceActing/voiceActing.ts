import { voices } from './voiceFiles';

export const voiceActing = (num: number) => {
  if (Math.abs(num) > 999 || !Number(num)) return;

  const numbers = {
    twenty: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    hundreds: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  };

  const audio = new Audio(); // Создаём новый элемент Audio

  let words: any[] = [];
  let minus = false;
  if (num < 0) {
    num *= -1;
    minus = true;
  }

  let stringNumber = num.toString();

  if (num > 19) {
    // let counter = 0;
    const twoDigits = Number(
      stringNumber[stringNumber.length - 2] +
        stringNumber[stringNumber.length - 1]
    );
    if (twoDigits > 10 && twoDigits < 20) {
      words.push(twoDigits);
    } else {
      if (stringNumber[stringNumber.length - 1] !== '0')
        words.push(stringNumber[stringNumber.length - 1]);
      if (stringNumber[stringNumber.length - 2] !== '0')
        words.push(
          numbers.twenty[Number(stringNumber[stringNumber.length - 2])]
        );
    }
    if (stringNumber[stringNumber.length - 3])
      words.push(
        numbers.hundreds[Number(stringNumber[stringNumber.length - 3])]
      );
  } else {
    words.push(num);
  }
  if (minus) words.push('minus');
  words = words.reverse();
  let counter = 0;
  const say = setInterval(() => {
    audio.src = voices[words[counter]]; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    counter++;
    if (counter > words.length - 1) clearInterval(say);
  }, 670);
};
