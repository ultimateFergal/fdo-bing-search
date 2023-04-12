import { getSearchResults } from '@/src/api/getSearchResults';
import Search from '@/src/components/elements/Search';
import SearchResults from '@/src/components/elements/SearchResults';
import { searchResultsState } from '@/src/libs/utils';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

const SearchPage = () => {
    return (
        <>
            <Search />
            <SearchResults />
        </>
    );
};

export default SearchPage;