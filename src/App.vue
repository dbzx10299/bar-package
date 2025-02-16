<script setup lang="ts">

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Text } from '@geistjs/components'

// import { Text } from '../lib/main.ts'
const variants = ['heading-56', 'heading-48', 'heading-32', 'copy-24', 'copy-20']
</script>

<template>
  <div>
    <Text
      as="h1"
      color="#a1a1a1"
      :variant="{ sm: 'heading-16', md: 'heading-48' }"
    >
      This is text from a text component, more text
    </Text>
  </div>
</template>
