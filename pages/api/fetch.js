const API_URL = 'https://graphql.datocms.com';
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

async function fetchAPI(query) {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${API_TOKEN}`,
		},
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();
	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API');
	}
	return json.data;
}

export async function getHome() {
	const data = fetchAPI(`
    query HomeQuery {
        allBlogs(orderBy: date_DESC, first: "2") {
          title
          id
          excerpt
          categories
          date
          slug
        }
        allWorks(orderBy: date_DESC, first: "3") {
          title
          slug
          id
          excerpt
          date
          categories
        }
      }
      
    `);
	return data;
}

export async function getBlog() {
	const data = fetchAPI(`
    query AllBlog {
        allBlogs(orderBy: date_DESC ) {
          title
          id
          excerpt
          categories
          date
          slug
        }
       
      }
      
    `);
	return data;
}

export async function getWork() {
	const data = fetchAPI(`
    query Allwork {
        
        allWorks(orderBy: date_DESC) {
          title
          slug
          id
          excerpt
          date
          categories
        }
      }
      
    `);
	return data;
}

export async function getPost(slug) {
	const data = await fetchAPI(
		`query SingleBlog{
      blog(filter: {slug: {eq: "${slug}"}}) {
          title
          id
          excerpt
          categories
          date
          slug
          content
          image {
            url
          }
      }
    }`
	);
	return data;
}

export async function getWorkPost(slug) {
	const data = await fetchAPI(
		`query SingleWork {
      work(filter: {slug: {eq: "${slug}"}}) {
        date
        id
        excerpt
        deployment
        categories
        about
        slug
        title
        technologyUsed
        image {
          url
        }
      }
    }`
	);
	return data;
}

export async function getNow() {
	const data = await fetchAPI(
		`query MyQuery {
      now {
        content
        updatedAt
      }
    }`
	);
	return data;
}
