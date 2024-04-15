import SearchIcon from "@/app/components/ui/SearchIcon";
import Button from "./ui/Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-3xl font-bold">LG</h1>
        <SearchIcon />
        <div className=" hidden md:block">Explore</div>
      </div>

      <div className="flex gap-4">
        <Button
          value={{
            name: "Start free trial",
            className:
              "bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded",
          }}
        />
        <Button
          value={{
            name: "Log in",
            className: " hover:text-blue-700",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
