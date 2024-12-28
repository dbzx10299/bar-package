type ResponsiveProp<T> = T | {
    sm?: T;
    md?: T;
    lg?: T;
};
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
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<TextProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<TextProps> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
