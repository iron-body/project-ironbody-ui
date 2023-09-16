import {
  Block2,
  Cal,
  CaloriesBlockStyled,
  EllipseDiv,
  QuantityCal,
  RectangleDiv,
  RunningStickFigureSvgrepoCIcon,
} from './CaloriesBlock.styled';

export const CaloriesBlock = () => {
  return (
    <CaloriesBlockStyled>
      <RectangleDiv />
      <Block2>
        <QuantityCal>500</QuantityCal>
        <Cal>cal</Cal>
      </Block2>
      <EllipseDiv />
      <RunningStickFigureSvgrepoCIcon alt="" src="src/assets/runningstickfiguresvgrepocom-1.svg" />
    </CaloriesBlockStyled>
  );
};
