import Button from '../NavBarButton';
export default function NavBar(props) {
	return (
		<div className=" bg-myOrange items-center border-b-2 border-black py-5">
			<div className="container max-w-screen-md  mx-auto md:flex-row flex-col gap-2 md:gap-0 flex justify-between md:px-0 px-5">
				<div>
					<Button
						slug=""
						text="Home"
						color={props.page == 'Home' ? 'blue' : 'white'}
					/>
				</div>

				<div className="flex md:flex-row flex-col gap-2">
					<Button
						slug="works"
						text="Works"
						color={props.page == 'Works' ? 'blue' : 'white'}
					/>
					<Button
						slug="blog"
						text="Blog"
						color={props.page == 'Blog' ? 'blue' : 'white'}
					/>
					<Button
						slug="contact"
						text="Contact"
						color={props.page == 'Contact' ? 'blue' : 'white'}
					/>
				</div>
			</div>
		</div>
	);
}
