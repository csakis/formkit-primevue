<script setup lang='ts'>
import { FormKitSchema } from '@formkit/vue'
import { ref } from 'vue'

const schema = reactive(
  [
    {
      $el: 'h1',
      children: ['Register ', '$email'],
    },
    {
      $el: 'h3',
      children: 'Header Text H3',
    },
    {
      $formkit: 'primeInputText',
      name: 'email',
      label: 'Email',
      help: 'This will be used for your account.',
      validation: 'required|email',
    },
    {
      $formkit: 'primeTextarea',
      name: 'myText',
      label: 'Text',
      validation: '',
      rows: '3',
    },
    {
      $formkit: 'primeEditor',
      name: 'myEditor',
      label: 'Editor',
      validation: '',
    },
    {
      $formkit: 'primeInputText',
      name: 'password',
      label: 'Password',
      help: 'Enter your new password.',
      validation: 'required|length:5,16',
    },
    {
      $formkit: 'primeInputText',
      name: 'password_confirm',
      label: 'Confirm password',
      help: 'Enter your new password again to confirm it.',
      validation: 'required|confirm',
      validationLabel: 'password confirmation',
    },
    {
      $formkit: 'primeCheckBox',
      name: 'eu_citizen',
      id: 'eu',
      label: 'Are you a european citizen?',
    },
    {
      $formkit: 'select',
      if: '$get(eu).value', // 👀 Oooo, conditionals!
      name: 'cookie_notice',
      label: 'Cookie notice frequency',
      options: {
        refresh: 'Every page load',
        hourly: 'Ever hour',
        daily: 'Every day',
      },
      help: 'How often should we display a cookie notice?',
    },
  ],
)

const data = ref({ email: 'tom@sfxcode.com' })
</script>

<template>
  <h1>Basic Form</h1>

  <FormKit
    id="form"
    v-model="data"
    type="form"
    :submit-attrs="{
      inputClass: 'p-button p-component',
    }"
    @submit="submitHandler"
  >
    <FormKitSchema :schema="schema" :data="data" />
  </FormKit>
  <pre>{{ data }}</pre>
</template>

<style lang='scss' scoped>
.p-inputtext {
  width: 400px;
}

.p-editor-container  {
  width: 400px;
  height: 250px;
  margin-bottom: 60px;
}
</style>
