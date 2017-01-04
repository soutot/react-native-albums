import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

	state = { albums: [] }

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
		.then(response => this.setState({ albums: response.data }));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			//key: propriedade mandatória. Deve ser unique
			//Esta propriedade é utilizada pelo React para
			//identificar componentes únicos, desta forma
			//podendo renderizar apenas o compoenente atualizado
			//melhorando a performance da aplicação
			<AlbumDetail key={album.title} album={album} />
		);
	}

	render() {
		return <ScrollView>{this.renderAlbums()}</ScrollView>;
	}
}

export default AlbumList;
