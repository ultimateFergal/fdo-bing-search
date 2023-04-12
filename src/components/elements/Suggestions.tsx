import { showSuggestionsState, suggestionsState } from "@/src/libs/utils";
import { MagnifyingGlass } from 'phosphor-react';
import { useAtom } from "jotai";
import { useRouter } from "next/router";

const Suggestions: React.FC = () => {
    const [suggestions,] = useAtom(suggestionsState);
    const [showSuggestions,] = useAtom(showSuggestionsState);
    const router = useRouter();

    const handleSearch = (searchTerm: string) => {
        router.push('/search/' + searchTerm);
    };

    return (
        suggestions.length > 0 && showSuggestions ?
            <div className="bg-white absolute top-[3.6rem] flex flex-col w-full border border-gray-300 rounded-xl p-1">
                {
                    suggestions.map((suggestion: any, index) => (
                        suggestion &&
                        <div
                            className="flex items-center my-2 px-2"
                            key={`${index} ${suggestion?.displayText}`}>
                            <button
                                onClick={() => handleSearch(suggestion?.displayText)}>
                                <div className="flex">
                                    <MagnifyingGlass className="mr-2" size={24} />
                                    {suggestion?.displayText}
                                </div>
                            </button>
                        </div>
                    ))
                }
            </div> : null
    )
}

export default Suggestions;