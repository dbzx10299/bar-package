<script setup lang="ts">
import { Text } from '@geistjs/components'
</script>

<template>
  <div>
    <!-- this is feature a -->
    <!-- this is feature x -->
    <!-- this is feature z -->
    <Text
      as="h1"
      color="#222"
      :weight="600"
      :size="{ sm: '24px', md: '32px', lg: '48px' }"
      :letterSpacing="{ sm: '-1px', md: '-1.5px', lg: '-3px' }"
      :lineHeight="{ sm: '2rem', md: '2.5rem', lg: '3.5rem' }"
      :align="{ sm: 'center', md: 'center', lg: 'left' }"
      style="margin: 64px 0;"
    >
      This is text from a typescript text component
    </Text>
  </div>
</template>
