import axios from "axios";

export default function register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      console.log("I am sending");
      const response = await axios.post(`/api/auth/register`, {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        type: formData.get("type"),
      });
      console.log("I am sent");
      console.log(response, "i am response");
    } catch (e) {
      console.log(e, "i am error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
      <div>Register</div>
      <input name="name" type="text" className="w-80 border border-black" />
      <input name="email" type="email" className="w-80 border border-black" />
      <input
        name="password"
        type="password"
        className="w-80 border border-black"
      />

      <div className="flex">
        <input name="type" type="radio" id="user" value="user" />
        <label htmlFor="user">User</label>
      </div>

      <div className="flex">
        <input name="type" type="radio" id="author" value="author" />
        <label htmlFor="author">Author</label>
      </div>

      <div className="flex">
        <input name="type" type="radio" id="expert" value="expert" />
        <label htmlFor="expert">Subject Expert</label>
      </div>

      <button type="submit">Register</button>
    </form>
  );
}
