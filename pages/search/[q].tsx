import { getSearchResults } from '@/src/api/getSearchResults';
import Search from '@/src/components/elements/Search';
import SearchResults from '@/src/components/elements/SearchResults';
import { searchResultsState } from '@/src/libs/utils';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';

const SearchPage = () => {
    return (
        <>
        div
            <Search />
            <SearchResults />
        </>
    );
};

export default SearchPage;

export async function getStaticProps(context: any) {
    const searchTerm = context?.params.q
    const { data } = await getSearchResults(searchTerm);
    console.log(data);
    return { props: { data } };
}