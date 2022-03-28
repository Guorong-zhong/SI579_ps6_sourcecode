import './StarredResults.css'

const StarredResults = (props) => {
    // This is equivalent to:
    // const starredList = props.starredList;
    console.log('props in starred results', props);
    const { starredList } = props;

    const starredResultsOutput = () => {
        if (starredList.length === 0) {
            return 'No saved results';
        } else {
            return starredList.join(', ')
        }
    }

    return (
        <div className="event starred-events">
            <h3>SAVED RESULTS: {starredResultsOutput()}</h3>
            
        </div>)
}

export default StarredResults;