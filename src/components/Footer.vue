<template>
    <div class="bottom">
        <div v-for="data in datas" :key="data.id" style="display:inline">
            <a :href="`${data.link}`" target="_blank" rel="noopener noreferrer" class="black">
                <Icon :icon="['fab', `${data.icon}`]" size="3x" class="space" />
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    return {
        datas: [
            {
                id: 0,
                link: "https://www.github.com/FirmanSyah2701",
                icon: 'github'
            },
            {
                id: 1,
                link: "https://www.instagram.com/firman_syah2701",
                icon: 'instagram'
            },
            {
                id: 2,
                link: "https://www.youtube.com/channel/UCwsg2f0imjNQ4jVKUByVPYA",
                icon: 'youtube'
            }
        ]
    }
  }
}
</script>