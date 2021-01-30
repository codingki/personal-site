import Icon from '../IconButton';
import Head from 'next/head';
export default function NavBar() {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
					integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
					crossorigin="anonymous"
				/>
			</Head>
			<div className=" bg-myOrange items-center border-t-4 border-black py-5 ">
				<div className="container max-w-screen-md  mx-auto flex-row gap-2 flex justify-center md:justify-end md:px-0 px-5">
					<Icon url="https://github.com/codingki" color="white">
						<i className="fab fa-github fa-lg"></i>
					</Icon>
					<Icon url="https://twitter.com/kikiding" color="white">
						<i className="fab fa-twitter fa-lg"></i>
					</Icon>
					<Icon url="https://www.instagram.com/kikiding/" color="white">
						<i className="fab fa-instagram fa-lg"></i>
					</Icon>
					<Icon url="https://medium.com/@kikidding" color="white">
						<i className="fab fa-medium fa-lg"></i>
					</Icon>
				</div>
			</div>
		</>
	);
}
