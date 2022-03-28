import './ResultStarButton.css'

const ResultStarButton = (props) => {
    const { tossedOverIsStarred, handMeDownSetStarStateFunction, setStarredResults, word} = props;

    const getStarMessage = () => {
        if (tossedOverIsStarred) {
            return '(Has Saved)';
        } else {
            return '(Save)';
        }
    };

    const starButtonHandler = (e) => {
        setStarredResults((previousList) => {
            if (tossedOverIsStarred) {
                return previousList.filter((value) => value !== word);
            } else {
                // Would also work
                // previousList.push(title);
                // return previousList
                return [...previousList, word];
            }
        });
        handMeDownSetStarStateFunction((previousValue) => {
            return !previousValue;
        });
    };

    return (
      <button onClick={starButtonHandler} className={tossedOverIsStarred ? 'starred' : 'not-starred'}>
          <div>{getStarMessage()}</div>
      </button>
    );
}

export default ResultStarButton;