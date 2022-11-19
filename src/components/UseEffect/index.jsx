import { useState, useEffect } from "react";

export const UseEffect = () => {
  const [items, setItems] = useState([]);
  const [resourceType, setResourceType] = useState("posts");

  {
    /*
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  }; */
  }

  useEffect(() => {
    const fetchResourceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();

      setItems(responseJSON);
    };

    fetchResourceTypes();
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>

      {items.map((item) => {
        <p>{item.id}</p>;
      })}
    </div>
  );
};
