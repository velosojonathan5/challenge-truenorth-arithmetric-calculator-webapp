<script setup>
import { ref } from "vue";
import env from "../assets/env.json";

let url = env.baseURL + "/operation/calculate";
let type = "ADDITION";
let a = 0;
let b = 0;
let result = ref();
let cost = ref();
let balance = ref();

const calculate = async () => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify({ type, a, b }),
  });

  if (response.status === 400) {
    alert("User has no balance");
  }
  if (response.status === 201) {
    response.json().then((data) => {
      result.value = data.result;
      cost.value = data.cost;
      balance.value = data.balance;
    });
  }
};
</script>

<template>
  <div class="container">
    <div>
      <h2>New Operation</h2>
      <select name="operation" id="operation" v-model="type">
        <option value="ADDITION">Addiction</option>
        <option value="SUBTRACTION">Subtraction</option>
        <option value="MULTIPLICATION">Multiplication</option>
        <option value="DIVISION">Division</option>
        <option value="SQUARE_ROOT">Square Root</option>
        <option value="RANDOM_STRING_GENERATION">
          Random String Generation
        </option>
      </select>
      <span>A:</span>
      <input type="number" v-model="a" />
      <span>B:</span>
      <input type="number" v-model="b" />
    </div>
    <div><button @click="calculate">Calculate</button></div>
    <div>
      <p>
        <strong>Result: </strong>{{ result }} <strong>Cost: </strong>{{ cost }}
        <strong>User Balance: </strong>{{ balance }}
      </p>
    </div>
    <div>
      <RouterLink to="/records">See Records</RouterLink>
    </div>
    <div>
      <RouterLink to="/login">Logout</RouterLink>
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

select,
input[type="number"] {
  padding: 5px;
  width: 200px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

p {
  margin-top: 10px;
}

strong {
  font-weight: bold;
}
</style>
