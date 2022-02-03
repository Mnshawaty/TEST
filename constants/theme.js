
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");



export const COLORS = {

    default: '#134B8A',
    blueblack: '#OF1E56',
    graysoft: '#C3BEBB',
    skysoft: '#C4D3E9',

    while: '#FFFFFF',
    black: '#000000',
    graywhite: "#E0E0E0",
    gray: "#9e9e9e",
    grayblack: "#605C5C",
};
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,

    // font sizes
    largeTitle: 40,
    h1: 60,
    h2: 48,
    h3: 36,
    h4: 24,
    h5: 20,
    h6: 18,
    h7: 16,
    body1: 30,
    body2: 22,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

export const FONTS = {
    largeTitle: { fontFamily: "Kanit-Black", fontSize: SIZES.largeTitle },
    h1: { fontFamily: "Kanit-Bold", fontSize: SIZES.h1 },
    h2: { fontFamily: "Kanit-Bold", fontSize: SIZES.h2 },
    h3: { fontFamily: "Kanit-SemiBold", fontSize: SIZES.h3 },
    h4: { fontFamily: "Kanit-Regular", fontSize: SIZES.h4 },
    h5: { fontFamily: "Kanit-Regular", fontSize: SIZES.h5 },
    h6: { fontFamily: "Kanit-Regular", fontSize: SIZES.h6 },
    h7: { fontFamily: "Kanit-Regular", fontSize: SIZES.h7 },
    /* body1: { fontFamily: "Kanit-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Kanit-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Kanit-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Kanit-Regular", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "Kanit-Regular", fontSize: SIZES.body5, lineHeight: 22 }, */
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
