<script>
    export let direction = 'horizontal'
    export let colorTheme = 'light'

    $: linkColor = colorTheme === 'light' ? 'darkgray' : 'white'
</script>

<nav class={direction} style="--linkColor: {linkColor}">
    <a href="/about">About</a>
    <a href="/resources">Resources</a>
    <a href="/contact">Contact</a>
    <a href="/subscribe">Stay Updated</a>
</nav>

<style>
    nav {
        display: flex;
        align-items: center;
    }

    .horizontal {
        flex-direction: row;
    }

    .vertical {
        flex-direction: column;
        align-items: flex-start;
    }

    a {
        margin-right: 2.7rem;
        letter-spacing: 0.03rem;
        font-size: 1.2rem;
        text-decoration: none;
        color: var(--linkColor);
        font-weight: 300;
        line-height: 1.2;
        transition: color 0.3s ease;
    }

    .vertical a {
        margin-right: 0;
        margin-bottom: 1rem;
    }

    a:hover {
        color: var(--colorInclusiveGray);
    }

    a:last-child {
        margin-right: 0;
    }
</style>