<template>
    <div class="phonecall">
        <TabsPhonecall></TabsPhonecall>
    </div>
</template>

<script>
// @ is an alias to /src
import TabsPhonecall from '@/components/TabsPhonecall.vue'

export default {
  name: 'Phonecall',
  components: {
      TabsPhonecall
  },
}
</script>

<style>
    .phonecall {
        margin: 100px auto;
        width: 1100px;
    }
</style>