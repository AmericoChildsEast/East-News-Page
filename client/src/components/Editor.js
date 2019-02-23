import React, { Component } from 'react';
import ReactQuill from 'react-quill';

import { connect } from 'react-redux';

import * as actions from '../actions';


import 'react-quill/dist/quill.snow.css';
import './editingPage.css';


/*
 * Custom "star" icon for the toolbar using an Octicon
 * https://octicons.github.io
 */
const CustomButton = () => <span className="octicon octicon-star" />;

/*
 * Event handler to be attached using Quill toolbar module (see line 73)
 * https://quilljs.com/docs/modules/toolbar/
 */
function insertStar() {
  const cursorPosition = this.quill.getSelection().index;
  //this.quill.insertText(cursorPosition, "★");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including insertStar button and dropdowns
 */

const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-header" defaultValue={""} onChange={e => e.persist()}>
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <select className="ql-color">
      <option value="red" />
      <option value="green" />
      <option value="blue" />
      <option value="orange" />
      <option value="violet" />
      <option value="#d0d1d2" />
      <option selected />
    </select>
    <button className="ql-insertStar">
      <CustomButton />
    </button>
  </div>
);

/* 
 * Editor component with custom toolbar and content containers
 */
class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorHtml: "" };
    this.handleChange = this.handleChange.bind(this);
    this.newArticle = this.newArticle.bind(this);
  }

  async newArticle(t, h, b) {
    console.log(b);
    await this.props.addArticle({ user: localStorage.getItem('GoogleID'), title: t, head: h, txt: b });
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  render() {
    return (
      <div>

        {/* <div className="text-editor"> */}

          <CustomToolbar />
          <ReactQuill
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            modules={Editor.modules}
            formats={Editor.formats}
            theme={"snow"} // pass false to use minimal theme
            style={{
              width: "70%",
              height: "600px",
              margin: "20px 0 0 15% ",
              backgroundColor: "#FFFFFF",
              ///border:"px solid #FFFFFF",
            }}
          />
          <button onClick={() => this.newArticle("yessir", "Bobby", this.state.editorHtml)}>Add New</button>
        {/* </div> */}
      </div>
    );
  }
}

/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      insertStar: insertStar
    }
  },
  clipboard: {
    matchVisual: false,
  }
};

/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color"
];

/* 
 * PropType validation
 */
// Editor.propTypes = {
//   placeholder: PropTypes.string
// };


export default connect(null, actions)(Editor);