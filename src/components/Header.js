import { useState } from "react";
export default function Header({ chats, setChats }) {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
    // console.log(e.target.value);
    let filteredArray = chats.filter((each) => {
      if (each.title.includes(query)) {
        return each;
      } else {
        return { ...chats };
      }
    });
    // setChats(filteredArray)
    let newArray = chats.filter((item) => {
      if (filteredArray.indexOf(item)) {
        return item;
      }
    });
    setChats(newArray);
    // console.log("filtered Array"+filteredArray)
  };

  return (
    <div className="header">
      Filter by Title / Order Id
      <div>
        <input
          value={query}
          placeholder="Start typing to search"
          className="searchaBar"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
