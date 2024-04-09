<script>
	import Card from '$lib/components/Card.svelte';
</script>

<main class="w-full py-12">
	<section class="grid gap-12 lg:gap-16 px-4 md:px-6">
		<div class="mx-auto max-w-5xl grid gap-6 lg:grid-cols-2">
			<Card
				title="BeeMusic"
				description="Beemusic is a fullstack social media app that allows users to share their music taste with others. Users can create posts, like posts, comment on posts and follow each other. The backend is built with Express.js and Apollo GraphQL. The frontend is built with Next.js and Apollo GraphQL. The database is PostgreSQL and Prisma is used as an ORM."
				image="./beemusic.png"
				source="https://github.com/kutaui/BeeMusic"
				live="https://beemusic.kutaybekleric.com/"
			/>
			<Card
				title="Pizzeria"
				description="Pizzeria is a SvelteKit app that allows users to order their favorite dishes. The app also includes an in-depth admin panel for the restaurant owners to manage their orders, dishes and users. The app is made with 0 API routes and only uses form actions and the new Svelte runes."
				image="./pizzeria.png"
				source="https://github.com/kutaui/svelte-pizzeria"
				live="https://pizzeria.kutaybekleric.com/"
			/>

			<Card
				title="ThoughtPocket"
				description="MERN stack app with a rich text editor that enables users to store their thoughts and access them from anywhere. The app also includes a dark mode and a light mode, autosave feature and JWT authentication."
				image="./thoughtpocket.png"
				source="https://github.com/kutaui/ThoughtPocket"
				live="https://thought-pocket.kutaybekleric.com/"
			/>
			<Card
				title="DevOps Projects"
				description="This GitHub repository consists of various DevOps projects that I have worked on. The projects include Docker, SonarQube, Jenkins, Terraform, Ansible, AWS, Azure and more. The projects are made with the DevOps mindset and are designed to be scalable, secure, and reliable."
				image="./devops.png"
				source="https://github.com/kutaui/devops-portfolio"
				live="https://github.com/kutaui/devops-portfolio"
			/>
			<Card
				title="My Blog"
				description="Markdown powered blog with code highlighting with Shiki and has a  server side theme switch. The blog is built with SvelteKit and uses Markdown files as the blog posts."
				image="./myblog.png"
				source="https://github.com/kutaui/my-blog"
				live="https://blog.kutaybekleric.com/"
			/>
		</div>
		<hr class="border-black" />
		<a href="https://kutay.boo" target="_blank" class="justify-self-center -mb-5 -mt-6">
			<img src="/internet-black.png" alt="GitHub Icon" class="w-12" />
		</a>
	</section>
</main>
