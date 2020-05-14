<template>
    <div class="subject">
        <TabsSubject></TabsSubject>
    </div>
</template>

<script>
// @ is an alias to /src
import TabsSubject from '@/components/TabsSubject.vue'

export default {
  name: 'Subject',
  components: {
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