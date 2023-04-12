import { MagnifyingGlass } from 'phosphor-react';
import { useAtom } from 'jotai';
import { showSuggestionsState, suggestionsState } from '@/src/libs/utils';
import { getSuggestions } from '@/src/api/getSuggestions';
import useDebounce from '@/src/hooks/useDebounce';
import { useRouter } from 'next/router';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useState } from 'react';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [, setShowSuggestions] = useAtom(showSuggestionsState);
  const [, setSuggestions] = useAtom(suggestionsState);
  const router = useRouter();
  const debouncedSearchTerm = useDebounce(searchTerm, 100);
  const { data } = useQuery(['searchResults', searchTerm], () => getSuggestions(debouncedSearchTerm));

  const handleSearch = () => {
    searchTerm != '' && router.push('/search/' + searchTerm);
  }

  const handleSuggestions = useCallback((searchTerm: string) => {
    if (searchTerm == '') {
      setSuggestions([])
      setShowSuggestions(false)
      setSearchTerm('')
    } else {
      setSearchTerm(searchTerm)
      setShowSuggestions(true)
      getSuggestions(searchTerm).then(data => {
        setShowSuggestions(true)
        data.suggestionGroups[0]?.searchSuggestions && setSuggestions(data.suggestionGroups[0]?.searchSuggestions);
      });
    }
  }, [setShowSuggestions, setSuggestions])


  return (
    <div className='flex border border-gray-300 rounded-xl w-full py-3 px-3 bg-white'>
      <button onClick={() => handleSearch()}>
        <MagnifyingGlass size={32} />
      </button>
      <input
        className='focus:outline-none w-full rounded-xl ml-2'
        type="text"
        placeholder="Ask me anything..."
        value={searchTerm}
        onChange={(e) => {
          handleSuggestions(e.target.value)
        }}
        onFocus={(e) => {
          handleSuggestions(e.target.value)
        }}
        onBlur={() => setShowSuggestions(false)}
        onKeyDown={(e) => {
          if (e.code == "Enter") {
            setShowSuggestions(false)
            router.push('/search/' + searchTerm);
          }

          if (e.code == "Escape") {
            setShowSuggestions(false)
          }
        }}
      />
    </div>
  )
}

export default SearchBar;