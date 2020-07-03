
<template>
  <div class="join">
    <v-card class="join-card" :loading="loading" :disabled="loading">
      <v-card-title>
        <span class="headline">Join us</span>
      </v-card-title>
      <v-form ref="form" id="join-form" v-model="form.valid" lazy-validation @submit.prevent="join">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field outlined clearable required counter="50" tabindex="1" label="Email" hint="Please enter your email." :disabled="loading" :rules="rule.rulesEmail" v-model="form.email" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Password" hint="Please enter your password." :disabled="loading" :rules="rule.rulesPassword" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="form.password" @click:append="showPassword = !showPassword" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Password Confirm" hint="Please enter your password again." :disabled="loading" :rules="rule.rulesPasswordConfirm" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="form.passwordConfirm" @click:append="showPassword = !showPassword" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn block large light color="#fff" @click="joinGoogle">Google</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block large dark color="#2d88ff" @click="joinFacebook">Facebook</v-btn>
              </v-col>
              <v-col cols="4">
                <v-btn block large dark color="#252a2e" @click="joinGithub">GitHub</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn outlined color="blue darken-1" to="/login">Go to login</v-btn>
          <v-spacer />
          <v-btn dark color="blue darken-1" @click="join">Join</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Join',
  data () {
    return {
      form: {
        valid: true,
        email: '',
        password: '',
        passwordConfirm: ''
      },
      rule: {
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
        rulesPasswordConfirm: [
          v => !!v || 'Password confirm is required',
          v => (v && v.length > 3) || 'Password must be longer than 3 characters.',
          v => (v && v.length <= 20) || 'Password must be shorter than 20 characters.',
          v => (v && v === this.form.password) || 'Must be the same as the password you entered.'
        ]
      },
      showPassword: false,
      loading: false
    }
  },
  methods: {
    join () {
      this.loading = true;

      if (!this.$refs.form.validate()) {
        this.loading = false;
        return false;
      }

      this.$firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password).then((result) => {
        let user = result.user;

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully joined in by email. Please login, ${user.displayName || user.email}`
        });
        this.$refs.form.reset();
        this.$router.push('/login');
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
    joinGoogle () {
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
    joinFacebook () {
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

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully joined in by facebook. Welcome, ${user.displayName || user.email}`
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
    joinGithub () {
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

        this.$store.dispatch('addSnackbar', {
          color: 'success',
          message: `Successfully joined in by github. Welcome, ${user.displayName || user.email}`
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
.join {
}

.join-card {
  max-width: 500px;
  margin: auto;
}
</style>
