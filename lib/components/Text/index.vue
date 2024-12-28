<script setup lang="ts">
import styles from './text.module.css'

type ResponsiveProp<T> = T | {
  sm?: T;
  md?: T;
  lg?: T;
};

const breakpoints = ['sm', 'md', 'lg'] as const

function mapResponsiveProp<Value>(prop: string, value: Value): Record<string, Value> {
  const mappedStyles: Record<string, Value> = {}

  if (typeof value !== 'object') {
    if (value !== null) {
      mappedStyles[`--${prop}`] = value
    }
  } else {
    let previousBreakpointValue: Value | undefined;

    breakpoints.forEach(breakpoint => {
      const breakpointValue = (value as unknown as Record<(typeof breakpoint)[number], Value>)[breakpoint]
      if (
        breakpointValue !== null && 
        breakpointValue !== undefined &&
        breakpointValue !== previousBreakpointValue
      ) {
        mappedStyles[`--${breakpoint}-${prop}`] = breakpointValue
        previousBreakpointValue = breakpointValue
      }
    })
  }

  return mappedStyles
}

interface TextProps {
  as?: string;
  color?: string;
  monospace?: boolean;
  size?: ResponsiveProp<string | number>;
  weight?: ResponsiveProp<number>;
  lineHeight?: ResponsiveProp<string | number>;
  letterSpacing?: ResponsiveProp<string>;
  align?: ResponsiveProp<'left' | 'center' | 'right'>;
  truncate?: boolean | number;
  transform?: 'none' | 'lowercase' | 'capitalize' | 'uppercase';
}

const {
  as = 'p',
  color = '#a1a1a1',
  size = '1rem',
  weight = 400,
  lineHeight = 1.5,
  letterSpacing = 'initial'
} = defineProps<TextProps>()

</script>

<template>
  <component
    :is="as"
    :class="[
      styles.wrapper,
      {
        [styles.monospace]: monospace,
        [styles.truncate]: truncate === true,
        [styles.clamp]: typeof truncate === 'number'
      }
    ]"
    :style="{
      ...(mapResponsiveProp('text-size', size)),
      ...(mapResponsiveProp('text-weight', weight)),
      ...(mapResponsiveProp('text-line-height', lineHeight)),
      ...(mapResponsiveProp('text-letter-spacing', letterSpacing)),
      ...(mapResponsiveProp('text-align', align)),
      '--text-color': color,
      ...(typeof truncate === 'number' && { '--text-clamp': truncate }),
      ...(typeof transform === 'string' && { '--text-transform': transform })
    }"
  >
    <slot/>
  </component>
</template>