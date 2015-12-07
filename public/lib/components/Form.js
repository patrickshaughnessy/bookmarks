import React from "react";

// $.post("/api/links", { title: ..., url, ...} )
//   .success(data => {
//     ...
//   });

class Form extends React.Component {
  render() {
    return (
      <div className="form">
        <form>
        <input placeholder="Title" />
        <input placeholder="Url" />
        <button>Add Link</button>
        </form>
      </div>
    );
  }
}

export default Form;
