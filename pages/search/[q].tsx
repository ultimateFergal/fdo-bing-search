import Search from '@/src/components/elements/Search';
import SearchResults from '@/src/components/elements/SearchResults';
import Link from 'next/link';

const SearchPage = () => {
    return (
        <>
            <div className='flex items-center py-10 px-6'>
                <Link
                    href={`/`}
                    passHref
                    legacyBehavior>
                    <a
                        className='mr-3 text-lg '>
                        <span>Fdo Bing Search</span>
                    </a>
                </Link>
                <div className='w-1/3'>
                    <Search />
                </div>
            </div>
            <div className='w-4/5 mx-auto'>
                <SearchResults />
            </div>
        </>
    );
};

export default SearchPage;
