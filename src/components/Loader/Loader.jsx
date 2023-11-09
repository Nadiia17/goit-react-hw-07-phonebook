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
      glassColor="#f2e9e4"
      color="#9a8c98"
    />
  </LoaderContainer>
);
