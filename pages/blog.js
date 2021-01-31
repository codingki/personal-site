import Head from 'next/head';
import NavBar from '../components/global/NavBar';
import Image from 'next/image';
import Button from '../components/Button';
import Icon from '../components/IconButton';
import Footer from '../components/global/Footer';
import moment from 'moment';
import Link from 'next/link';
import { getBlog } from './api/fetch';
export default function Blog({ data }) {
	const blogs = data.allBlogs;
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
				<title>My Blog</title>
				<meta
					name="description"
					content="A place to share something maybe useful"
				/>
				<meta property="og:title" content="My Blog" />
				<meta property="og:url" content={`https://kikiding.space/blog`} />
				<meta
					property="og:image"
					content={`https://kikiding.space/api/social-image?title=My blog&description=A place to share something maybe useful&path=https://kikiding.space/blog/`}
				/>
			</Head>
			<div className="bg-myYellow min-h-screen">
				<NavBar page="Blog" />

				<div className=" bg-myYellow items-center  py-5 mt-5">
					<div className="container max-w-screen-md  mx-auto flex-row flex justify-between md:px-0 px-4">
						<Button text="All Posts" color="blue" />
					</div>
				</div>
				<div className=" bg-myYellow items-center  pt-0 pb-5">
					<div className="container max-w-screen-md  mx-auto flex-col gap-5 flex justify-between md:px-0 px-4">
						{blogs.map((item) => (
							<div
								className="bg-white border-2 border-b-8 border-black p-5 rounded-xl flex-1 duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
								key={item.id}
							>
								<Link as={`/blog/${item.slug}`} href={'/blog/[slug]'}>
									<a>
										<h1 className="font-bold sm:text-2xl text-xl hover:underline">
											{item.title}
										</h1>
									</a>
								</Link>
								<p className="sm:text-lg text-md sm:mt-2 mt-1 ">
									{moment(item.date).format('DD MMM YYYY')} | {item.categories}
								</p>
								<p className="sm:text-lg text-md sm:mt-2 mt-1 ">
									{item.excerpt}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export async function getServerSideProps() {
	const data = (await getBlog()) || [];

	return {
		props: { data },
	};
}
