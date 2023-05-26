<script setup>
import { useRouter } from "vue-router";
import env from "../assets/env.json";

const router = useRouter();

let email = "";
let password = "";
let password1 = "";
let url = env.baseURL + "/users";

const signin = async () => {
  if (password !== password1) {
    alert("Password do not match");
    return;
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ username: email, password }),
  });
  if (response.status === 409) {
    alert("Username already in use");
  }
  if (response.status === 201) {
    router.push("/login");
  }
};
</script>

<template>
  <div class="container">
    <div>
      <h2>Sign Up</h2>
      <span>Username:</span>
      <input type="email" name="email" id="email" v-model="email" />
      <span>Password:</span>
      <input type="password" name="password" id="password" v-model="password" />
      <span>Repeat password:</span>
      <input
        type="password"
        name="password1"
        id="password1"
        v-model="password1"
      />
    </div>

    <div>
      <RouterLink to="/login">Back to Login</RouterLink>
      <button @click="signin">Sign Up</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

div {
  margin-top: 20px;
}

h2 {
  color: #333;
}

span {
  display: block;
  margin-bottom: 5px;
}

input[type="email"],
input[type="password"] {
  padding: 5px;
  width: 200px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}
</style>
