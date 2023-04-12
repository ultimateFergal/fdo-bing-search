import { getSearchResults } from "@/src/api/getSearchResults";
import { searchResultsState } from "@/src/libs/utils";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SearchResults: React.FC = () => {
    const router = useRouter();
    const { q } = router.query;
    console.log('q:', q);
    // const { data, isLoading, error } = useQuery(['searchResults', q ?? ''], () => getSearchResults(q as string));
    // const results = data ? data?.webPages?.value : [];
    const [results, setResults ] = useState([]);

    useEffect(() => {
        q && getSearchResults(q as string).then(data => setResults(data?.webPages ? data?.webPages?.value : []))
    }, [q]);


    // console.log('data: ', data);
    return (
        q ? <div>
            {
                results && results?.map((result: any) => (
                    <div key={result?.id} className='border border-white my-2'>
                        <h2>{result?.name}</h2>
                        <a href={result?.url}>{result.url}</a>
                        <p>{result?.snippet}</p>
                    </div>
                ))}
        </div> : null
    )
}

export default SearchResults;