
<template>
  <div class="login">
    <v-card class="login-card" :loading="loading" :disabled="loading">
      <v-card-title>
        <span class="headline">Login</span>
      </v-card-title>
      <v-form ref="form" id="login-form" v-model="valid" lazy-validation @submit.prevent="login">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field outlined clearable required counter="50" tabindex="1" label="Email" hint="Please enter your email." :disabled="loading" :rules="rulesEmail" v-model="email" />
              </v-col>
              <v-col cols="12">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Password" hint="Please enter your password." :disabled="loading" :rules="rulesPassword" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="password" @click:append="showPassword = !showPassword" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn block large color="#fff" @click="loginGoogle">Google</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block large dark color="#2d88ff" @click="loginFacebook">Facebook</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block large dark color="#252a2e" @click="loginGithub">GitHub</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="blue darken-1" to="/join">Go to join</v-btn>
          <v-spacer />
          <v-btn dark color="blue darken-1" @click="login">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      valid: true,
      email: '',
      password: '',
      rulesEmail: [
        v => !!v || 'Email is required.',
        v => (v && v.length > 3) || 'Email must be longer than 3 characters.',
        v => (v && v.length <= 50) || 'Email must be shorter than 50 characters.',
        v => (v && this.$validateEmail(v)) || 'It doesn\'t fit the email format.'
      ],
      rulesPassword: [
        v => !!v || 'Password is required',
        v => (v && v.length > 3) || 'Password must be longer than 3 characters.',
        v => (v && v.length <= 20) || 'Password must be shorter than 20 characters.'
      ],
      showPassword: false,
      loading: false
    }
  },
  methods: {
    login () {
      this.loading = true;

      if (!this.$refs.form.validate()) {
        this.loading = false;
        return false;
      }

      let body = {
        email: this.email,
        password: this.password
      };

      window.console.log('login', body);
      // TODO
      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((result) => {
        window.console.log('success login', result);

        let token = result.credential.accessToken;
        let user = result.user;

        window.console.log('user', user);
        window.console.log('token', token);

        // this.$store.state.user.id = this.id;
        // this.$store.state.user.token = response.data.token;
        // this.$store.dispatch('storeUser', {});
        // await this.$store.dispatch('loginMetamask', {});
        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        window.console.error('fail login', error);
      }).finally(() => {
        this.loading = false;
      });

      return false;
    },
    loginGoogle () {
      window.console.log('loginGoogle');

      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.google).then((result) => {
        window.console.log(result);

        let token = result.credential.accessToken;
        let user = result.user;

        window.console.log('user', user);
        window.console.log('token', token);

        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        window.console.error('fail login', error);
      }).finally(() => {
        this.loading = false;
      });
    },
    loginFacebook () {
      window.console.log('loginFacebook');

      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.facebook).then((result) => {
        window.console.log(result);

        let token = result.credential.accessToken;
        let user = result.user;

        window.console.log('user', user);
        window.console.log('token', token);

        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        window.console.error('fail login', error);
      }).finally(() => {
        this.loading = false;
      });
    },
    loginGithub () {
      window.console.log('loginGithub');

      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.github).then((result) => {
        window.console.log(result);

        let token = result.credential.accessToken;
        let user = result.user;

        window.console.log('user', user);
        window.console.log('token', token);

        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        window.console.error('fail login', error);
      }).finally(() => {
        this.loading = false;
      });
    }
  }
}
</script>

<style scoped>
.login {
}

.login-card {
  max-width: 500px;
  margin: auto;
}
</style>
