<script>
	import '../app.css';
  import NavBar from '$lib/components/nav-bar.svelte';
  /** @type {{children: import('svelte').Snippet}}*/
  let { children } = $props();
</script>
<NavBar />
{@render children()}
