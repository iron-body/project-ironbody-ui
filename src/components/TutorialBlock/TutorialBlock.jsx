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
      <BlockInner alt="" src="public/polygon-1.svg" />
    </Block>
  );
};
