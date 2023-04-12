import { getSearchResults } from "@/src/api/getSearchResults";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import ResultItem from "./ResultItem";

const SearchResults: React.FC = () => {
    const router = useRouter();
    const { q } = router.query;

    const { data } = useQuery(['searchResults', q], () => getSearchResults(q as string));

    return (
        <div>
            {
                data?.webPages && data?.webPages?.value?.map((result: any, index: number) => (
                    <ResultItem key={index} result={result} />
                ))}
        </div>
    )
}

export default SearchResults;