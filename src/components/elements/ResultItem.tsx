interface ResultItemProps {
    result: any
}

const ResultItem: React.FC<ResultItemProps> = ({ result }) => {
    return (
        <div key={result?.id} className='border border-white my-10 '>
        <h2 className="font-bold">{result?.name}</h2>
        <a href={result?.url}>{result.url}</a>
        <p>{result?.snippet}</p>
    </div>
    )
}

export default ResultItem;