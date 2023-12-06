import React from "react";
import "./AddGroup.css";

function AddGroup() {
  return (
    <div className="addgroup-main-div p-4">
      <div className="sub-div">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Add Your Group
          </label>
          <input type="text" class="form-control" />
          <div id="passwordHelpBlock" class="form-text">
            Ex. https://chat.app.com/HJDK98132asSlndFIZP
          </div>
        </div>
        <div>
          <label class="form-label">Select Category</label>
          <select name="Category" className="form-select">
            <option>Any Category</option>
          </select>
        </div>
        <div>
          <label class="form-label">Select Country</label>
          <select name="Country" className="form-select">
            <option>Any Country</option>
          </select>
        </div>
        <div>
          <label class="form-label">Select Language</label>
          <select name="Language" className="form-select">
            <option>Any Language</option>
          </select>
        </div>
        <div>
          <label class="form-label">Select Application Type</label>
          <select name="Type" className="form-select">
            <option>Application</option>
          </select>
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Tags by Comma(,) Separated (Optional)"
          />
          <div id="passwordHelpBlock" class="form-text">
            Ex:- Funny, Jokes, City, State(Up to 100 words)
          </div>
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            placeholder="Enter Group Information and Rules (Optional)"
            rows="3"
          ></textarea>
          <div id="passwordHelpBlock" class="form-text">
            Ex:- Funny, Jokes, City, State(Up to 100 words)
          </div>
          <p>Note:- Your Group is Visible to Public Worldwide (Everyone)</p>
          <button className="btn btn-success submit-btn">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
