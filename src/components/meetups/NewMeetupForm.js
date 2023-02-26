import React, { useRef } from "react";
import classes from "../../style/NewMeetupForm.module.css";
import Card from "./../ui/Card";

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const dscriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const entredTitle = titleInputRef.current.value;
    const entredImage = imageInputRef.current.value;
    const entredAddress = addressInputRef.current.value;
    const entredDescription = dscriptionInputRef.current.value;

    const meetupData = {
      title: entredTitle,
      image: entredImage,
      address: entredAddress,
      description: entredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            ref={dscriptionInputRef}
            className={classes.noresize}
            id="description"
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
