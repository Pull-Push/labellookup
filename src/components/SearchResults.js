import { useEffect, useState } from "react";
import { details } from "./data/music";

export default function SearchResults(props) {
	let artistNames = [];
	let trackNames = [];
	let albumNames = [];
	const [artistData, setArtistData] = useState({ data: null });

	useEffect(() => {
		setArtistData(props);
	}, [props]);

    function handleDetails(e){
        alert(`clicked ${e.target.innerText}`)
        console.log(e.target.innerText)
    }


	if (artistData.data !== null) {
		console.log("found artist data");
		for (let x of artistData.data.artists.items) {
			artistNames.push(x.name);
			// console.log(x.name)
		}
		for (let y of artistData.data.albums.items) {
			albumNames.push(y.name);
			// console.log('albums', y.name)
		}
		for (let z of artistData.data.tracks.items) {
			trackNames.push(z.name);
			// console.log('tracks', z.name)
		}
	}

	if (artistData.data == null) {
		return (
			<>
				<h4>Nothing Found</h4>
			</>
		);
	} else
		return (
			<>
				<h2>Search Results</h2>
                <div className="resultsDiv">
				<div className="artistDisplay">
					<h3>Artist Results:</h3>
                        <h4>TOP ARTIST: <span onClick={handleDetails}>{artistNames[0]}</span></h4>
					<ul>
						{artistNames.map((item, index) => (
                            <li key={index} onClick={handleDetails}> {item} </li>
						))}
					</ul>
                    <button>Prev Page</button>
                    <button>Next Page</button>
				</div>
				<div className="albumDisplay">
					<h3>Album Results:</h3>
                        <h4>TOP ALBUM: <span onClick={handleDetails}>{albumNames[0]}</span></h4>
					<ul>
						{albumNames.map((item, index) => (
                            <li key={index} onClick={handleDetails}> {item} </li>
						))}
					</ul>
                    <button>Prev Page</button>
                    <button>Next Page</button>
				</div>
				<div className="trackDisplay">
					<h3>Track Results</h3>
                        <h4>TOP TRACK: <span onClick={handleDetails}>{trackNames[0]}</span></h4>
					<ul>
						{trackNames.map((item, index) => (
							<li key={index} onClick={handleDetails}>{item}</li>
						))}
					</ul>
                    <button>Prev Page</button>
                    <button>Next Page</button>
				</div>
                </div>
			</>
		);
}
