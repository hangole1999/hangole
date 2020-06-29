<template>
  <div class="home">
    <FullpageContainer>
      <Fullpage>
        <template slot="background">
          <v-row class="ma-0 pa-0 full-height">
            <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col>
            <v-col class="ma-0 pa-0" cols="8">
              <video-background
                class="full-height"
                src="/water.mp4"
                overlay="linear-gradient(45deg, #00000099, #ffffff99)"
                :playbackRate="0.8"
                :sources="videoBackgroundSources" />
            </v-col>
          </v-row>
        </template>
        <template default:slot>
          <PageContainer>
            <Page column justify-space-around>
              <div>
                <PageTitle>
                  <div class="outline" v-animate="{value: 'slide-in-left'}">Welcome to</div>
                  <div class="outline" v-animate="{value: 'slide-in-left', delay: 50}">Project</div>
                  <div v-animate="{value: 'slide-in-left', delay: 100}">Hangole</div>
                </PageTitle>
                <PageDescription class="pa-8" v-animate="{value: 'slide-in-left', delay: 200}">
                  Nice to meet you, I am a frontend developer.<br />
                  Here, you can explore various projects that I have made.<br />
                  Take a look.
                </PageDescription>
              </div>
              <div class="text-center" v-animate="{value: 'fade-in', delay: 300}">
                <v-btn dark outlined x-large>Look around</v-btn>
              </div>
              <PageDescription class="text-right" v-animate="{value: 'slide-in-right', delay: 400}">
                There is no single solution.
                A single cannot satisfy the conflicting requirements of Apps.
                There is no single solution.
                A single cannot satisfy the conflicting requirements of Apps.
              </PageDescription>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>

      <Fullpage>
        <template default:slot>
          <PageContainer>
            <Page justify-center align-center>
              <PageTitle color="#000">2</PageTitle>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>

      <Fullpage>
        <template default:slot>
          <PageContainer>
            <Page justify-center align-center>
              <PageTitle color="#000">3</PageTitle>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>
    </FullpageContainer>
  </div>
</template>

<script>
import FullpageContainer from '@/components/page/FullpageContainer';
import Fullpage from '@/components/page/Fullpage';
import PageContainer from '@/components/page/PageContainer';
import Page from '@/components/page/Page';
import PageTitle from '@/components/page/PageTitle';
import PageDescription from '@/components/page/PageDescription';

export default {
  name: 'Home',
  components: {
    FullpageContainer,
    Fullpage,
    PageContainer,
    Page,
    PageTitle,
    PageDescription
  },
  data: () => ({
    videoBackgroundSources: [
      {src: '/water_laptop.mp4', res: 1200, autoplay: true},
      {src: '/water_tablet.mp4', res: 900, autoplay: true},
      {src: '/water_mobile.mp4', res: 638, autoplay: true}
    ],
    options: {
      beforeChange: (currentSlideEl, currenIndex, nextIndex) => {
        window.console.log('beforeChange', currenIndex, nextIndex);
      },
      afterChange: (currentSlideEl, currenIndex) => {
        window.console.log('afterChange', currenIndex);
      }
    }
  }),
  methods: {
    moveNext(){
      this.$refs.example.$fullpage.moveNext();
    }
  }
};
</script>

<style scoped>
* {
  -webkit-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -moz-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -ms-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  -o-transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
  transition: all .3s cubic-bezier(0, 0.49, 0.46, 1.01);
}
</style>
