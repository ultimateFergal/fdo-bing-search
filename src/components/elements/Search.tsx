import SearchBar from "./SearchBar"
import Suggestions from "./Suggestions"

const Search: React.FC = () => {
    return (
        <div className="rlex relative">
            <SearchBar />
            <Suggestions />
        </div>
    )
}

export default Search;