import { MagnifyingGlass } from 'react-loader-spinner';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <>
      <Spinner>
        <MagnifyingGlass width="200" color="#800080" />
      </Spinner>
    </>
  );
};