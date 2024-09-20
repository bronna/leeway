<script>
    export let isOpen = false
</script>
  

<button
    class="menu-toggle"
    on:click
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
>
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            class="line top"
            class:open={isOpen}
            d="M3 7h18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
        />
        <path
            class="line bottom"
            class:open={isOpen}
            d="M3 17h18"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
        />
    </svg>
</button>
  

<style>
    .menu-toggle {
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        z-index: 20;
        color: white;
    }

    .line {
        transition: all 0.3s ease;
        transform-origin: center;
    }

    .top {
        transform: translateY(0) rotate(0deg);
    }

    .bottom {
        transform: translateY(0) rotate(0deg);
    }

    .top.open {
        transform: translateY(3.5px) rotate(45deg);
    }

    .bottom.open {
        transform: translateY(-3.5px) rotate(-45deg);
    }
</style>