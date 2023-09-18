import {
  Block2,
  Cal,
  CaloriesBlockStyledForParamsPage,
  EllipseDiv,
  QuantityCal,
  RectangleDiv,
  RunningStickFigureSvgrepoCIcon,
} from './CaloriesBlock.styled';

export const CaloriesBlockStyledForParamsPages = () => {
  return (
    <CaloriesBlockStyledForParamsPage>
      <RectangleDiv />
      <Block2>
        <QuantityCal>500</QuantityCal>
        <Cal>cal</Cal>
      </Block2>
      <EllipseDiv />
      <RunningStickFigureSvgrepoCIcon
        alt=""
        src="public/runningstickfiguresvgrepocom-1.svg"
      />
    </CaloriesBlockStyledForParamsPage>
  );
};

export default CaloriesBlockStyledForParamsPages;
