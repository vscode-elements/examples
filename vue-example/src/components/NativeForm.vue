<script setup lang="ts">
import { ref } from 'vue';

const name = ref<string>('')
const email = ref('')
const message = ref('');
const fruit = ref('');
const color = ref('');
const topics = ref(['IT']);
const terms = ref(true);
const newsletter = ref(false);
</script>

<template>
  <form action="./" class="native-form">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name" name="name">
    </div>
    <div>
      <label for="email">E-mail</label>
      <input type="text" id="email" v-model="email" name="email">
    </div>
    <div>
      <label for="fruit">Favorite fruit</label>
      <select name="fruit" id="fruit" v-model="fruit">
        <option>Apple</option>
        <option>Banana</option>
        <option>Cherry</option>
      </select>
    </div>
    <div>
      <label>Favorite color</label>
      <div class="radio-group">
        <div>
          <input type="radio" name="color" v-model="color" value="red" id="radio-1">
          <label for="radio-1">Red</label>
        </div>
        <div>
          <input type="radio" name="color" v-model="color" value="green" id="radio-2">
          <label for="radio-2">Green</label>
        </div>
        <div>
          <input type="radio" name="color" v-model="color" value="blue" id="radio-3">
          <label for="radio-3">Blue</label>
        </div>
      </div>
    </div>
    <div>
      <label for="topics">Favorite topics</label>
      <select name="topics" id="topics" v-model="topics" multiple>
        <option>IT</option>
        <option>Art</option>
        <option>Sport</option>
        <option>History</option>
        <option>Business</option>
        <option>Science</option>
      </select>
    </div>
    <div>
      <input type="checkbox" v-model="terms" name="terms" id="terms">
      <label for="terms">Accept terms & conditions</label>
    </div>
    <div>
      <input type="checkbox" v-model="newsletter" name="newsletter" id="newsletter">
      <label for="newsletter">Subscribe to newsletter</label>
    </div>
    <div>
      
    </div>
    <vscode-form-group variant="vertical">
      <vscode-button type="submit">Submit</vscode-button>
      <vscode-button type="reset" secondary>Reset</vscode-button>
    </vscode-form-group>
  </form>

  <div>
    <p>Name: {{ name }}</p>
    <p>E-mail: {{ email }}</p>
    <p>Favorite fruit: {{ fruit }}</p>
    <p>Favorite color: {{ color }}</p>
    <p>Message: {{ message }}</p>
    <p>Favorite topics:</p>
    <ul>
      <li v-for="f in topics" :key="f">
        {{ f }}
      </li>
    </ul>
    <p>Terms & conditions: {{ terms }}</p>
    <p>Newsletter: {{ newsletter }}</p>
  </div>
</template>

<style scoped>
label {
  color: var(--vscode-foreground);
  display: block;
  font-family: var(--vscode-font-family);
  font-size: var(--vscode-font-size);
  font-weight: 600;
}

.radio-group {
  display: flex;
}

.radio-group div {
  display: flex;
  margin-right: 20px;
}

p {
  margin: 5px 0;
}
</style>
