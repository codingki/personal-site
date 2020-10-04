import React from 'react';
import { View } from 'react-native';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';
import Layout from '../../components/global/Layout';
import Wrapper from '../../components/global/Wrapper';
import Button from '../../components/button/Tag';
export default function App({ navigation }) {
	return (
		<Layout navigation={navigation}>
			<Wrapper>
				<View
					style={{
						flex: 1,
						backgroundColor: 'white',
						borderColor: Colors.black,
						borderWidth: 3,
						borderBottomWidth: 6,
						borderRadius: 12,
						marginTop: 50,
					}}
				>
					<View
						style={{
							backgroundColor: Colors.blue,
							borderTopRightRadius: 6,
							borderTopLeftRadius: 6,
							padding: 20,
							borderBottomWidth: 3,
							borderColor: Colors.black,
						}}
					>
						<Text bold h3 style={{ color: 'white' }}>
							Making a design system from scratch system from scratch
						</Text>
					</View>

					<View style={{ flexDirection: 'row' }}>
						<View
							style={{
								backgroundColor: Colors.orange,
								padding: 20,
								paddingVertical: 10,
								borderBottomWidth: 3,
								borderColor: Colors.black,
								borderRightWidth: 3,
								borderBottomRightRadius: 12,
							}}
						>
							<Text medium style={{ color: 'white', fontSize: 14 }}>
								12 Feb 2020 | Design Patterns
							</Text>
						</View>
					</View>

					<View style={{ padding: 20 }}>
						<Text
							p
							style={{
								lineHeight: 29,
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
							tristique quam euismod leo, pellentesque ultricies lacinia
							malesuada. Leo quam iaculis mattis mattis aliquet tellus
							scelerisque faucibus arcu. Elit interdum commodo laoreet ultrices
							nisl platea tristique sit. Diam eget erat habitant feugiat
							ridiculus. Turpis nulla tristique gravida potenti varius imperdiet
							eget volutpat. Eget et arcu commodo in eget aliquam arcu. Etiam
							consectetur quis ridiculus suscipit rhoncus faucibus. Viverra ut
							diam diam neque. Posuere vel aliquam, malesuada vulputate vitae
							luctus. Est blandit ac elementum condimentum urna in. Quis congue
							sit sit facilisi non blandit auctor. Donec facilisis eu turpis
							tellus. Eu, ultrices tellus eget odio etiam elementum orci
							scelerisque pulvinar. Sit mauris accumsan ornare elementum
							consectetur fermentum cras. Sed lacinia nibh interdum proin tellus
							nulla. Dui congue pellentesque ultricies etiam. Augue imperdiet
							duis nunc, nisl lorem pulvinar in risus et. Vulputate sapien
							malesuada molestie magna. Etiam mattis etiam tellus sed malesuada.
							Tincidunt imperdiet at euismod dictum fermentum, augue duis felis.
							Consequat in imperdiet tortor diam vel imperdiet eu diam. Nunc
							ultrices augue nulla egestas nibh orci, donec. Laoreet cras
							rhoncus morbi id. Quam scelerisque duis neque, etiam at potenti eu
							egestas. Metus morbi vitae, facilisis diam. Netus quisque id sem
							vitae turpis iaculis integer sed adipiscing. Tincidunt ipsum ut
							suspendisse tellus nam. Justo rutrum scelerisque ligula amet
							bibendum malesuada. Semper diam libero odio orci integer
							adipiscing varius mauris. Euismod nisl iaculis pharetra, commodo
							in nisl maecenas. Mattis in neque, tempor nulla aliquam. Dictum
							eros pellentesque donec dignissim nam fermentum aliquam. Id
							gravida quam arcu massa a eu. Diam sollicitudin morbi lectus
							penatibus vulputate amet. Dui nulla mollis semper cursus ultrices.
							Tristique vitae turpis nunc, aliquam diam amet aliquam. Diam vel
							blandit leo nulla pretium tortor vel. Magna volutpat id est neque
							vitae nisi ultrices maecenas porttitor. A dictumst habitasse
							luctus in eget tempor. Id ut ut vitae viverra varius egestas
							proin. Id arcu ut sed aliquam euismod elit etiam. Amet enim
							aliquet tortor eget. Rhoncus nibh nulla diam amet. Morbi in nibh
							faucibus rhoncus vel, et. Ipsum gravida aliquam at turpis est.
							Mauris morbi sit vel sed ullamcorper risus risus orci.
						</Text>
						<View style={{ flexDirection: 'row', marginTop: 20 }}>
							<Button text="Redesign" orange />
							<Button text="Redesign" orange />
						</View>
					</View>
				</View>
			</Wrapper>
		</Layout>
	);
}
