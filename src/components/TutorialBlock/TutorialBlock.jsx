import {
  Block,
  BlockChild,
  BlockInnerSvg,
  BlockItem,
  QuantityTutorial,
  VideoTutorial,
} from './TutorialBlock.styled';
import sprite from '../../../icons.svg';

export const TutorialBlock = () => {
  return (
    <Block>
      <BlockChild />
      <QuantityTutorial>350+</QuantityTutorial>
      <VideoTutorial>Video tutorial</VideoTutorial>
      <BlockItem>
        <BlockInnerSvg>
          <use href={`${sprite}#icon-polygon`} />
        </BlockInnerSvg>
      </BlockItem>
    </Block>
  );
};
