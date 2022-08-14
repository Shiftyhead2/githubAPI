import React, {useState} from 'react';

const SearchForm = ({setSearchText}) => {

  const[values,setValues] = useState("");

  /* Što god da je upisano u input fieldu spremi u searchText(username) prop i vrati values prop nazad na prazan string. Ionako što renderiram drugi komponent nakon što sam spremio values u searchText(username) ovo vraćanje sam napravio sam zato što sam mogao. Nije zapravo potrebno uopće vraćati values u prazan string. Barem mislim da nije potrebno. */
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchText(values);
    setValues("");
  }
  
  return (
    <div className="m-5 flex flex-col justify-center gap-5">
      <h1 className="text-4xl">Github Search API</h1>
      <form className=" flex flex-col gap-2" onSubmit={handleSubmit}>
        <input className="px-4 py-2 mx-6 w-60 outline-none bg-stone-300 rounded text-black placeholder-black" type="text" placeholder='Search a user' value={values} onChange={(e) => {setValues(e.target.value)}} />
        <button className="bg-lime-500 mx-6 text-gray-800 py-2 px-3 rounded w-60 hover:bg-lime-400 hover:text-gray-900">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;