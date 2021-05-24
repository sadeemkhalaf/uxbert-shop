import React from 'react';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
              href="#pablo"
            >
              <h1 className="text-2xl font-black">Shop. Ship.</h1>
            </a>

            <button
              className="font-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center' +
              (navbarOpen ? ' flex' : ' hidden')
            }
            id="example-navbar-danger"
          >
            <div className="lg:ml-auto" />
            <div className="rounded relative w-full md:w-8/12 lg:w-1/3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-500 absolute ml-4 inset-0 m-auto icon icon-tabler icon-tabler-search"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={10} cy={10} r={7} />
                <line x1={21} y1={21} x2={15} y2={15} />
              </svg>
              <input
                className="border border-gray-100 focus:outline-none focus:border-brand rounded-full w-full text-sm bg-gray-200 text-gray-500 pl-12 sm:pl-10 md:pl-12 py-3 pr-4"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <a className="flex items-center mx-2">
            <div className="flex min-w-4 h-6 font-semibold text-white bg-pink-500 mx-1 rounded text-xs text-center p-1">
              3
            </div>
            <span className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bag"
                viewBox="0 0 16 16"
              >
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
              </svg>
            </span>
          </a>
        </div>
        <div className="w-9/12 h-0.5 bg-gray-100 rounded-full my-4" />
      </nav>
    </>
  );
}
