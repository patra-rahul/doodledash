import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-3xl">DOODLEDASH</h1>
      <form action="" className="p-4 m-4">
        <label htmlFor="name" className="m-2 p-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="border p-2 m-2"
        />

        <Link
          className="bg-black text-white px-2 py-3 m-2"
          to="about"
          type="submit"
        >
          Create Private Room
        </Link>
      </form>
    </div>
  );
};

export default Home;
