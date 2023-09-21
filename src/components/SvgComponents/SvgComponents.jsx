import { CircleSvgStyled } from './SvgComponents.styled';
import spriteIconsRemix from '../../../remixicon.symbol.svg';

export const CircleFillError = () => {
  return (
    <CircleSvgStyled>
      <use href={`${spriteIconsRemix}#ri-24-hours-fill`}></use>
    </CircleSvgStyled>
  );
};
