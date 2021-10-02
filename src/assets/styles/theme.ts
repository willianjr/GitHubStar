const theme = {
    colors: {
        gold: '#E6B400',
        gold_semi: '#F0BE0B',
        gold_clear: '#F4C61F',
        gold_clear2: '#D7A903',
        gold_dark: '#BE9501',
        silver_clear: '#F2F2F2',
        silver_clear2: '#DDDDDD',
        silver_dark: '#292929',
        silver_dark2: '#141414',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #DCDCDC 100%) no-repeat',
        background_gold: 'linear-gradient(180deg, #E6B400 0%, #Ffc801 100%) no-repeat',
        overlay: 'linear-gradient(0deg, rgba(209,164,0,1) 0%, rgba(230,180,0,0.7539390756302521) 100%)',
        background_clean: '#DCDCDC',
        text: '#000000B3',
        text_clear: '#ffffffB3',
        text_input: '#888888',
        success: '#135E01',
        black: '#000000',
        white: '#FFFFFF',
        shadow_gold: 'rgba(211, 165, 0, 0.25)',
    },
    fonts: {
        regular: 'Inter, sans-serif',
    },
    bg: 1,
}

export interface themeType {
    colors: any
    fonts: any
    bg: number
}

export default theme
