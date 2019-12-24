import React from "react";

import HttpService from "../../services/HttpService";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Spinner from "../../shared/components/Spinner";

class ImageSearch extends React.Component {
	state = { images: [], isLoaderActive: false };

	onSearch(e) {
		// console.log(e.target.value)
	}

	// using async and await
	// async onSubmit(searchValue) {
	onSubmit = searchValue => {
		// console.log("onSubmit", searchValue);
		this.setState({ isLoaderActive: true });
		this.getImages(searchValue);

		// console.log(this.state.images);
	};

	// ways to write async arrow function
	// async getImages(searchValue) {
	getImages = async searchValue => {
		const response = await HttpService.get("search/photos", {
			params: { query: searchValue }
		});

		// data.map((imageObj) => {
		//     <ImageList imageObj={imageObj} />
		// });

		// console.log("out of function", response.data.results)
		this.setState({
			images: response.data.results,
			isLoaderActive: false
		});
		// urls.regular
		// console.log(this.state.images);

		return response.data.results;
	};

	/* onSubmit(searchValue) {
        console.log("onSubmit", searchValue);
        axios.get("https://api.unsplash.com/search/photos", {
            params: { query: searchValue },
            headers: {
                Authorization: "Client-ID f094bbc83fa6f6c550227eb60a7e239f78c711a325e0f728c31a7156f00eca4a"
            }
        }).then(response => {

            console.log(response.data.results)
        })
        console.log("out of function")
    } */

	// getImageList(){
	//     return this.state.images.map((imageObj)=>{
	//         return (
	//         <li><img src={imageObj}> /> </li>
	//         )
	//     });
	// }

	render() {
		return (
			<div>
				{this.state.isLoaderActive ? (
					<Spinner message="Please wait fetching images" />
				) : null}
				<SearchBar
					onSearch={this.onSearch}
					onSubmit={this.onSubmit}
				/>
				<div style={{ display: "grid" }}>
					<ImageList images={this.state.images} />
				</div>
			</div>
		);
	}
}

export default ImageSearch;
