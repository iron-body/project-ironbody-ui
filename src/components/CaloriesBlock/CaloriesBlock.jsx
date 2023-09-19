import {
  Block2,
  Cal,
  CaloriesBlockStyled,
  EllipseDiv,
  QuantityCal,
  RectangleDiv,
  RunningStickFigureSvgrepoCIcon,
} from './CaloriesBlock.styled';
import sprite from '../../../icons.svg';

export const CaloriesBlock = () => {
  return (
    <CaloriesBlockStyled>
      <RectangleDiv />
      <Block2>
        <QuantityCal>500</QuantityCal>
        <Cal>cal</Cal>
      </Block2>
      <EllipseDiv>
        <RunningStickFigureSvgrepoCIcon>
          <use href={`${sprite}#icon-running-stick-figure-svgrepo-com-1`} />
        </RunningStickFigureSvgrepoCIcon>
      </EllipseDiv>

    </CaloriesBlockStyled>
  );
};
