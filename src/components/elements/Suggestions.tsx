import { searchTermState, suggestionsState } from "@/src/libs/utils";
import { MagnifyingGlass } from 'phosphor-react';
import { useAtom } from "jotai";
import { getSearchResults } from "@/src/api/getSearchResults";

const Suggestions: React.FC = () => {
    const [suggestions,] = useAtom(suggestionsState);
    const [searchTerm, ] = useAtom(searchTermState);
    const handleSearch = () => {
        getSearchResults(searchTerm).then(data => {
        });
      }
    return (
        suggestions.length > 0 ?
            <div className="bg-white absolute top-[10.1rem] flex flex-col w-1/3 border border-gray-300 rounded-xl p-1">
                {
                    suggestions.map((suggestion: any, index) => (
                        suggestion &&
                        <div
                            className="flex items-center"
                            key={`${index} ${suggestion?.displayText}`}>
                            <button
                                className="mr-2"
                                onClick={() => handleSearch()}>
                                <MagnifyingGlass size={24} />
                            </button>
                            {suggestion?.displayText}
                        </div>
                    ))
                }
            </div> : null
    )
}

export default Suggestions;