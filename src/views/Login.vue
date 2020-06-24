
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

      this.$firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((result) => {
        let token = result.credential && result.credential.accessToken;
        let user = result.user;

        this.$store.dispatch('setUser', {
          email: user.email,
          name: user.displayName,
          token: token,
          data: user
        });

        this.$store.dispatch('storeUser', {});

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully logged in by email. Welcome, ${user.displayName || user.email}`
        });

        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        this.$store.dispatch('addSnackbar', {
          color: 'error',
          message: `${error.code}: ${error.message}`
        });
      }).finally(() => {
        this.loading = false;
      });

      return false;
    },
    loginGoogle () {
      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.google).then((result) => {
        let token = result.credential && result.credential.accessToken;
        let user = result.user;

        this.$store.dispatch('setUser', {
          email: user.email,
          name: user.displayName,
          token: token,
          data: user
        });

        this.$store.dispatch('storeUser', {});

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully logged in by google. Welcome, ${user.displayName || user.email}`
        });
        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        this.$store.dispatch('addSnackbar', {
          color: 'error',
          message: `${error.code}: ${error.message}`
        });
      }).finally(() => {
        this.loading = false;
      });
    },
    loginFacebook () {
      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.facebook).then((result) => {
        let token = result.credential && result.credential.accessToken;
        let user = result.user;

        this.$store.dispatch('setUser', {
          email: user.email,
          name: user.displayName,
          token: token,
          data: user
        });

        this.$store.dispatch('storeUser', {});

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully logged in by facebook. Welcome, ${user.displayName || user.email}`
        });
        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        this.$store.dispatch('addSnackbar', {
          color: 'error',
          message: `${error.code}: ${error.message}`
        });
      }).finally(() => {
        this.loading = false;
      });
    },
    loginGithub () {
      this.loading = true;

      this.$firebase.auth().signInWithPopup(this.$provider.github).then((result) => {
        let token = result.credential && result.credential.accessToken;
        let user = result.user;

        this.$store.dispatch('setUser', {
          email: user.email,
          name: user.displayName,
          token: token,
          data: user
        });

        this.$store.dispatch('storeUser', {});

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully logged in by github. Welcome, ${user.displayName || user.email}`
        });
        this.$refs.form.reset();
        this.$router.push('/');
      }).catch((error) => {
        this.$store.dispatch('addSnackbar', {
          color: 'error',
          message: `${error.code}: ${error.message}`
        });
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
