import Head from 'next/head';
import NavBar from '../../components/global/NavBar';
import Image from 'next/image';
import Button from '../../components/Button';
import Icon from '../../components/IconButton';
import Footer from '../../components/global/Footer';
import markdownToHtml from '../api/mdToHtml';
import moment from 'moment';
import markdownStyles from '../../styles/markdown-styles.module.css';
import { getPost, getBlog } from '../api/fetch';

export async function getStaticPaths() {
	const allBlogs = await getBlog();
	const allPosts = allBlogs.allBlogs;
	return {
		paths: allPosts.map((post) => `/blog/${post.slug}`) || [],
		fallback: false,
	};
}
export async function getStaticProps({ params }) {
	const data = await getPost(params.slug);

	const content = await markdownToHtml(data.blog.content || '');

	return {
		props: { data, content },
	};
}
export default function SingleBlog({ data, content }) {
	const blog = data.blog;
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
				<title>{blog.title}</title>
				<meta name="description" content={blog.excerpt} />
				<meta property="og:title" content={blog.title} />
				<meta
					property="og:url"
					content={`https://kikiding.space/blog/${blog.slug}`}
				/>
				<meta
					property="og:image"
					content={`https://kikiding.space/api/social-image?title=${blog.title}&description=${blog.excerpt}&path=https://kikiding.space/blog/${blog.slug}`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={blog.title} />
				<meta
					name="twitter:image"
					content={`https://kikiding.space/api/social-image?title=${blog.title}&description=${blog.excerpt}&path=https://kikiding.space/blog/${blog.slug}`}
				/>
				<meta
					name="twitter:domain"
					content={`https://kikiding.space/blog/${blog.slug}`}
				/>
			</Head>
			<div className="bg-myYellow min-h-screen flex flex-col justify-between">
				<NavBar page="Blog" />

				<div className=" bg-myYellow items-center  py-5 my-5 md:px-0 px-4">
					<div className="container max-w-screen-md bg-white border-2 border-b-8 border-black rounded-xl  mx-auto flex-col flex justify-between overflow-hidden">
						{blog.image && (
							<img src={blog.image.url} className="border-b-4 border-black" />
						)}
						<div className="md:py-6 md:px-6 py-6 px-4 ">
							<h1 className="text-4xl font-bold">{blog.title}</h1>
							<p className="text-lg font-semibold mt-2">
								{blog.categories} | {moment(blog.date).format('DD MMM YYYY')}
							</p>
							<div
								className={markdownStyles['markdown']}
								dangerouslySetInnerHTML={{ __html: content }}
							/>

							<div className="flex flex-row justify-end">
								<a
									href={`https://twitter.com/intent/tweet?url=https://kikiding.space/blog/${blog.slug}&text=${blog.title}`}
									target="_blank"
								>
									<div
										className=" font-semibold  text-white sm:text-md text-md px-3 py-1 rounded-xl border-2 border-b-4 border-black mt-4"
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

				<Footer />
			</div>
		</div>
	);
}
