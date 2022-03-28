import './ResultBoard.css'
import ResultListing from './ResultListing';
import { useEffect, useState } from "react";

const ResultBoard = (props) => {

    // const [rhymeResults, setRhymeResults] = useState([]);
    const {searchLink,linkType} = props;

    // console.log("searchLink",searchLink)


    useEffect(() => {
        if(searchLink!=''){
            props.setRhymeResults('')
            fetch(searchLink)
            .then((response) => response.json())
            .then((data) => props.setRhymeResults(Object.values(data)));
        }
        // fetch(searchLink)
        //     .then((response) => response.json())
        //     .then((data) => setRhymeResults(Object.values(data)));
    },[searchLink]);

    // console.log("rhymeResults: ")
    // console.log(rhymeResults)

    return (
        <div>
            <ResultListing results={props.rhymeResults} link={searchLink} TypeOfLink={linkType}/>
        </div>
    );
}

export default ResultBoard;