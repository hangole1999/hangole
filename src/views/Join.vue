
<template>
  <div class="join">
    <v-card class="join-card" :loading="loading" :disabled="loading">
      <v-card-title>
        <span class="headline">Join us</span>
      </v-card-title>
      <v-form ref="form" id="join-form" v-model="valid" lazy-validation @submit.prevent="join">
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="50" tabindex="1" label="Email" hint="Please enter your email." :disabled="loading" :rules="rulesEmail" v-model="email" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Name" hint="Please enter your name." :disabled="loading" :rules="rulesName" v-model="name" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Password" hint="Please enter your password." :disabled="loading" :rules="rulesPassword" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="password" @click:append="showPassword = !showPassword" />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field outlined clearable required counter="20" tabindex="1" label="Password Confirm" hint="Please enter your password again." :disabled="loading" :rules="rulesPasswordConfirm" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" v-model="passwordConfirm" @click:append="showPassword = !showPassword" />
              </v-col>
              <v-col cols="12">
                <v-text-field outlined clearable required counter tabindex="1" label="Ethereum Wallet Address" hint="Please enter your ethereum wallet address." append-icon="mdi-lan-connect" :disabled="loading" :rules="rulesAddress" v-model="address" @click:append="syncAddress" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="4">
                <v-btn block large color="#fff" @click="joinGoogle">Google</v-btn>
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
      valid: true,
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
      address: '',
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
        v => (v && v === this.password) || 'Must be the same as the password you entered.'
      ],
      rulesName: [
        v => !!v || 'Name is required',
        v => (v && v.length > 2) || 'Name must be longer than 2 characters.',
        v => (v && v.length <= 20) || 'Name must be shorter than 20 characters.'
      ],
      rulesAddress: [
        v => !!v || 'Ethereum wallet address is required',
        v => (v && v.length > 3) || 'Ethereum wallet address must be longer than 3 characters.'
      ],
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

      let body = {
        email: this.email,
        password: this.password,
        name: this.name,
        address: this.address
      };

      window.console.log('join', body);
      // TODO
      this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        window.console.log('success join', user);
        this.$refs.form.reset();
        this.$router.push('/login');
      }).catch((error) => {
        window.console.error('fail join', error);
      }).finally(() => {
        this.loading = false;
      });

      return false;
    },
    joinGoogle () {
      window.console.log('joinGoogle');

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
        window.console.error('fail join', error);
      }).finally(() => {
        this.loading = false;
      });
    },
    joinFacebook () {
      window.console.log('joinFacebook');

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
        window.console.error('fail join', error);
      }).finally(() => {
        this.loading = false;
      });
    },
    joinGithub () {
      window.console.log('joinGithub');

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
        window.console.error('fail join', error);
      }).finally(() => {
        this.loading = false;
      });
    },
    async syncAddress () {
      let web3Instance = await this.$getWeb3();
      this.$getCoinbase(web3Instance).then((coinbase) => {
        if (coinbase) {
          this.address = coinbase;
        } else {
          window.console.error('Failed to get Ethereum Address: Please check Meta Mask');
        }
      });
    }
  },
  mounted () {
    this.syncAddress();
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
