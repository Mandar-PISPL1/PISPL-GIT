import React from "react";

export default function SimpleForm() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(formEle)
    fetch("https://script.google.com/macros/s/AKfycbyijnWnKMImlaxiw9HSH2fEjuogjjX2k2bNa0L4IjdMXr-mOx5GQ1UMLg5yl0JU1q6kQg/exec",{method: "POST",body: formData}
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Name" name="Name" type="text" />
          <input placeholder="Email" name="Email" type="email" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}