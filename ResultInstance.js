import './ResultInstance.css';
import ResultStarButton from "./ResultStarButton";
import {useState} from "react";

// This exists as a simple example of a property that can have content
// inside it.
// This can be used like
// <EventInstance>
//   Whatever content, components/tags you want...
// </EventInstance>
// The stuff passed between the opening and closing tags of EventInstance
// are available here as `props.children`.
const ResultInstance = (props) => {
    const [isStarred, setIsStarred] = useState(false);


    return <div className={`event ${isStarred ? 'starred-event' : 'not-starred-event'}`}>
        {props.children}
        {/*
          We pass the state (isStarred) AND the state update function (setIsStarred) to
          EventStarButton so that component can change that state in a way that communicates the
          change back to this component
        */}
        <ResultStarButton
            tossedOverIsStarred={isStarred}
            handMeDownSetStarStateFunction={setIsStarred}
            { ...props }
        />
    </div>
}

export default ResultInstance;