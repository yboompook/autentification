<template>
  <div class="Signin">
    <h1>Connexion</h1>
        <div class="form">
        <label for="email">Adresse mail :</label>
        <input type="email" id="email" name="email" v-model="email" placeholder="Ex : johndoe@gmail.com"><br>

        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" placeholder="Veuiller insérer votre mot de passe" v-model="password"><br>

        <button type="submit" id="login" class="log" v-on:click="login">Se connecter</button>
    </div>
  </div>
</template>

<script lang="ts">
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from '@firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login: function() {
            console.log('register : ' + this.email);
            signInWithEmailAndPassword(auth,this.email, this.password)
                .then((userCredential) => {
                console.log(userCredential.user)
                this.$router.push("/member");
            })
            .catch((error) => { console.log('error : ' + error.message);})
        }
    }
}; 

</script>