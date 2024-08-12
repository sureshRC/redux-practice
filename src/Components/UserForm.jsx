import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMainUser, addUser, setIsActive } from "../Redux/Slices/UserSlice";

const UserForm = () => {

  const data=useSelector(state=>state.MyUser.user);
  const dispatch=useDispatch();
  const isUserActive=useSelector(state=>state.MyUser.isActive);

  console.log(data);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    dispatch(setMainUser(user));
    setUser({
        name: "",
        email: "",
        password: ""
    })
    dispatch(addUser(user));
    dispatch(setIsActive());
  };
  return (
    <>
      <h2>User Form</h2>
      {
        isUserActive?<h1>Your data has been submitted!</h1>:<h1>Please Submit Your data...</h1>
      }

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UserForm;
