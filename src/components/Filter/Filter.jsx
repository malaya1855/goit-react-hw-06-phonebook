import PropTypes from 'prop-types';
import { InputFilter } from 'components';
import { useDispatch } from 'react-redux';
import { newFilter } from 'redux/slice/filterSlice';

export const Filter = () => {
  // const filterNane = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChangeFilter = ev => {
    dispatch(newFilter(ev.currentTarget.value));
  };

  return (
    <label htmlFor="name">
      Find contacts by name
      <InputFilter
        type="text"
        name="name"
        // value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
