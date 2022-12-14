const $title = document.querySelector("title");
const $metaDescription = document.querySelector('[name="description"]');
const $metaDescriptionOg = document.querySelector('[property="og:description"]');
const $metaDescriptionTw = document.querySelector('[name="twitter:description"]');
const $metaSite = document.querySelector('[property="og:url"]');
const $metaSiteName = document.querySelector('[property="og:site_name"]');
const $metaTitle = document.querySelector('[property="og:title"]');
const $metaTitleTw = document.querySelector('[name="twitter:title"]');

const $metaImageOg = document.querySelector('[property="og:image"]');
const $metaImageTw = document.querySelector('[name="twitter:image"]');

const $metaSiteTw = document.querySelector('[name="twitter:site"]');
const $metaCreatorTw = document.querySelector('[name="twitter:creator"]');

const $name = document.querySelector("h1");
const $avatar = document.getElementById("avatar");
const $nickname = document.querySelector("h2");
const $position = document.querySelector("h3");
const $stack = document.getElementById("stack");
const $description = document.getElementById("description");
const $social = document.getElementById("social");
const $links = document.getElementById("links");
const $footer = document.getElementById("footer");

const data = {
	name: "Leonardo Fonseca",
	nickname: "cavera",
	position: "UI & Interaction Designer | Front-end developer",
	stack: "Figma | HTML | CSS",
	site: "https://www.behance.net/cavera",
	description: "I'm a UI and interaction designer with a background in front-end development. I have more than ten years of experience designing user interfaces and interactions for e-learning courses for private and public companies in different countries of Latin America. I use tools like Figma, Adobe Illustrator, HTML, CSS, and JavaScript with GSAP to animate the DOM content.",
	avatar: "https://res.cloudinary.com/dwrxp5sqk/image/upload/v1663628474/cavera/bw_blue.png",
	social: [
		{
			name: "twitter",
			url: "https://twitter.com/",
			username: "cavera_de",
			color: "blue-300",
			icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
		},
		{
			name: "instagram",
			url: "https://instagram.com/",
			username: "cavera_de",
			color: "[#E4405F]",
			icon: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
		},
		{
			name: "platzi",
			url: "https://platzi.com/p/",
			username: "cavera_de",
			color: "[#98CA3F]",
			icon: "M10.6392 1.127L2.486 9.282a3.842 3.842 0 000 5.4361l8.1552 8.1552a3.842 3.842 0 005.4361 0l2.719-2.718-2.719-2.7181-2.718 2.718-8.1562-8.1551 8.1552-8.1552 5.437 5.4371-5.437 5.4361 2.718 2.719 5.4371-5.437a3.842 3.842 0 000-5.4372l-5.448-5.436a3.828 3.828 0 00-5.4252 0z",
		},
		{
			name: "linkedin",
			url: "https://www.linkedin.com/in/",
			username: "leonardo-ui",
			color: "blue-500",
			icon: "M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 0 1-1.548-1.549 1.548 1.548 0 1 1 1.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z",
		},
	],
	links: [
		{
			name: "Behance",
			url: "https://www.behance.net/cavera",
			color: "blue",
			emoji: "????",
		},
		{
			name: "500px",
			url: "https://500px.com/p/LeonardoFonseca?view=photos",
			color: "red",
			emoji: "????",
		},
		{
			name: "Codepen",
			url: "http://codepen.io/cavera/",
			color: "yellow",
			emoji: "????",
		},
		{
			name: "Github",
			url: "https://github.com/cavera",
			color: "gray",
			emoji: "????",
		},
		{
			name: "Dribbble",
			url: "https://dribbble.com/cavera_de",
			color: "pink",
			emoji: "????",
		},
	],
	footer: "Made with Love on Colombia",
};

const main = () => {
	let name = document.createTextNode(data?.name);
	let footer = document.createTextNode(data?.footer);
	let nickname = document.createTextNode(data?.nickname);
	let position = document.createTextNode(data?.position);
	let stack = document.createTextNode(data?.stack);
	let description = document.createTextNode(data?.description);
	let twitterName = "";
	let social = data?.social
		?.map((network) => {
			if (network.name === "twitter") twitterName = network.username;
			return `<a href="${network.url}${network.username}" target="_blank">
							<svg class="w-6 h-6 cursor-pointer text-gray-400 hover:text-${network.color} fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path d="${network.icon}" />
							</svg>
						</a>`;
		})
		.join("");

	let links = data?.links
		?.map((link) => {
			return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
                <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer" 
                  href="${link.url}" target="_blank">
                   ${link.name} 
                </a>
                <span>${link.emoji}</span>
              </div>`;
		})
		.join("");
	let newLinksItem = document.createElement("section");

	newLinksItem.innerHTML = links;

	$social.innerHTML = social;
	$links.appendChild(newLinksItem);

	$title.innerHTML = data?.name;
	$metaDescription.setAttribute("content", data?.position);
	$metaDescriptionOg.setAttribute("content", data?.position);
	$metaDescriptionTw.setAttribute("content", data?.position);

	$metaSite.setAttribute("content", data?.site);
	$metaSiteName.setAttribute("content", data?.name);
	$metaTitle.setAttribute("content", data?.name);
	$metaTitleTw.setAttribute("content", data?.name);

	$metaImageOg.setAttribute("content", data?.avatar);
	$metaImageTw.setAttribute("content", data?.avatar);

	$metaSiteTw.setAttribute("conatent", `@${twitterName}`);
	$metaCreatorTw.setAttribute("conatent", `@${twitterName}`);

	$name.appendChild(name);
	$avatar.setAttribute("src", data?.avatar);
	$avatar.setAttribute("alt", data?.name);
	$nickname.appendChild(nickname);
	$position.appendChild(position);
	$stack.appendChild(stack);
	$description.appendChild(description);
	$footer.appendChild(footer);
};

main();
