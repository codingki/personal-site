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

				<link rel="icon" href="/favicon.png" />
				<title>Nur Fikri | Front-end Developer</title>
				<meta
					name="description"
					content="Im a guy that can code and design, but internet makes me can do
								anything. Crafting beautiful apps with React and ❤️"
				/>
				<meta property="og:title" content="Nur Fikri | Front-end Developer" />
				<meta property="og:url" content={`https://kikiding.space/`} />
				<meta
					property="og:image"
					content={`https://kikiding.space/api/social-image?title=Hi,%20I%20am%20Kiki&description=Im%20a%20guy%20that%20can%20code%20and%20design,%20but%20internet%20makes%20me%20can%20do%20anything.%20Crafting%20beautiful%20apps%20with%20React&path=https://kikiding.space/`}
				/>
			</Head>

			<NavBar page="Home" />
			<div className=" bg-myYellow items-center  py-5 ">
				<div className="container max-w-screen-md  mx-auto md:px-0 px-4">
					<div className="mt-5 bg-white  border-2 border-b-8 border-black rounded-xl grid grid-cols-12  justify-between duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 ">
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
							<div className="flex ">
								<a
									href={`https://twitter.com/intent/tweet?url=https://kikiding.space/&text=@kikiding's website`}
									target="_blank"
								>
									<div
										className=" font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
										style={{ backgroundColor: 'rgb(29, 161, 242)' }}
									>
										<p className="  text-center">
											<i
												className="fab fa-twitter fa-md"
												style={{ color: 'white' }}
											></i>{' '}
											Share this to twitter
										</p>
									</div>
								</a>
							</div>
						</div>
						<div className="col-span-4 m-auto hidden md:inline mt-12 ">
							<img className="" src="/me.png" />
						</div>
					</div>
				</div>
			</div>

			<div className=" bg-myYellow items-center  py-5">
				<div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-4">
					<Button text="Recent Posts" color="blue" />
					<Link as={`/blog`} href="/blog">
						<a>
							<Button text="View All" color="white" />
						</a>
					</Link>
				</div>
			</div>
			<div className=" bg-myYellow items-center  pt-0 pb-5">
				<div className="container max-w-screen-md  mx-auto md:flex-row flex-col gap-4 flex justify-between md:px-0 px-4">
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
				<div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-4">
					<Button text="Recent Works" color="blue" />
					<Link as={`/works`} href={'/works'}>
						<a>
							<Button text="View All" color="white" />
						</a>
					</Link>
				</div>
			</div>
			<div className=" bg-myYellow items-center  pt-0 pb-20">
				<div className="container max-w-screen-md  mx-auto  flex-col gap-4 flex justify-between md:px-0 px-4">
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
										{cat.map((x, index) => (
											<Link
												key={index}
												as={`/works/${item.slug}`}
												href={'/works/[slug]'}
											>
												<a>
													<Button text={x} color="orange" />
												</a>
											</Link>
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
export async function getStaticProps() {
	const data = (await getHome()) || [];

	return {
		props: { data },
	};
}
