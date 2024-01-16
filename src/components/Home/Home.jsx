import React, {useState,useEffect} from "react";
import "./Home.css";
import { Link } from "react-router-dom";
// import * as useData from '/src/useData';
import useDataFetch from "../../useDataFetch";

export default function Home() {


  const baseUri = "https://localhost:7134/"

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
    `${baseUri}api/Category`,
    []
  );

  const { data: applicationtype, loading: applicationTypesLoading } = useDataFetch(
    `${baseUri}api/Application`,
    []
  );

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [selectedApplicationType, setSelectedApplicationType] = useState('');

  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const handleDataFetch = async () => {
      try {
        const apiUrl = `${baseUri}api/Groups/id/Groups?catId=${selectedCategory}&country=${selectedCountry}&lang=${selectedLanguage}&appid=${selectedApplicationType}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setGroups(data);
        setError(null);
      } catch (error) {
        setError(error);
        console.error('Error fetching API data:', error);
      }
    };

    if (fetchData) {
      handleDataFetch();
      setFetchData(false);
    }
  }, [selectedCategory, selectedCountry, selectedLanguage, selectedApplicationType, fetchData]);

  const handleButtonClick = () => {
    setFetchData(true);
  };

  // const handleButtonClick = () => {
  //   const apiUrl = `https://localhost:7134/api/Group/id/Groups?catId=${selectedCategory}&country=${selectedCountry}&lang=${selectedLanguage}&appid=${selectedApplicationType}`;
  //   console.log(apiUrl);
  //   // Fetch data using the same custom hook
  //   const { data, error } = useDataFetch(apiUrl);
  //   if (error) {
  //     console.error('Error fetching API data:', error);
  //   } else {
  //     console.log(data);
  //     // Update the groups state with the fetched data
  //     setGroups(data);
  //   }
  // };
 

  return (
    <div className="home-main-div">
      <div className="add-btn-div">
        <Link className="btn btn-success" to="/addgroup">
          + Add Groups
        </Link>
      </div>
      <div className="select-div">
        <div>
          <label>Any Category</label>
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
          <label>Any Country</label>
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
          <label>Any Language</label>
          <select name="Language" className="form-select" value={selectedLanguage}
           onChange={(e) =>{const selectedLang = e.target.value;
           const newLang = selectedLang === "Any Language" ? "" : selectedLang;
           setSelectedLanguage(newLang)}}>
            <option>Any Language</option>
            {/* {languages.map((language) => (
              <option key={language.code} value={language.name}>
                {language.name}
              </option>
            ))} */}
            {Object.entries(languages).map(([code, name]) => (
            <option key={code} value={name}>
            {name}
            </option>
            ))}
          </select>
        </div>
        <div>
          <label>Application Type</label>
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
        <button className="btn btn-primary" onClick={handleButtonClick}>Find Group</button>
      </div>

      {/* <div> */}
      {groups.map((group) => (
      <div key={group.groupID} className="card">
        <div className="card-body">
          <img
            //src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-group-icon-png-image_5097424.jpg"
            src = {group.groupImage}
            width={"8%"}
          />
          <div className="heading-div">
            <h5>
              <a href="#">{group.groupName}</a>
            </h5>
            <div>
              <a href="#">
                <i class="bi bi-list"></i> {group.catName}
              </a>
              <a href="#">
                <i class="bi bi-globe"></i> {group.country}
              </a>
              <a href="#">
                <i class="bi bi-translate"></i> {group.language}
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center">
            <a href="#">{group.groupDesc}</a>
          </p>
          <hr />
        </div>
        <div className="ps-4 pe-4 d-flex justify-content-between">
          <a href="#">Join Group </a>
          <p className="social-icons-p">
            Share on :{" "}
            <div className="social-icons-div">
              <a href="#">
                <i class="bi bi-whatsapp"></i>
              </a>
              <a href="#">
                <i class="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i class="bi bi-telegram"></i>
              </a>
            </div>
          </p>
        </div>
      </div>
      ))}
      {/* </div> */}

      <nav aria-label="...">
        <ul class="pagination">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item" aria-current="page">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}


// Version first

  //const [groups,] = useState('');

  // const [countries, setCountries] = useState([]);
  // const [languages, setLanguages] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [applicationtype, setapplication] = useState([]);
  //const [resultgroups, setGroups] = useState([]);
  
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedLanguage, setSelectedLanguage] = useState("");
  // const [selectedApplicationType, setSelectedApplicationType] = useState("");

  // // For the Countries Data
  // useEffect(() => {
  //   // Fetch countries from the API
  //   fetch("https://geodata.phplift.net/api/index.php?type=getCountries")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Update the countries state with the fetched data
  //       setCountries(data.result);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching countries:", error);
  //     });
  // }, []);

  // // For the language Data
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./src/assets/lang.json');
  //       const data = await response.json();
  //       // Assuming the structure of your JSON file is similar to the provided example
  //       setLanguages(Object.entries(data).map(([code, name]) => ({ code, name })));
  //     } catch (error) {
  //       console.error('Error fetching JSON data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // // For Category Data
  // useEffect(() => {
  //   // Fetch categories from the local API
  //   fetch("https://localhost:7134/api/Category")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Update the categories state with the fetched data
  //       setCategories(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //     });
  // }, []);
  

  // // For the Application Data
  // useEffect(() => {
  //   // Fetch categories from the local API with JWT token
  //   fetch("https://localhost:7134/api/Application")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       // Update the categories state with the fetched data
  //       setapplication(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //     });
  // }, []);


  // // For the groups data
  // useEffect(() => {
  //   // Construct the URL with null or empty values for parameters
  //   const apiUrl = "https://localhost:7134/api/Group/id/Groups"
  //   // Fetch data from the API
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setGroups(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching groups:", error);
  //     });
  // }, []);

   // const handleButtonClick = () => {
  //   const apiUrl = `https://localhost:7134/api/Group/id/Groups?catId=${selectedCategory}&country=${selectedCountry}&lang=${selectedLanguage}&appid=${selectedApplicationType}`;
  //   console.log(apiUrl);
  //   // Fetch data using the same custom hook
  //   const { data, error } = useData.useDataFetch(apiUrl);
  //   if (error) {
  //     console.error('Error fetching API data:', error);
  //   } else {
  //     console.log(data);
  //     // Update the groups state with the fetched data
  //     setGroups(data);
  //   }
  // };



  //Version Second

    // const { data: countries, loading: countriesLoading } = useData.useCountries();
  // const { data: languages, loading: languagesLoading } = useData.useLanguages();
  // const { data: categories, loading: categoriesLoading } = useData.useCategories();
  // const { data: applicationtype, loading: applicationTypesLoading } = useData.useApplicationTypes();
  // const { data: groups, loading: groupsLoading } = useData.useGroups();

  // const [selectedCategory, setSelectedCategory] = useState('');
  // const [selectedCountry, setSelectedCountry] = useState('');
  // const [selectedLanguage, setSelectedLanguage] = useState('');
  // const [selectedApplicationType, setSelectedApplicationType] = useState('');


  // // Find button click
  // const handleButtonClick = () => {
  //   // Make the API request using the selected values
  //   const apiUrl = `https://localhost:7134/api/Group/id/Groups?catId=${selectedCategory}&country=${selectedCountry}&lang=${selectedLanguage}&appid=${selectedApplicationType}`;
  //   console.log(apiUrl);
  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setGroups(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching API data:', error);
  //     });
  // };