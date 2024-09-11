import { useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="text-xl uppercase mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] bg-red-400 relative group "
              onClick={() => handleTrailer(item.id)}
            >
              <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 cursor-pointer">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-2">
                  <p className="uppercase text-md">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
MovieSearch.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
export default MovieSearch;
