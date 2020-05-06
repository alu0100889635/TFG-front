<template>
    <div class="subject">
        <TabsSubject></TabsSubject>
    </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'
import TabsSubject from '@/components/TabsSubject.vue'

export default {
  name: 'Subject',
  components: {
      Container,
      TabsSubject
  }
}
</script>

<style>
    .subject {
        margin: 100px auto;
        width: 1100px;
    }
</style>