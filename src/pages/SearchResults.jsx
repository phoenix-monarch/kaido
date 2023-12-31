import React from "react";
import { useSearchParams } from "react-router-dom";
import { getAnimeSearch } from "../hooks/jikan";
import AnimeCollection from "../components/MainContainer/AnimeCollection";
import Genre from "../components/Genre/Genre";
import TopTenAnime from "../components/TopTen/TopTenAnime";
import LoadingSpinner from "../components/LoadingSpinner";
import Error from "../components/AnimeNotFound/Error";
export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const animeData = getAnimeSearch(
    searchParams.get("name"),
    searchParams.get("parameter")
  );

  return (
    <div
      className=" main-container d-flex  "
      style={
        window.innerWidth < 1081 ? { flexDirection: "column-reverse" } : {}
      }
    >
      <div className="sidebar-wrapper d-flex-fd-column">
        <Genre />
        <TopTenAnime />
      </div>
      <div className="collections-wrapper">
        {animeData.isLoading ? (
          <LoadingSpinner />
        ) : animeData.data?.data.length < 1 ? (
          <Error />
        ) : (
          <AnimeCollection collectionName="Search Results" data={animeData} />
        )}
      </div>
    </div>
  );
}
