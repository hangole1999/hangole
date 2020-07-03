<template>
  <div class="home">
    <HomeHeader />
    <FullpageContainer>
      <!-- Main -->
      <Fullpage>
        <template slot="background">
          <v-row class="ma-0 pa-0 full-height">
            <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col>
            <v-col class="ma-0 pa-0" cols="8">
              <video-background
                class="full-height"
                :src="videoBackgrounds.main.src"
                :overlay="videoBackgrounds.main.overlay"
                :playbackRate="videoBackgrounds.main.playbackRate"
                :sources="videoBackgrounds.main.sources" />
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
                <div v-animate="{value: 'fade-in', delay: 300}">
                  <v-btn dark outlined x-large>Look around</v-btn>
                </div>
              </div>
              <PageDescription class="text-right">
                <div class="my-4" v-animate="{value: 'slide-in-right', delay: 400}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
                <div class="my-4" v-animate="{value: 'slide-in-right', delay: 500}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
              </PageDescription>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>

      <!-- Game -->
      <Fullpage>
        <template slot="background">
          <v-row class="ma-0 pa-0 full-height">
            <v-col class="ma-0 pa-0" cols="8">
              <video-background
                class="full-height"
                :src="videoBackgrounds.game.src"
                :overlay="videoBackgrounds.game.overlay"
                :playbackRate="videoBackgrounds.game.playbackRate"
                :sources="videoBackgrounds.game.sources" />
            </v-col>
            <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col>
          </v-row>
        </template>
        <template default:slot>
          <PageContainer>
            <Page column justify-space-around>
              <div>
                <PageTitle class="text-right">
                  <div class="outline" v-animate="{value: 'slide-in-right'}">Hangole</div>
                  <div v-animate="{value: 'slide-in-right', delay: 50}">Games</div>
                </PageTitle>
                <PageDescription class="text-right pa-8" v-animate="{value: 'slide-in-right', delay: 150}">
                  Nice to meet you, I am a frontend developer.<br />
                  Here, you can explore various projects that I have made.<br />
                  Take a look.
                </PageDescription>
                <div class="text-right" v-animate="{value: 'fade-in', delay: 250}">
                  <v-btn dark outlined x-large>Look around</v-btn>
                </div>
              </div>
              <PageDescription>
                <div class="my-4" v-animate="{value: 'slide-in-left', delay: 350}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
                <div class="my-4" v-animate="{value: 'slide-in-left', delay: 450}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
              </PageDescription>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>

      <!-- Blog -->
      <Fullpage>
        <template slot="background">
          <v-row class="ma-0 pa-0 full-height">
            <!-- <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col> -->
            <v-col class="ma-0 pa-0" cols="12">
              <video-background
                class="full-height"
                :src="videoBackgrounds.blog.src"
                :overlay="videoBackgrounds.blog.overlay"
                :playbackRate="videoBackgrounds.blog.playbackRate"
                :sources="videoBackgrounds.blog.sources" />
            </v-col>
          </v-row>
        </template>
        <template default:slot>
          <PageContainer>
            <Page column justify-space-around>
              <div>
                <PageTitle>
                  <div class="outline" v-animate="{value: 'slide-in-left'}">Hangole</div>
                  <div v-animate="{value: 'slide-in-left', delay: 50}">Blogs</div>
                </PageTitle>
                <PageDescription class="pa-8" v-animate="{value: 'slide-in-left', delay: 150}">
                  Nice to meet you, I am a frontend developer.<br />
                  Here, you can explore various projects that I have made.<br />
                  Take a look.
                </PageDescription>
                <div v-animate="{value: 'fade-in', delay: 250}">
                  <v-btn dark outlined x-large>Look around</v-btn>
                </div>
              </div>
              <PageDescription class="text-right">
                <div class="my-4" v-animate="{value: 'slide-in-right', delay: 350}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
                <div class="my-4" v-animate="{value: 'slide-in-right', delay: 450}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
              </PageDescription>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>

      <!-- SNS -->
      <Fullpage>
        <template slot="background">
          <v-row class="ma-0 pa-0 full-height">
            <v-col class="ma-0 pa-0" cols="12">
              <video-background
                class="full-height"
                :src="videoBackgrounds.sns.src"
                :overlay="videoBackgrounds.sns.overlay"
                :playbackRate="videoBackgrounds.sns.playbackRate"
                :sources="videoBackgrounds.sns.sources" />
            </v-col>
            <!-- <v-col class="ma-0 pa-0" cols="4">
              <v-card class="full-height" dark tile />
            </v-col> -->
          </v-row>
        </template>
        <template default:slot>
          <PageContainer>
            <Page column justify-space-around>
              <div>
                <PageTitle class="text-right">
                  <div class="outline" v-animate="{value: 'slide-in-right'}">Hangole</div>
                  <div v-animate="{value: 'slide-in-right', delay: 50}">SNSs</div>
                </PageTitle>
                <PageDescription class="text-right pa-8" v-animate="{value: 'slide-in-right', delay: 150}">
                  Nice to meet you, I am a frontend developer.<br />
                  Here, you can explore various projects that I have made.<br />
                  Take a look.
                </PageDescription>
                <div class="text-right" v-animate="{value: 'fade-in', delay: 250}">
                  <v-btn dark outlined x-large>Look around</v-btn>
                </div>
              </div>
              <PageDescription>
                <div class="my-4" v-animate="{value: 'slide-in-left', delay: 350}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
                <div class="my-4" v-animate="{value: 'slide-in-left', delay: 450}">
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                  There is no single solution.
                  A single cannot satisfy the conflicting requirements of Apps.
                </div>
              </PageDescription>
            </Page>
          </PageContainer>
        </template>
      </Fullpage>
    </FullpageContainer>
  </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader';

