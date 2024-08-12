import axios from "axios";
import { useEffect, useState } from "react";

const Api = () => {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const postsPayloadData = {
    userId: 101,
    id: 101,
    title: "My title",
    body: "Some body here",
  };

// ----------- get Request ------------
  const getPosts = async () => {
    try {
      const response = await axios.get(url); //for get Request, if it is post request then axios.post() like that....
      setPosts(response.data);
    } catch (error) {
      console.log("Something went wrong while fetching posts data", error);
    }
  };

  console.log(posts);


// ----------- Post Request ------------
  const postPosts = async () => {
    try {
      const response = await axios.post(url, postsPayloadData);
      console.log("Posted the data successfully!", response.data);
    } catch (error) {
      console.log("Something went wrong while posting the posts data", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <h1>API Integration</h1>
      <ul>
        {posts &&
          posts.map((item, index) => (
            <li key={index}>{item.title}</li>
            // remember while writing the JSX inside this iterating function with item, we have to give () not {}, we should give {} if it involves javascript code
          ))}
      </ul>

      <button onClick={postPosts}>Posts Data</button>
    </>
  );
};

export default Api;
