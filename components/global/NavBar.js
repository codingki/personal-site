import Link from 'next/link';
import Button from '../NavBarButton';
export default function NavBar(props) {
	return (
		<div className=" bg-myOrange items-center border-b-2 border-black py-5">
			<div className="container max-w-screen-md  mx-auto md:flex-row flex-col gap-2 md:gap-0 flex justify-between md:px-0 px-5">
				<div>
					<Link as={`/`} href="/">
						<a>
							<Button
								slug=""
								text="Home"
								color={props.page == 'Home' ? 'blue' : 'white'}
							/>
						</a>
					</Link>
				</div>

				<div className="flex md:flex-row flex-col gap-2">
					<Link as={`/blog`} href="/works">
						<a>
							<Button
								slug="works"
								text="Works"
								color={props.page == 'Works' ? 'blue' : 'white'}
							/>
						</a>
					</Link>
					<Link as={`/blog`} href="/blog">
						<a>
							<Button
								slug="blog"
								text="Blog"
								color={props.page == 'Blog' ? 'blue' : 'white'}
							/>
						</a>
					</Link>

					<a href="mailto: codingki@gmail.com">
						<Button
							slug="contact"
							text="Contact"
							color={props.page == 'Contact' ? 'blue' : 'white'}
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
