import { createGlobalStyle } from "styled-components";
import InterBlack from "./Font/static/Inter-Black.ttf";
import InterBold from "./Font/static/Inter-Bold.ttf";
import InterExtraBold from "./Font/static/Inter-ExtraBold.ttf";
import InterExtraLight from "./Font/static/Inter-ExtraLight.ttf";
import InterLight from "./Font/static/Inter-Light.ttf";
import InterMedium from "./Font/static/Inter-Medium.ttf";
import InterRegular from "./Font/static/Inter-Regular.ttf";
import InterSemiBold from "./Font/static/Inter-SemiBold.ttf";
import InterThin from "./Font/static/Inter-Thin.ttf";

export const GlobalStyles = createGlobalStyle`
*{

    @font-face {
	font-family: 'Inter-Black';
	src: url(${InterBlack}) format("truetype");
}

@font-face {
	font-family: 'Inter-Bold';
	src: url(${InterBold}) format("truetype");
}
@font-face {
	font-family: 'Inter-Extra-Bold';
	src: url(${InterExtraBold}) format("truetype");
}
@font-face {
	font-family: 'Inter-Extra-Light';
	src: url(${InterExtraLight}) format("truetype");
}
@font-face {
	font-family: 'Inter-Light';
	src: url(${InterLight}) format("truetype");
}
@font-face {
	font-family: 'Inter-Medium';
	src: url(${InterMedium}) format("truetype");
}
@font-face {
	font-family: 'Inter-Regular';
	src: url(${InterRegular}) format("truetype");
}
@font-face {
	font-family: 'Inter-Semi-Bold';
	src: url(${InterSemiBold}) format("truetype");
}
@font-face {
	font-family: 'Inter-Thin';
	src: url(${InterThin}) format("truetype");
}

}`;