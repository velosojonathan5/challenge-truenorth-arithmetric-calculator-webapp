<script setup>
import { useRouter } from "vue-router";
import env from "../assets/env.json";
const router = useRouter();

let email = "";
let password = "";
let url = env.baseURL + "/auth/login";

const login = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ username: email, password }),
  });
  if (response.status === 401) {
    alert("invalid user or password");
  }
  if (response.status === 200) {
    response.json().then((data) => {
      localStorage.setItem("access_token", data.access_token);
      router.push("/calculator");
    });
  }
};
</script>

<template>
  <div class="container">
    <div>
      <h2>Login</h2>
      <span>Username:</span>
      <input type="email" name="email" id="email" v-model="email" />
      <span>Password:</span>
      <input type="password" name="password" id="password" v-model="password" />
    </div>
    <div>
      <RouterLink to="/signup">Sign Up</RouterLink>
      <button @click="login">Login</button>
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

h2 {
  color: #333;
}

div {
  margin-top: 20px;
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
