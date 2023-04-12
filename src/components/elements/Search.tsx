import SearchBar from "./SearchBar"
import Suggestions from "./Suggestions"

const Search: React.FC = () => {
    return (
        <div className="flex">
            <SearchBar />
            <Suggestions />
        </div>
    )
}

export default Search;