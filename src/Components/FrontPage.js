import React from "react";
import HoriLine from "./HoriLine";
import Padman from "./Movies/Padman";
import Name from "./Name";
import NavBar from "./NavBar";
import "./Style.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

import padmanMovie from "./Movie-Names/padman.jpeg";
import ironmanMovie from "./Movie-Names/ironman.jpeg";
import antmanMovie from "./Movie-Names/antman.jpeg";
import movie300 from "./Movie-Names/300.jpeg";
import avatarMovie from "./Movie-Names/avatar.jpeg";
import dangalMovie from "./Movie-Names/dangal.jpeg";
import mangalMovie from "./Movie-Names/mangal.jpeg";
import endgameMovie from "./Movie-Names/endgame.jpeg";
import strangeMovie from "./Movie-Names/strange.jpeg";
import matrixMovie from "./Movie-Names/matrix.jpeg";

function FrontPage() {

  let movieBio = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ipsa, voluptatum laborum rem expedita nostrum at cupiditate eum asperiores nihil consequatur alias dignissimos molestiae unde? Est, distinctio pariatur id nam facere alias aut libero quia vero, dignissimos necessitatibus, neque repellendus expedita dolor officiis aperiam reprehenderit. Aperiam assumenda eum magni mollitia, nesciunt veniam? Voluptate reiciendis minima dicta optio obcaecati impedit nesciunt maiores rerum amet reprehenderit iusto distinctio quo, aliquam excepturi ipsum doloremque dignissimos adipisci corrupti laboriosam sed non laborum quisquam. Illo impedit veniam labore doloribus voluptatem ad voluptates sed rem cupiditate tenetur, accusamus praesentium eum iure eligendi, cum, a ducimus minima! facere alias aut libero quia vero, dignissimos necessitatibus, neque repellendus expedita dolor officiis aperiam reprehenderit. Aperiam assumenda eum magni mollitia, nesciunt veniam? Voluptate reiciendis minima dicta optio obcaecati impedit nesciunt maiores rerum amet reprehenderit iusto distinctio quo, aliquam excepturi ipsum doloremque dignissimos ";

  return (
    <Router>
      <div>
        <Name />
        <div className="frontPageDiv">
          <NavBar />
          <HoriLine />
          <Routes>
            <Route path="/padman" element={<Padman movieImage={padmanMovie} movieName="PADMAN" movieBio={movieBio} />} />
            <Route path="/antman" element={<Padman movieImage={antmanMovie} movieName="ANTMAN" movieBio={movieBio} />} />
            <Route path="/300" element={<Padman movieImage={movie300} movieName={"300"} movieBio={movieBio} />} />
            <Route path="/avatar" element={<Padman movieImage={avatarMovie} movieName="AVATAR" movieBio={movieBio} />} />
            <Route path="/dangal" element={<Padman movieImage={dangalMovie} movieName={"DANGAL"} movieBio={movieBio} />} />
            <Route path="/mangal" element={<Padman movieImage={mangalMovie} movieName="MANGAL" movieBio={movieBio} />} />
            <Route path="/endgame" element={<Padman movieImage={endgameMovie} movieName={"ENDGAME"} movieBio={movieBio} />} />
            <Route path="/strange" element={<Padman movieImage={strangeMovie} movieName="STRANGE" movieBio={movieBio} />} />
            <Route path="/matrix" element={<Padman movieImage={matrixMovie} movieName={"MATRIX"} movieBio={movieBio} />} />
            <Route path="/" element={<Padman movieImage={ironmanMovie} movieName={"IRONAMAN"} movieBio={movieBio} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default FrontPage;
