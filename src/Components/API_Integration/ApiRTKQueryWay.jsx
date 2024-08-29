import { useEffect } from "react";
import {
  useGetPostQuery,
  useAddPostMutation,
  useGetUserQuery
} from "../../Redux/Slices/Api/PostApiSlice";

const ApiRTKQueryWay = () => {

  // ------------- GET request ---------------
  const { data: posts } = useGetPostQuery();
  console.log("Data has been fetched with RTK query : ");
  
  useEffect(() => {
    console.log(posts);
  }, [posts]);

  // --------------- POST request -------------
  const [addpost] = useAddPostMutation();

  const postPosts = async () => {

    const postsPayloadData = {
        userId: 101,
        id: 101,
        title: "My title",
        body: "Some body here",
      };

    try {
      const response = await addpost(postsPayloadData);
      console.log("Posted the data successfully!", response.data);
    } catch (error) {
      console.log("Something went wrong while posting the posts data", error);
    }
  };


  // ------------- GET request for Users ---------------
  const { data: usersData } = useGetUserQuery();
  console.log("USers Data has been fetched with RTK query : ");
  
  useEffect(() => {
    console.log(usersData);
  }, [usersData]);


  return (
    <>
      <h1>API Integration with RTP Query</h1>
      
      <button onClick={postPosts}>Posts Data</button>

    </>
  );
};

export default ApiRTKQueryWay;
