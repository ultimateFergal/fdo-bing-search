import { MagnifyingGlass } from 'phosphor-react';
import { useAtom } from 'jotai';
import { searchResultsState, searchTermState, suggestionsState } from '@/src/libs/utils';
import { getSearchResults } from '@/src/api/getSearchResults';
import { getSuggestions } from '@/src/api/getSuggestions';
import useDebounce from '@/src/hooks/useDebounce';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchTermState);
  const [, setSearchResults] = useAtom(searchResultsState);
  const [, setSuggestions] = useAtom(suggestionsState);
  // const debouncedFilterKey = useDebounce(filterKey, 300);

  const handleSearch = async () => {
    try {
      const response = await fetch(`${process.env.API_ENDPOINT}?q=${searchTerm}`, {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.API_KEY ?? ''
        }
      });
      const data = await response.json();
      setSearchResults(data.webPages.value);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchh = () => {
    getSearchResults(searchTerm).then(data => {
      console.log(data, 'search data fdo');
    });
  }

  const handleSuggestions = (searchTerm: string) => {
    if (searchTerm == '') {
      setSuggestions([])
    } else {
      setSearchTerm(searchTerm)
      getSuggestions(searchTerm).then(data => {
        console.log(data.suggestionGroups[0]?.searchSuggestions, 'suggestions to save fdo');
        data.suggestionGroups[0]?.searchSuggestions && setSuggestions(data.suggestionGroups[0]?.searchSuggestions);
      });
    }
  }


  return (
    <div className='flex border border-gray-300 rounded-xl w-full'>
      <button onClick={() => handleSearchh()}>
        <MagnifyingGlass size={32} />
      </button>
      <input
        className='focus:outline-none w-full'
        type="text"
        placeholder="Ask me anything..."
        value={searchTerm}
        onChange={(e) => {
          handleSuggestions(e.target.value)
        }}
        onFocus={(e) => {
          handleSuggestions(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar;