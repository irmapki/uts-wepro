import React from "react";

const Button = (props) => {
  const { children = "??", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default function App() {
  return (
    <div className="text-3xl font-bold flex justify-center bg-slate-400 min-h-screen items-center">
      <div className="flex gap-x-5">
        <Button variant="bg-red-200">Login</Button>
        <Button variant="bg-blue-200">dulu</Button>
        <Button variant="bg-slate-200">disini</Button>
        <Button variant="bg-yellow-200">bub</Button>
        <Button></Button>
      </div>
    </div>
  );
}
