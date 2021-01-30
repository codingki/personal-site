import Head from 'next/head';
import NavBar from '../../components/global/NavBar';
import Image from 'next/image';
import Button from '../../components/Button';
import Icon from '../../components/IconButton';
import Footer from '../../components/global/Footer';
import markdownToHtml from '../api/mdToHtml';
import moment from 'moment';
import markdownStyles from '../../styles/markdown-styles.module.css';
import { getWorkPost, getWork } from '../api/fetch';

function SingleWorks({ data, content }) {
	const work = data.work;
	const cat = data.work.categories.split(', ');
	const tech = data.work.technologyUsed.split(', ');

	const deployment = data.work.deployment.split(', ');

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
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
					integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
					crossorigin="anonymous"
				/>
				<link rel="icon" href="/favicon.png" />
				<title>{work.title}</title>
				<meta name="description" content={work.excerpt} />
				<meta property="og:title" content={work.title} />
				<meta
					property="og:url"
					content={`https://kikiding.space/works/${work.slug}`}
				/>
				<meta
					property="og:image"
					content={`https://kikiding.space/api/social-image?title=${work.title}&description=${work.description}&path=https://kikiding.space/works/${work.slug}`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={work.title} />
				<meta
					name="twitter:image"
					content={`https://kikiding.space/api/social-image?title=${work.title}&description=${work.description}&path=https://kikiding.space/works/${work.slug}`}
				/>
				<meta
					name="twitter:domain"
					content={`https://kikiding.space/works/${work.slug}`}
				/>
			</Head>
			<div className="bg-myYellow min-h-screen pb-5">
				<NavBar page="Works" />

				<div className=" bg-myYellow items-center  py-5 mt-5 md:px-0 px-5">
					<div className="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl  mx-auto flex-col flex justify-between overflow-hidden">
						{work.image && (
							<img src={work.image.url} className="border-b-4 border-black" />
						)}
						<div className="p-6">
							<h1 className="text-4xl font-bold">{work.title}</h1>
							<div className="flex-row flex flex-wrap mt-4 gap-2">
								{cat.map((item) => (
									<Button text={item} color="orange" />
								))}
							</div>
							<p className="text-xl mt-4 leading-relaxed font-semibold">
								About the project
							</p>
							<div
								className={markdownStyles['markdown']}
								dangerouslySetInnerHTML={{ __html: content }}
							/>

							<p className="text-xl mt-4 leading-relaxed font-semibold">
								Technology used
							</p>
							<div className="flex-row flex flex-wrap mt-2 gap-2">
								{tech.map((item, index) => (
									<Button key={index} text={item} tag />
								))}
							</div>
							<p className="text-xl mt-4 leading-relaxed font-semibold">
								Deployment
							</p>
							<div className="flex-row flex flex-wrap mt-2 gap-2">
								{deployment.map((item, index) => {
									const val = item.split(': ');
									const txt = val[0].charAt(0).toUpperCase() + val[0].slice(1);
									return (
										<a href={val[1]} target="_blank" key={index}>
											<Button text={txt} url={val[1]} blank deployment />
										</a>
									);
								})}
							</div>

							<div className="flex flex-row justify-end">
								<a
									href={`https://twitter.com/intent/tweet?url=https://kikiding.space/works/${work.slug}&text=${work.title}`}
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
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export async function getStaticProps({ params }) {
	const data = await getWorkPost(params.slug);
	const content = await markdownToHtml(data.work.about || '');
	if (!data) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			data,
			content,
		},
	};
}
export async function getStaticPaths() {
	const allBlogs = await getWork();
	const allPosts = allBlogs.allWorks;
	return {
		paths: allPosts.map((post) => `/works/${post.slug}`) || [],
		fallback: true,
	};
}
export default SingleWorks;
