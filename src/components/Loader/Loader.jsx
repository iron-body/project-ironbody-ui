import { Overlay, LoaderContent } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Overlay>
      <LoaderContent>
        <Oval
          width="100"
          height="100"
          color="#E6533C"
          wrapperStyle={{}}
          ariaLabel="oval-loading"
          secondaryColor="rgba(239, 237, 232, 0.1)"
        />
      </LoaderContent>
    </Overlay>
  );
};

export default Loader;
