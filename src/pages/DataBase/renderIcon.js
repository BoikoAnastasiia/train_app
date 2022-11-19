import грудь from './Icons/грудь.svg';
import ноги from './Icons/ноги.svg';
import пресс from './Icons/пресс.svg';
import рука from './Icons/рука.svg';
import спина from './Icons/спина.svg';
import ягодицы from './Icons/ягодицы.svg';

const renderIcon = musclesArray => {
  if (
    musclesArray.includes('плечи') ||
    musclesArray.includes('трапеция') ||
    musclesArray.includes('грудь')
  ) {
    return грудь;
  }

  if (musclesArray.includes('трицепс') || musclesArray.includes('бицепс')) {
    return рука;
  }

  if (musclesArray.includes('пресс')) {
    return пресс;
  }

  if (musclesArray.includes('спина')) {
    return спина;
  }

  if (musclesArray.includes('ягодицы')) {
    return ягодицы;
  }

  if (musclesArray.includes('ноги')) {
    return ноги;
  }
};

export default renderIcon;
