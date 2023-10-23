import React from "react";

function RepoCard({ repo }) {
  return (
    <div className="repo-card" style={{ margin: "5px", padding: "5px" }}>
      <img
        src={repo.owner.avatar_url}
        alt="Avatar"
        style={{ maxWidth: "120px", maxHeight: "120px" }}
      />
      <h3 style={{ maxWidth: "100px", maxHeight: "100px" }}>{repo.name}</h3>
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}>
        <span className="repo-heading">Stars:</span> {repo.stargazers_count}
      </p>
      <p
        style={{
          maxWidth: "150px",
          maxHeight: "150px",
          overflowY: "auto"
        }}
      >
        <span className="repo-heading">Description:</span> {repo.description}
      </p>
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}>
        <span className="repo-heading">Language:</span> {repo.language}
      </p>
    </div>
  );
}

export default RepoCard;
