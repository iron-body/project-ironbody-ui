import {
  Block,
  BlockChild,
  BlockInner,
  BlockItem,
  QuantityTutorial,
  VideoTutorial,
} from './TutorialBlock.styled';

export const TutorialBlock = () => {
  return (
    <Block>
      <BlockChild />
      <QuantityTutorial>350+</QuantityTutorial>
      <VideoTutorial>Video tutorial</VideoTutorial>
      <BlockItem />
      <BlockInner alt="" src="src/assets/polygon-1.svg" />
    </Block>
  );
};
