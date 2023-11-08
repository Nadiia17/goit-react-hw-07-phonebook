import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="Loading"
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </LoaderContainer>
);
