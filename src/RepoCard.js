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
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}><span className="repo-heading">Watchers:</span> {repo.watchers_count}
      </p>
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}><span className="repo-heading">Score:</span> {repo.score}</p>
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}><span className="repo-heading">Created At: </span>{new Date(repo.created_at).toDateString()}</p>
      <p style={{ maxWidth: "100px", maxHeight: "100px" }}><span className="repo-heading">Updated At:</span> {new Date(repo.updated_at).toDateString()}</p>
    </div>
  );
}

export default RepoCard;
