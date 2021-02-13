import Link from 'next/link';
import Button from '../NavBarButton';
import { useState } from 'react';

export default function NavBar(props) {
	const [toggle, setToggle] = useState(false);
	return (
		<div className=" bg-myOrange items-center border-b-2 border-black py-5">
			<div className="container max-w-screen-md  mx-auto md:flex-row flex-col md:gap-2 gap-3 flex justify-between md:px-0 px-4">
				<div className={toggle ? 'hidden ' : 'md:hidden flex'}>
					<a
						onClick={() => {
							setToggle(!toggle);
						}}
					>
						<div className="bg-white font-bold  text-black sm:text-lg text-md px-4 py-2 rounded-xl border-2 border-b-4 border-black transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100">
							<p className=" text-center">
								<i className="fas fa-bars fa-lg"></i>
							</p>
						</div>
					</a>
				</div>
				<div
					className={
						toggle
							? 'flex md:flex-row flex-col md:gap-2 gap-3'
							: 'md:flex hidden md:flex-row flex-col md:gap-2 gap-3'
					}
				>
					<Link as={`/`} href="/">
						<a>
							<Button
								slug=""
								text="Home"
								color={props.page == 'Home' ? 'blue' : 'white'}
							/>
						</a>
					</Link>
					<Link as={`/now`} href="/now">
						<a>
							<Button
								slug=""
								text="Now"
								color={props.page == 'Now' ? 'blue' : 'white'}
							/>
						</a>
					</Link>
				</div>

				<div
					className={
						toggle
							? ' flex md:flex-row flex-col md:gap-2 gap-3'
							: ' md:flex hidden md:flex-row flex-col md:gap-2 gap-3'
					}
				>
					<Link as={`/works`} href="/works">
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
