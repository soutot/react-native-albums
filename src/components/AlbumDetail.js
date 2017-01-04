import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// {album} é equivalente a props.album
const AlbumDetail = ({ album }) => {
	//cria constantes à partir das propriedades do album
	const { title, artist, image, thumbnail_image, url } = album;
	const { 
		headerContentStyle, 
		headerTextStyle, 
		thumbnailStyle, 
		thumbnailContainerStyle,
		imageStyle } = style;

	return (
		<Card>
			<CardSection>
				<View style={thumbnailContainerStyle}>
					<Image 
						style={thumbnailStyle} 
						source={{ uri: thumbnail_image }} 
					/>
				</View>
				<View style={headerContentStyle}>
					<Text style={headerTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>

			<CardSection>
				<Image style={imageStyle} source={{ uri: image }} />
			</CardSection>

			<CardSection>
				<Button onPress={() => Linking.openURL(url)}>
					Buy Now!
				</Button>
			</CardSection>
		</Card>
	);
};

const style = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTextStyle: {
		fontSize: 18
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
};

export default AlbumDetail;
