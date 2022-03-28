import './ResultListing.css';
import ResultInstance from './ResultInstance';
import StarredResults from './StarredResults';
import { useState } from 'react';

const ResultListing = (props) => {

    const [starredResults, setStarredResults] = useState([]);
    const [block, setBlock] = useState([]);
   
    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if(typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }
    
        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for(const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if(!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }
    
        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for(const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        const resultArray = Array(result)
        // for(let r in result){
        //     resultArray.push(result[r])
        // }
        return resultArray;
        // return result;
    }

    const generateResults = () => {
        // Initialize an empty array that will get each event
        const resultsToShow = [];

        // console.log("results",props.results)

        if(props.TypeOfLink==="2"){
            props.results.forEach((resultInstance, index) =>
            // Add an event's "markup" to the eventsToShow array.
            resultsToShow.push(
                <ResultInstance
                    setStarredResults={setStarredResults}
                    key={index}
                    // linkType={props.TypeOfLink}
                    word={resultInstance.word}>
                    <span>{resultInstance.word}</span>
                </ResultInstance>
            )
        );
        }else{
            const new_result = groupBy(props.results, 'numSyllables');
            console.log("props.results", props.results)
            console.log("new_result",new_result)
            new_result.forEach((resultInstance) =>
            // Add an event's "markup" to the eventsToShow array.
                Object.values(resultInstance).forEach((resultInstance2,index2) => {
                    resultsToShow.push(
                        <h3 key={index2}>
                        Syllables: {index2}
                    </h3>
                    )
                    Object.values(resultInstance2).forEach((resultInstance3,index3) =>
                        resultsToShow.push(
                            
                               
                            <ResultInstance
                            setStarredResults={setStarredResults}
                            // key={'Syllables: '+Object.keys(resultInstance2)}
                            // linkType={props.TypeOfLink}
                            key={resultInstance3.word}
                            word={resultInstance3.word}>
                            <span>{resultInstance3.word}</span>
                            </ResultInstance>
                            
                            
                        )

                    )
                })
            );

            //old version
            // new_result.forEach((resultInstance, index) =>
            // // Add an event's "markup" to the eventsToShow array.
                
            //     resultsToShow.push(
            //         <ResultInstance
            //             setStarredResults={setStarredResults}
            //             key={'Syllables: '+index}
            //             // linkType={props.TypeOfLink}
            //             word={resultInstance.word}>
            //             <span>{resultInstance.word}</span>
            //         </ResultInstance>
            //     )
                
            // );
        }

        // props.results.forEach((resultInstance, index) =>
        //     // Add an event's "markup" to the eventsToShow array.
        //     resultsToShow.push(
        //         <ResultInstance
        //             setStarredResults={setStarredResults}
        //             key={index}
        //             // linkType={props.TypeOfLink}
        //             word={resultInstance.word}>
        //             <span>{resultInstance.word}</span>
        //         </ResultInstance>
        //     )
        // );

        return resultsToShow;
        // What is happening here could be done more concisely with JavaScripts's map()
        // function (so `props.events.map()`), but that can be harder to read
        // for those not used to it, so we're using forEach() and push() instead.
    }
    // console.log(starredResults, []);
    if (props.results!='' & props.results.length > 0) {
        return (
            <>
                <StarredResults starredList={starredResults} />
                <div className='events'>
                    {/*
                   The events "markup" is generated in a function (above)
                   to make this return statement easier to read.
                */}
                    {generateResults()}
                </div>
            </>
        );
    } else if(props.link===''){
        return <h2 className='events--loading'></h2>
    }else {
        return <h2 className='events--loading'>LOADING...</h2>
    }
}

export default ResultListing;