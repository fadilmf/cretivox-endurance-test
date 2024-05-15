"use client";

export default function Template({ children }) {
  return (
    <div>
      <div className="absolute w-full h-screen flex flex-col text-9xl font-bold">
        <div id="intro-top" className="bg-white h-full w-full">
          <h1 className="mt-10 ms-10">Fadil</h1>
        </div>
        <div
          id="intro-bottom"
          className="flex justify-end items-end bg-black h-full w-full text-white"
        >
          <h1 className="mb-10 me-10">Fauzan</h1>
        </div>
      </div>
      {children}
    </div>
  );
}
