import React from 'react';
import Repos from "./Repos";


const ReposList = ({repos}) => {
  return (
    <div className="grid grid-rows-1 gap-2 w-1/2">
      {repos.map((repo) => 
       <Repos key = {repo.id} repo = {repo} />)}
    </div>
  );
}

export default ReposList;