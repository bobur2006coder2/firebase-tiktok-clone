import SearchIcon from '@mui/icons-material/Search';
const Appbar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between">
      <img
        src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Logo.wine.svg"
        alt=""
        className="w-52 h-20"
      />
      <div className="w-60 px-4 py-2 rounded-full bg-gray-200 flex items-center ">
        <input type="text" name="" id="" placeholder='Search' className="w-[90%] h-full bg-red-500 p-1 bg-transparent text-black placeholder:text-black outline-none" />
        <button>
            <SearchIcon/>
        </button>
      </div>
      <div className="flex items-center gap-5">
        <a href="#!">Upload</a>
        <button className='bg-red-500 px-6 py-2 text-white rounded-md'>Login</button>
      </div>
    </div>
  );
};

export default Appbar;
