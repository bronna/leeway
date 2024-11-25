<script>
    import testing from '$data/copy.json'
    import MicroCms from '$components/helpers/MicroCMS.svelte'
    import Test

    let body = testing.body
    let components = {  }
</script>


<div class="content">
    <MicroCms {body} {components} />
</div>


<style>
    .content {
        margin: 0 2rem;
    }
</style>