<template>
    <div class="observation">
        <TabsObservation></TabsObservation>
    </div>
</template>

<script>
// @ is an alias to /src
import Container from '@/components/Container.vue'
import TabsObservation from '@/components/TabsObservation.vue'

export default {
  name: 'observation',
  components: {
      Container,
      TabsObservation
  }
}
</script>

<style>
    .observation {
        margin: 100px auto;
        width: 1100px;
    }
</style>