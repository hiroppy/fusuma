import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: '62.5%',
        background: 'var(--color-background)',
        WebkitPrintColorAdjust: 'exact',
      },
      body: {
        fontSize: 'var(--base-font-size)',
        fontFamily: 'var(--base-font-family)',
        fontWeight: 'var(--base-font-weight)',
        lineHeight: 1,
        textRendering: 'optimizeLegibility',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        // fontSize: 'var(--h1-font-size)',
      },
    },
    // h1: {
    //   fontSize: 'var(--h1-font-size)',
    //   fontWeight: 'var(--h1-font-weight)',
    //   lineHeight: '7.2rem',
    // },
    // h2: {
    //   fontSize: 'var(--h2-font-size)',
    //   fontWeight: 'var(--h2-font-weight)',
    //   lineHeight: '6.4rem',
    // },
    // h3: {
    //   fontSize: 'var(--h3-font-size)',
    //   fontWeight: 'var(--h3-font-weight)',
    //   lineHeight: '5.6rem',
    // },
    // h4: {
    //   fontSize: 'var(--h4-font-size)',
    //   fontWeight: 'var(--h4-font-weight)',
    //   lineHeight: '4rem',
    // },
    // h5: {
    //   fontSize: 'var(--h5-font-size)',
    //   fontWeight: 'var(--h5-font-weight)',
    //   lineHeight: '3.2rem',
    // },
    // h6: {
    //   fontSize: 'var(--h6-font-size)',
    //   fontWeight: 'var(--h6-font-weight)',
    //   lineHeight: '3.2rem',
    // },
    // img: {
    //   margin: '0 auto',
    //   border: 'var(--base-image-border)',
    //   borderRadius: 'var(--base-image-border-radius)',
    //   height: 'var(--base-image-height)',
    //   width: 'var(--base-image-width)',
    // },
  },
});
