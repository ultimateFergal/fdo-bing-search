import { getSearchResults } from "@/src/api/getSearchResults";
import { searchResultsState } from "@/src/libs/utils";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

const SearchResults: React.FC = () => {
    const router = useRouter();
    const { q } = router.query;
    console.log('q:', q);
    const { data, isLoading, error } = useQuery(['searchResults', q], () => getSearchResults(q as string));

    console.log('data: ', data);
    return(
        <div>
            {
      data?.webPages?.value?.map((result: any) => (
        <div key={result?.id} className='border border-white my-2'>
          <h2>{result?.name}</h2>
          <a href={result?.url}>{result.url}</a>
          <p>{result?.snippet}</p>
        </div>
            ))}
        </div>
    )
}

export default SearchResults;