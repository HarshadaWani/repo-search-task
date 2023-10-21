import React, { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import ShimmerLoading from "./ShimmerLoading";
import "./index.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [repos, setRepos] = useState([]);
  const [sortBy, setSortBy] = useState("stars"); // Default sorting by stars
  const [loading, setLoading] = useState(false);

  // Function to fetch repositories

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=${searchTerm}&sort=${sortBy}`
      );
      const data = await response.json();
      setRepos(data.items);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    }
    setLoading(false);
  };

  // Function to handle sorting
  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    if (searchTerm) {
      fetchRepos();
    } else {
      setRepos([]); // Clear the repos when the search term is empty
    }
  }, [searchTerm, sortBy]);

  return (
    <div>
      <h1>Github Repository Search</h1>
      <input
        type="text"
        placeholder="Search repositories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={handleSortChange} value={sortBy}>
        {/* ... (options for sorting) */}
        <option value="stars">Sort by Stars</option>
        <option value="watchers">Sort by Watchers</option>
        <option value="score">Sort by Score</option>
        <option value="name">Sort by Name</option>
        <option value="created_at">Sort by Created At</option>
        <option value="updated_at">Sort by Updated At</option>
      </select>
      <div
        className="repo-list"
        style={{ display: "flex", flexDirection: "row", overflowX: "auto" ,flexWrap: "wrap"}}
      >
        {loading ? (
          // Render the ShimmerLoading component while loading
          <ShimmerLoading />
        ) : (
          // Render the RepoCard components when data is available
          repos.map((repo) => (
            <RepoCard
              key={repo.id}
              repo={repo}
              style={{ flex: "0 0 auto", margin: "0px" , padding: "20px" ,flexWrap: "wrap"}}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
