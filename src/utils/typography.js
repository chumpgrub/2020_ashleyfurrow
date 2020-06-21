import Typography from 'typography'

const typography = new Typography({
    baseFontSize: '20px',
    baseLineHeight: 1.8,
    headerFontFamily: [
        'Montserrat',
        'Helvetica',
        'sans-serif',
    ],
    bodyFontFamily: ['Merriweather', 'serif'],
})

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
