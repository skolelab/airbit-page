import { Media, ListGroup } from "react-bootstrap";

const Resources = () => {
	const link_list = {
		"air:bit": {
			"href": "https://mediasite.uit.no/Mediasite/Play/a0f854b9534b4e43bbe8f80749359e3d1d",
			"author": "Bjorn Fjukstad"
		},
		"Tips og triks fra en forsker": {
			"href": "https://mediasite.uit.no/Mediasite/Play/52fa1dec22e549a78008414d15c1f15e1d",
			"author": "Bjorn Fjukstad"
		}
	}
	let array = [];

	for (var prop in link_list) {
		console.log(prop)
		array.push(<ListGroup.Item id="test">
			<Media>
	  // <a href={link_list[prop]["href"]} />

			</Media>
		</ListGroup.Item>);
	}

	console.log(array);
	return (<ListGroup>{array}</ListGroup>);
}


export default Resources
