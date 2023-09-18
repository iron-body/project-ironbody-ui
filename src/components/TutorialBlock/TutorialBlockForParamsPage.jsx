import {
  BlockForParamsPage,
  BlockChild,
  BlockInner,
  BlockItem,
  QuantityTutorial,
  VideoTutorial,
} from './TutorialBlock.styled';

export const TutorialBlockForParamsPages = () => {
  return (
    <BlockForParamsPage>
      <BlockChild />
      <QuantityTutorial>350+</QuantityTutorial>
      <VideoTutorial>Video tutorial</VideoTutorial>
      <BlockItem />
      <BlockInner alt="" src="public/polygon-1.svg" />
    </BlockForParamsPage>
  );
};

export default TutorialBlockForParamsPages;
