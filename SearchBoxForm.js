import './SearchBoxForm.css'
import { useState, useRef } from 'react';


function SearchBoxForm(props) {
    const formRef = useRef(); // (1) <-- React ref for form DOMNode
    const [theInput, setTheInput] = useState('');
    function handlesubmit_task1(event) {
      event.preventDefault();
      const { value } = formRef.current.myInput; // (4) <-- access form inputs by name

      // ...anything you need to do with form fields
      // console.log("handler 1", value);

      props.setLink(getDatamuseRhymeUrl(formRef.current.myInput))
      props.setType("1")
      props.setRhymeResults('')

    //   formRef.current.reset(); // (5) <-- reset form if necessary
    }

    function handlesubmit_task2(event) {
      event.preventDefault();
      const { value } = formRef.current.myInput;

      // console.log("handler 2", value);

      props.setLink(getDatamuseSimilarToUrl(formRef.current.myInput))
      props.setType("2")
      props.setRhymeResults('')

    //   formRef.current.reset();
    }

    function getDatamuseRhymeUrl(rel_rhy) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'rel_rhy': rel_rhy.value})).toString()}`;
    }

    function getDatamuseSimilarToUrl(ml) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({'ml': ml.value})).toString()}`;
    }

    return (
      <>
        {/* (2) <-- Attach ref to element */}
        <form ref={formRef}>
          <input
            type='text'
            name="myInput"
            value={theInput}
            onChange={(e) => setTheInput(e.target.value)}
          />
          {/* <input name="myInput" type="text" /> */}
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handlesubmit_task1} // (3) <-- Attach submit handler 1
          >
            Show rhyming words
          </button>
          <button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handlesubmit_task2} // (3) <-- Attach submit handler 2
          >
            Show synonyms
          </button>
        </form>
      </>
    );
  }

export default SearchBoxForm;