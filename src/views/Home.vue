<template>
  <div class="home">
    <FullPageContainer>
      <FullPage>
        page 1
      </FullPage>
      <FullPage>
        page 2
      </FullPage>
    </FullPageContainer>
  </div>
</template>

<script>
import FullPageContainer from '@/components/FullPageContainer';
import FullPage from '@/components/FullPage';

export default {
  name: 'Home',
  components: {
    FullPageContainer,
    FullPage
  },
  data: () => ({
  }),
  methods: {
  }
};
</script>

<style scoped>
</style>
