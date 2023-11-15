// import PropTypes from 'prop-types';
import { InputFilter } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { newFilterName } from 'redux/slice/filterSlice';

export const Filter = () => {
  const filterName = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeFilter = ev => {
    const filterValue = ev.currentTarget.value;
    dispatch(newFilterName(filterValue));
  };

  return (
    <label htmlFor="name">
      <InputFilter
        type="text"
        name="name"
        placeholder="Find contacts by name"
        value={filterName}
        onChange={onChangeFilter}
      />
    </label>
  );
};
