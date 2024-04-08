<script lang="ts">
	export let title: string, description: string, image: string, live: string, source: string;
</script>

<div class="space-y-2">
	<h2 class="text-3xl font-semibold tracking-tight">{title}</h2>
	<p class="text-gray-600">
		{description}
	</p>
</div>
<div class="flex items-center justify-end">
	<img
		alt="Acme Corporation Website Redesign"
		class="rounded-lg object-cover"
		height="200"
		src={image}
		style="aspect-ratio: 400/300; "
		width="400"
	/>
</div>
