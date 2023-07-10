<template>
  <iframe :width="iWidth" :height="iHeight" :src="ihtml"></iframe>
</template>

<script>
export default {
    props: {
        iWidth: {
            type: String
        },
        iHeight: {
            type: String
        },
        ihtml: {
            type: String
        }
    }
}
</script>