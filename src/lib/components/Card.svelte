<script lang="ts">
	export let title: string, description: string, image: string, live: string, source: string;
</script>

<div class="space-y-2">
	<h2 class="text-3xl font-semibold tracking-tight">{title}</h2>
	<p class="text-gray-600">
		{description}
	</p>
</div>

<div class="flex items-center justify-end relative">
	<div class="relative">
		<img
			alt="Acme Corporation Website Redesign"
			class="rounded-lg object-cover"
			height="200"
			src={image}
			style="aspect-ratio: 400/300; "
			width="400"
		/>
		<div
			class="absolute inset-0 flex items-center justify-center transition-opacity duration-200 opacity-0 bg-black bg-opacity-50 hover:opacity-100 rounded-lg"
		>
			<div class="flex justify-between w-48">
				<div class="flex flex-col items-center">
					<a href={source} target="_blank">
						<img src="/github-mark-white.png" alt="GitHub Icon" class="w-12" />
					</a>
					<a href={source} target="_blank" class="text-white font-bold">Source</a>
				</div>
				<div class="flex flex-col items-center">
					<a href={live} target="_blank">
						<img src="/internet.png" alt="World Wide Web Icon" class="w-12" />
					</a>
					<a href={live} target="_blank" class="text-white font-bold">Live</a>
				</div>
			</div>
		</div>
	</div>
</div>
