import React from "react";

import MoviesinDB from "./MoviesinDB";
import TotalAwards from "./TotalAwards";
import ActorsQuantity from "./ActorsQuantity";
import LastMovieinDB from "./LastMovieinDB";
import GenresinDB from "./GenresinDB";

function ContentRowTop () {
    return (
        
            
				<div className="container-fluid">
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
                        {/*<!-- Movies in Data Base -->*/}
						<MoviesinDB/>

						{/*<!-- Total awards -->*/}
						<TotalAwards/>

						{/*<!-- Actors quantity -->*/}
						<ActorsQuantity/>
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">

						{/*<!-- Last Movie in DB -->*/}
                            <LastMovieinDB/>


						{/*<!-- Genres in DB -->*/}
						<GenresinDB/>
					</div>
				</div>
				
        
    )
}
export default ContentRowTop