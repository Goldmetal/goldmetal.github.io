<template>
  <iframe width="920" height="360" :src="ihtml"></iframe>
</template>

<script>
export default {
    props: {
        ihtml: {
            type: String
        }
    }
}
</script>