<script lang="ts">
    import CommandBody from "../lib/CommandBody.svelte";
</script>

<CommandBody command="cat links.txt">
    <div>
        <div class="links">
            <a href="https://youtube.com/@catnowblue"> YouTube</a>
            <a href="https://github.com/raluvy95"> Github</a>
            <a href="https://instagram.com/catnowblue.ro"> Instagram</a>
            <a href="https://techhub.social/@catnowblue">󰫑 Mastodon</a>
            <a href="https://discord.gg/BK57NZ8vTX">󰙯 Discord</a>
        </div>
    </div>
</CommandBody>

<style lang="scss">
    .links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        a {
            width: fit-content;
        }
    }
</style>
