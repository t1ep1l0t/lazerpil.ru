<template>
<section class="login">
  <div class="container">
    <div class="login__inner">
      <div class="login__head">
        <h2 class="login__title">
          Вход
        </h2>
      </div>
      <v-form v-model="valid" class="login__form">
        <v-text-field class="login__input"
              v-model="username"
              :rules="usernameRules"
              label="Имя пользователя..."
              required
          ></v-text-field>
        <v-text-field class="login__input"
            v-model="password"
            :rules="passwordRules"
            label="Пароль..."
            required
        ></v-text-field>
        <v-btn class="login__button"
               :disabled="!valid"
               @click="login"
        >
          Войти
        </v-btn>
      </v-form>
    </div>
  </div>
  <div class="login__message" v-if="$store.state.auth_message">
    <span >
      {{ $store.state.auth_message}}
    </span>
  </div>
</section>
</template>

<script>
export default {
  name: "LoginComponent",
  data: () => ({
    valid: false,
    password: '',
    passwordRules: [
      value => {
        if (value) return true

        return 'Пароль обязателен для заполнения.'
      },
      value => {
        if (value?.length >= 4) return true

        return 'Пароль должен быть не менее 5 символов.'
      },
    ],
    username: '',
    usernameRules: [
      value => {
        if (value) return true

        return 'Имя пользователя обязателено для заполнения.'
      },
    ],
  }),
  methods: {
    async login () {

      const data = {
        username: this.username,
        password: this.password
      }

      const response = await fetch('http://localhost:5000/api/admin-panel/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();

      if (response.status === 200) {
        this.$store.commit('set_user', {bool: true, message: result.message});
      }
      else {
        this.$store.commit('set_user', {bool: false, message: result.message});
      }
    }
  }
}
</script>

<style scoped lang="scss">

@import "../assets/variables.scss";

.login {
  width: 100%;
  padding-top: 60px;
  position: relative;

  &__inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-weight: 600;
    font-size: 32px;
    line-height: 32px;
    text-transform: uppercase;
  }
  &__form {
    max-width: 600px;
    width: 100%;
    padding: 40px;
    border-radius: 30px;
    background-color: #FAFAFA;
    border: 2px solid $blue;
    display: flex!important;
    flex-direction: column;
    align-items: start;
    gap: 30px;
  }
  &__input {
    width: 100%;
    text-align: left;
  }
  &__button {
    align-self: end;
    background: $blue!important;
    color: #FFFFFF;
    font-size: 14px;
    text-transform: uppercase;
  }
  &__message {
    position: absolute;
    top: 50px;
    right: 50px;
    max-width: 200px;

    span {
      font-size: 16px;
      font-weight: 500;
      color: #0A0A0A;
    }
  }
}
</style>

<style lang="scss">
@import "../assets/variables.scss";
.v-text-field > .v-input__control > .v-input__slot {
  &::after {
    border-color: $blue;
  }
}
</style>