import FullpageContainer from '@/components/page/FullpageContainer';
import Fullpage from '@/components/page/Fullpage';
import PageContainer from '@/components/page/PageContainer';
import Page from '@/components/page/Page';
import PageTitle from '@/components/page/PageTitle';
import PageDescription from '@/components/page/PageDescription';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    FullpageContainer,
    Fullpage,
    PageContainer,
    Page,
    PageTitle,
    PageDescription
  },
  data: () => ({
    videoBackgrounds: {
      main: {
        src: '/videos/main/main.mp4',
        sources: [
          {src: '/videos/main/main_laptop.mp4', res: 1200, autoplay: true},
          {src: '/videos/main/main_tablet.mp4', res: 900, autoplay: true},
          {src: '/videos/main/main_mobile.mp4', res: 638, autoplay: true}
        ],
        playbackRate: 0.8,
        overlay: 'linear-gradient(15deg, #000000cc, #80808066, #000000cc)'
      },
      game: {
        src: '/videos/game/game.mp4',
        sources: [
          {src: '/videos/game/game_laptop.mp4', res: 1200, autoplay: true},
          {src: '/videos/game/game_tablet.mp4', res: 900, autoplay: true},
          {src: '/videos/game/game_mobile.mp4', res: 638, autoplay: true}
        ],
        playbackRate: 0.8,
        overlay: 'linear-gradient(-15deg, #000000cc, #80808066, #000000cc)'
      },
      blog: {
        src: '/videos/blog/blog.mp4',
        sources: [
          {src: '/videos/blog/blog_laptop.mp4', res: 1200, autoplay: true},
          {src: '/videos/blog/blog_tablet.mp4', res: 900, autoplay: true},
          {src: '/videos/blog/blog_mobile.mp4', res: 638, autoplay: true}
        ],
        playbackRate: 0.8,
        overlay: 'linear-gradient(15deg, #000000cc, #80808066, #000000cc)'
      },
      sns: {
        src: '/videos/sns/sns.mp4',
        sources: [
          {src: '/videos/sns/sns_laptop.mp4', res: 1200, autoplay: true},
          {src: '/videos/sns/sns_tablet.mp4', res: 900, autoplay: true},
          {src: '/videos/sns/sns_mobile.mp4', res: 638, autoplay: true}
        ],
        playbackRate: 0.8,
        overlay: 'linear-gradient(-15deg, #000000cc, #80808066, #000000cc)'
      }
    },
    options: {
      beforeChange: (currentSlideEl, currenIndex, nextIndex) => {
        console.log('beforeChange', currenIndex, nextIndex);
      },
      afterChange: (currentSlideEl, currenIndex) => {
        console.log('afterChange', currenIndex);
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
