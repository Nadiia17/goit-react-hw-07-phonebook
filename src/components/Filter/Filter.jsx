import { FilterContainer, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <FilterContainer>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Enter name to find"
        value={filter}
        onChange={handleChange}
      />
    </FilterContainer>
  );
};
