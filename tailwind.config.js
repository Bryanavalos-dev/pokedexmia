module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [],
    theme: {
        screens: {
            'celular': '18.75rem',
            // => @media (min-width:300px) { ... }


            'tablet': '40rem',
            // => @media (min-width: 640px) { ... }

            'laptop': '64rem',
            // => @media (min-width: 1024px) { ... }

            'desktop': '80rem',
            // => @media (min-width: 1280px) { ... }
        },

        extend: {
            fontFamily: {
                'body': ['Poppins']
            },
            spacing: {
                7: '1.75rem',
                14: '3.5rem',
                25: '8 rem',
                100: '34rem',
                200: '75rem',
                75: '23rem',

                104: '26rem',

                120: '30rem',

            },
            height: {
                "11/20": '60.0000000%'
            },
            inset: {
                '0': 0,
                auto: 'auto',
                '50': '5.9rem',
                '45': '4.5rem',
                'center': '50.000000%'

            },

        },
        // colors: {

        //     "brown-400": '#3c2d2d',
        //     'brown-200': '#5a4e4c'

        // },





    },

    variants: {},
    plugins: [],
}