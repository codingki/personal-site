import Head from 'next/head';
import NavBar from '../components/global/NavBar';
import Image from 'next/image';
import Button from '../components/Button';
import Icon from '../components/IconButton';
import Footer from '../components/global/Footer';
import moment from 'moment';
import { getHome } from './api/fetch';
import Link from 'next/link';
export default function Home({ data }) {
	const blogs = data.allBlogs;
	const works = data.allWorks;
	return (
		<div>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
					key="viewport"
				/>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.png" />
				<title>Nur Fikri | React Native Developer</title>
				<meta
					name="description"
					content="Im a guy that can code and design, but internet makes me can do
								anything. Crafting beautiful apps with React and ❤️"
				/>
				<meta
					property="og:title"
					content="Nur Fikri | React Native Developer"
				/>
				<meta property="og:url" content={`https://kikiding.space/`} />
				<meta
					property="og:image"
					content={`https://kikiding.space/api/social-image?title=Hi, I am Kiki&description=Im a guy that can code and design, but internet makes me can do
					anything. Crafting beautiful apps with React&path=https://kikiding.space/`}
				/>
			</Head>

			<NavBar page="Home" />
			<div className=" bg-myYellow items-center  py-5 ">
				<div className="container max-w-screen-md  mx-auto md:px-0 px-5">
					<div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between  ">
						<div className="col-span-12 md:col-span-8 sm:py-10 sm:px-8 p-5 ">
							<p className="font-bold sm:text-4xl text-2xl  text-black">
								Hi, I am Kiki,
							</p>
							<p className="font-semibold sm:text-2xl text-xl text-black">
								Creative Technologist
							</p>
							<p className="font-normal sm:text-xl text-md text-black mt-2">
								Im a guy that can code and design, but internet makes me can do
								anything. Crafting beautiful apps with React and ❤️
							</p>
							<iframe
								className="mt-4"
								src="https://ghbtns.com/github-btn.html?user=codingki&repo=personal-site&type=star&count=true&size=large"
								frameBorder="0"
								scrolling="0"
								width="170"
								height="30"
								title="GitHub"
							></iframe>
						</div>
						<div className="col-span-4 m-auto hidden md:inline mt-10 ">
							<img className="" src="/me.png" />
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-myYellow items-center  py-5">
				<div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-5">
					<Button text="Recent Posts" color="blue" />
					<Link as={`/blog`} href="/blog">
						<a>
							<Button text="View All" color="white" />
						</a>
					</Link>
				</div>
			</div>
			<div className=" bg-myYellow items-center  pt-0 pb-5">
				<div className="container max-w-screen-md  mx-auto md:flex-row flex-col gap-4 flex justify-between md:px-0 px-5">
					{blogs.map((item) => (
						<div
							key={item.id}
							className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
						>
							<Link as={`/blog/${item.slug}`} href={'/blog/[slug]'}>
								<a>
									<h1
										className="font-bold sm:text-2xl text-xl hover:underline"
										style={{
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											display: '-webkit-box',
											WebkitLineClamp: 1,
											WebkitBoxOrient: 'vertical',
										}}
									>
										{item.title}
									</h1>
								</a>
							</Link>
							<p className="sm:text-lg text-md sm:mt-2 mt-1 ">
								{moment(item.date).format('DD MMM YYYY')} | {item.categories}
							</p>
							<p
								className="sm:text-lg text-md sm:mt-2 mt-1 "
								style={{
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: 3,
									WebkitBoxOrient: 'vertical',
								}}
							>
								{item.excerpt}
							</p>
						</div>
					))}
				</div>
			</div>

			<div className=" bg-myYellow items-center  py-5 ">
				<div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-5">
					<Button text="Recent Works" color="blue" />
					<Link as={`/works`} href={'/works'}>
						<a>
							<Button text="View All" color="white" />
						</a>
					</Link>
				</div>
			</div>
			<div className=" bg-myYellow items-center  pt-0 pb-20">
				<div className="container max-w-screen-md  mx-auto  flex-col gap-4 flex justify-between md:px-0 px-5">
					{works.map((item, index) => {
						const cat = item.categories.split(', ');

						return (
							<div
								key={index}
								className=" flex-1 flex-row flex duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
							>
								<div className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1">
									<Link
										key={item.id}
										as={`/works/${item.slug}`}
										href={'/works/[slug]'}
									>
										<a>
											<h1 className="font-bold sm:text-2xl text-xl hover:underline">
												{item.title}
											</h1>
										</a>
									</Link>
									<p className="sm:text-lg text-md sm:mt-2 mt-1 ">
										{item.excerpt}
									</p>
									<div className="flex-row flex flex-wrap mt-2 gap-2">
										{cat.map((item, index) => (
											<Button key={index} text={item} color="orange" />
										))}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			<Footer />
		</div>
	);
}
export async function getServerSideProps() {
	const data = (await getHome()) || [];

	return {
		props: { data },
	};
}
