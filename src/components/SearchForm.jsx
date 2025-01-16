import PropTypes from 'prop-types';

const SearchForm = ({ search, handleInputSearch }) => {
  return (
    <div style={{ display: 'flex',  justifyContent: 'center' }}>
      <form>
        <input
          type="number"
          name="number"
          placeholder="Number of Pokémon"
          value={search.number}
          onChange={handleInputSearch}
        />
        <input
          type="text"
          name="name"
          placeholder="Name of Pokémon"
          value={search.name}
          onChange={handleInputSearch}
        />
      </form>
    </div>
  );
};

// PropTypes para validar las propiedades del componente
SearchForm.propTypes = {
  search: PropTypes.shape({
    number: PropTypes.string,
    name: PropTypes.string,
  }),
  handleInputSearch: PropTypes.func.isRequired,
};

export default SearchForm;
