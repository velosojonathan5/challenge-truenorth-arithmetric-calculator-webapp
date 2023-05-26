<script setup>
import { ref } from "vue";
import env from "../assets/env.json";

const url = env.baseURL + "/record";

let records = ref([]);

const getAllRecords = async () => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=UTF-8",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  if (response.status === 200) {
    response.json().then((data) => {
      records.value = data;
    });
  }
};

getAllRecords();
</script>

<template>
  <div class="container">
    <h2>Records</h2>
    <div><RouterLink to="/calculator">Back to Calculator</RouterLink></div>
    <table>
      <tr>
        <th>ID</th>
        <th>Amount</th>
        <th>User balance</th>
        <th>Operation Response</th>
        <th>Date</th>
        <th>Operation</th>
        <th>User</th>
      </tr>
      <tr v-for="item in records" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.userBalance }}</td>
        <td>{{ item.operationResponse }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.operationId }}</td>
        <td>{{ item.userId }}</td>
      </tr>
    </table>
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

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
