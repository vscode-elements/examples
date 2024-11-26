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
  <form action="./">
    <vscode-form-group variant="vertical">
      <vscode-label for="name">Name</vscode-label>
      <vscode-textfield id="name" v-model="name" name="name"></vscode-textfield>
    </vscode-form-group>
    <vscode-form-group variant="vertical">
      <vscode-label for="email">E-mail</vscode-label>
      <vscode-textfield type="email" id="email" v-model="email" name="email"></vscode-textfield>
    </vscode-form-group>
    <vscode-form-group variant="vertical">
      <vscode-label for="fruit">Favorite fruit</vscode-label>
      <vscode-single-select v-model="fruit" id="fruit" name="fruit">
        <vscode-option></vscode-option>
        <vscode-option>Apple</vscode-option>
        <vscode-option>Banana</vscode-option>
        <vscode-option>Cherry</vscode-option>
      </vscode-single-select>
    </vscode-form-group>
    <vscode-form-group variant="vertical">
      <vscode-label for="radio-1">Favorite color</vscode-label>
      <vscode-radio-group>
        <vscode-radio type="radio" name="color" v-model="color" value="red" id="radio-1">Red</vscode-radio>
        <vscode-radio type="radio" name="color" v-model="color" value="green">Green</vscode-radio>
        <vscode-radio type="radio" name="color" v-model="color" value="blue">Blue</vscode-radio>
      </vscode-radio-group>
    </vscode-form-group>
    <vscode-form-group variant="vertical">
      <vscode-label for="topics">Favorite topics</vscode-label>
      <vscode-multi-select v-model="topics" name="topics" id="topics">
        <vscode-option>IT</vscode-option>
        <vscode-option>Art</vscode-option>
        <vscode-option>Sport</vscode-option>
        <vscode-option>History</vscode-option>
        <vscode-option>Business</vscode-option>
        <vscode-option>Science</vscode-option>
      </vscode-multi-select>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-checkbox type="checkbox" v-model="terms">Accept terms & conditions</vscode-checkbox>
    </vscode-form-group>
    <vscode-form-group>
      <vscode-checkbox type="checkbox" v-model="newsletter">Subscribe to newsletter</vscode-checkbox>
    </vscode-form-group>
    <vscode-form-group variant="vertical">
      <vscode-label for="textarea">Message</vscode-label>
      <vscode-textarea id="textarea" v-model="message"></vscode-textarea>
    </vscode-form-group>
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

<style>
p {
  margin: 5px 0;
}
</style>
