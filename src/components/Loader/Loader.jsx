import { Overlay, LoaderContent } from './Loader.styled';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Overlay>
      <LoaderContent>
        <InfinitySpin width="200" color="#4fa94d" wrapperStyle={{}} />
      </LoaderContent>
    </Overlay>
  );
};

export default Loader;
