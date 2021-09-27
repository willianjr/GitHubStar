const theme = {
    colors: {
        dourado: '#E6B400',
        dourado_semi: '#DFAF01',
        cinza_claro: '#F2F2F2',
        cinza_claro2: '#DDDDDD',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #DCDCDC 100%) no-repeat',
        background_dourado: 'linear-gradient(180deg, #E6B400 0%, #Ffc801 100%) no-repeat',
        overlay: 'linear-gradient(0deg, rgba(209,164,0,1) 0%, rgba(230,180,0,0.7539390756302521) 100%)',
        backgroundClean: '#DCDCDC',
        text: '#000000B3',
        text_input: '#888888',
        success: '#135E01',
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
