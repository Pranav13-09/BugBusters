import { signIn } from "next-auth/react";

export default function login() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      type: formData.get("type"),
      redirect: false,
    });

    if (!response?.error) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full items-center">
      <div>Login</div>
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

      <button>Submit</button>
    </form>
  );
}
