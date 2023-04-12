import { getSearchResults } from '@/src/api/getSearchResults';
import Search from '@/src/components/elements/Search';
import SearchResults from '@/src/components/elements/SearchResults';
import { searchResultsState } from '@/src/libs/utils';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';

const SearchPage = () => {
    return (
        <>
            <div className='flex items-center'>
                <Link
                    href={`/`}
                    passHref
                    legacyBehavior>
                    <a
                        className='mr-3'>
                        <span>Fdo Bing Search</span>
                    </a>
                </Link>
                <div className='w-1/3'>
                    <Search />
                </div>
            </div>
            <SearchResults />
        </>
    );
};

export default SearchPage;
