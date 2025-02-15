<script setup lang="ts">

// https://nodejs.org/api/packages.html#packages_self_referencing_a_package_using_its_name
import { Text } from '@geistjs/components'

// import { Text } from '../lib/main.ts'

/**
 * make sure to check the include option in tsconfig.app.json in order to make this work
 * otherwise it can't find ../lib/main.ts
 */
</script>

<template>
  <div>
    <Text
      as="h1"
      color="#a1a1a1"
      :variant="{ sm: 'heading-16', md: 'heading-48' }"
    >
      This is text from a typescript text component
    </Text>

    <Text
      as="h1"
      color="#000"
      :variant="{ sm: 'heading-16', md: 'heading-48' }"
    >
      This is text from a typescript text component
    </Text>
  </div>
</template>
