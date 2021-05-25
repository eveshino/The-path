import { useRef } from "react";

import Cart from "../ui/Card";
import classes from "./NewContentForm.module.css";

function NewContentForm(props) {
  // const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const contentData = {
      // title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddContent(contentData);
  }
  return (
    <Cart>
      <form className={classes.form} onSubmit={submitHandler}>
        {/* <div className={classes.control}>
          <label htmlFor="title">Content </label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div> */}
        <div className={classes.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Title</label>
          <input type="text" id="text" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Content</button>
        </div>
      </form>
    </Cart>
  );
}

export default NewContentForm;
