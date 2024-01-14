import React, {useState,useEffect} from "react";
import "./AddGroup.css";
import useDataFetch from "../../useDataFetch";
import axios from "axios";

function AddGroup() {

  const { data: apiResponse, loading: countriesLoading } = useDataFetch(
    'https://geodata.phplift.net/api/index.php?type=getCountries',
    []
  );

  const countries = apiResponse?.result || [];

  const { data: languages, loading: languagesLoading } = useDataFetch(
    './src/assets/lang.json',
    []
  );

  const { data: categories, loading: categoriesLoading } = useDataFetch(
    'https://localhost:7134/api/Category',
    []
  );

  const { data: applicationtype, loading: applicationTypesLoading } = useDataFetch(
    'https://localhost:7134/api/Application',
    []
  );

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedApplicationType, setSelectedApplicationType] = useState('');
  const [groupLink, setGroupLink] = useState('');
  const [tags, setTags] = useState('');
  const [groupInformation, setGroupInformation] = useState('');
  let groupName = null;
  let imageLink = null;
  let url = `${groupLink}`;


  const handleFormSubmit = async () => {

    // Fetch data based on the groupLink input
    // try {
    //   const response = await axios.get(`${groupLink}`);

    //   if (!response.data) {
    //     throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
    //   }

    //   const $ = cheerio.load(response.data);

    //   const elementsWithBothClasses = $('._9vd5._9scb');
    //   elementsWithBothClasses.each((index, element) => {
    //     console.log(`Element ${index + 1} Text: ${$(element).text()}`);
    //     groupName = $(element).text();
    //   });

    //   const imageElements = $('._9vx6');
    //   imageElements.each((index, element) => {
    //     const src = $(element).attr('src');
    //     console.log(`Image ${index + 1} Source: ${src}`);
    //     imageLink = src;
    //   });

    //   // Additional processing based on the fetched data
    // } catch (error) {
    //   console.error('Error during fetch operation:', error);
    // }

    /////////////////////////// Cherio For Server Side  ////////////////////////////////////////

//     // Make a GET request to the URL using fetch
// fetch(url)
// .then(response => {
//   // Check if the response is successful
//   if (!response.ok) {
//     throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
//   }

//   // Parse the HTML content using Cheerio
//   return response.text();
// })
// .then(html => {
//   const $ = cheerio.load(html);

//   // Fetch elements with both specified classes (_9vd5 and _9scb)
//   const elementsWithBothClasses = $('._9vd5._9scb');

//   // Log the text content of the found elements
//   elementsWithBothClasses.each((index, element) => {
//     console.log(`Element ${index + 1} Text: ${$(element).text()}`);
//   });

//   // Fetch image elements with the specified class (_9vx6)
//   const imageElements = $('._9vx6');

//   // Log the src attribute of each image element
//   imageElements.each((index, element) => {
//     const src = $(element).attr('src');
//     console.log(`Image ${index + 1} Source: ${src}`);
//   });

//   // You can further process or manipulate the found elements and image sources as needed

// })
// .catch(error => {
//   console.error('Error during fetch operation:', error);
// });

fetch(url)
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch the page. Status code: ${response.status}`);
    }

    // Parse the HTML content using DOMParser
    return response.text();
  })
  .then(html => {
    // Create a DOMParser instance and parse the HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Fetch elements with both specified classes (_9vd5 and _9scb)
    const elementsWithBothClasses = doc.querySelectorAll('._9vd5._9scb');

    // Log the text content of the found elements
    elementsWithBothClasses.forEach((element, index) => {
      console.log(`Element ${index + 1} Text: ${element.textContent}`);
    });

    // Fetch image elements with the specified class (_9vx6)
    const imageElements = doc.querySelectorAll('._9vx6');

    // Log the src attribute of each image element
    imageElements.forEach((element, index) => {
      const src = element.getAttribute('src');
      console.log(`Image ${index + 1} Source: ${src}`);
    });

    // You can further process or manipulate the found elements and image sources as needed

  })
  .catch(error => {
    console.error('Error during fetch operation:', error);
  });


    ///////////////////////////////////////////////////////////////////


    // // Prepare data for the API request
    // const requestData = {
    //   groupName: groupName, // You can replace these values with the actual form values
    //   groupLink: groupLink,
    //   country: selectedCountry,
    //   language: selectedLanguage,
    //   groupDesc: "",
    //   groupRules: groupInformation,
    //   tags: tags, // Replace with the actual tags from the form
    // };

    // // Make the API request
    // fetch(`https://localhost:7134/api/Group?catId=${selectedCategory}&appId=${selectedApplicationType}`, {
    //   method: 'POST',
    //   headers: {
    //     'Accept': '*/*',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(requestData),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle success, e.g., show a success message or redirect
    //     console.log("API response:", data);
    //   })
    //   .catch(error => {
    //     // Handle error, e.g., show an error message
    //     console.error("API error:", error);
    //   });
  };

  return (
    <div className="addgroup-main-div p-4">
      <div className="sub-div">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Add Your Group
          </label>
          <input type="text" id="groupLinkInput" class="form-control" value={groupLink} onChange={(e) => setGroupLink(e.target.value)} />
          <div id="passwordHelpBlock" class="form-text">
            Ex. https://chat.app.com/HJDK98132asSlndFIZP
          </div>
        </div>
        <div>
          <label class="form-label">Select Category</label>
          <select name="Category" className="form-select" value={selectedCategory}
           onChange={(e) => {const selectedcat = e.target.value;
           const newCat = selectedcat === "Any Category" ? "" : selectedcat;
           setSelectedCategory(newCat)}}
           >
            <option>Any Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label class="form-label">Select Country</label>
          <select name="Country" className="form-select" value={selectedCountry} 
          onChange={(e) =>{const selectedCon = e.target.value;
          const newCon = selectedCon === "Any Country" ? "" : selectedCon;
          setSelectedCountry(newCon)}}>
            <option>Any Country</option>
            {countries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label class="form-label">Select Language</label>
          <select name="Language" className="form-select" value={selectedLanguage}
           onChange={(e) =>{const selectedLang = e.target.value;
           const newLang = selectedLang === "Any Language" ? "" : selectedLang;
           setSelectedLanguage(newLang)}}>
            <option>Any Language</option>
            {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={name}>
            {name}
            </option>
            ))}
          </select>
        </div>
        <div>
          <label class="form-label">Select Application Type</label>
          <select name="Type" className="form-select" value={selectedApplicationType}
           onChange={(e) => {const selectedApptype = e.target.value;
           const newApptype = selectedApptype === "Application" ? "" : selectedApptype;
           setSelectedApplicationType(newApptype)}}>
            <option>Application</option>
            {applicationtype.map((applications) => (
              <option key={applications.id} value={applications.id}>
                {applications.name}
              </option>
            ))}
          </select>
        </div>
        <div class="mb-3">
          <input
            type="text"
            id="tagsInput"
            class="form-control"
            placeholder="Enter Tags by Comma(,) Separated (Optional)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <div id="passwordHelpBlock" class="form-text">
            Ex:- Business, Study, Comedy, Movie (Up to 100 words)
          </div>
        </div>
        <div class="mb-3">
          <textarea
            id="groupInformationInput"
            class="form-control"
            placeholder="Enter Group Information and Rules (Optional)"
            rows="3"
            value={groupInformation}
            onChange={(e) => setGroupInformation(e.target.value)}
          ></textarea>
          <div id="passwordHelpBlock" class="form-text">
            Ex:- Funny, Jokes, City, State(Up to 500 words)
          </div>
          <p>Note:- Your Group is Visible to Public Worldwide (Everyone)</p>
          <button className="btn btn-success submit-btn" onClick={handleFormSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default AddGroup;
