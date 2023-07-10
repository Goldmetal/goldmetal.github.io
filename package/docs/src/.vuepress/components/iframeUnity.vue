<template>
  <iframe :width="iWidth" :height="iHeight" :src="ihtml" scrolling="no" class="unityFrame"></iframe>
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

<style>
.unityFrame
{
    border: 0 solid transparent;
    border-bottom: 0 solid transparent;
    border-top: 0 solid transparent;
    border-right: 0 solid transparent;
    border-bottom: 0 solid transparent;
    border-radius: 12px;
}
</style>