import L from 'leaflet';

const svgMarkup = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
	<path d="M 65.162 65.058 c -0.008 0 -0.016 0 -0.024 0 l -5.631 -0.137 c -0.543 -0.014 -0.976 -0.457 -0.976 -1 V 29.859 c 0 -0.552 0.447 -1 1 -1 h 17.172 c 0.338 0 0.653 0.171 0.838 0.454 l 12.297 18.859 C 89.943 48.334 90 48.523 90 48.718 v 15.203 c 0 0.548 -0.44 0.993 -0.987 1 l -11.034 0.137 c -0.005 0 -0.009 0 -0.013 0 c -0.547 0 -0.993 -0.439 -1 -0.987 c -0.007 -0.553 0.436 -1.006 0.987 -1.013 L 88 62.934 V 49.015 L 76.161 30.859 h -15.63 v 32.086 l 4.655 0.112 c 0.552 0.014 0.988 0.472 0.976 1.024 C 66.148 64.626 65.703 65.058 65.162 65.058 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 59.531 64.921 H 24.344 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 34.187 V 20.54 H 2 v 42.381 h 9.541 c 0.552 0 1 0.447 1 1 s -0.448 1 -1 1 H 1 c -0.552 0 -1 -0.447 -1 -1 V 19.54 c 0 -0.552 0.448 -1 1 -1 h 58.531 c 0.553 0 1 0.448 1 1 v 44.381 C 60.531 64.474 60.084 64.921 59.531 64.921 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 17.942 71.46 c -4.082 0 -7.402 -3.32 -7.402 -7.402 c 0 -4.081 3.32 -7.401 7.402 -7.401 s 7.402 3.32 7.402 7.401 C 25.344 68.14 22.024 71.46 17.942 71.46 z M 17.942 58.656 c -2.979 0 -5.402 2.423 -5.402 5.401 s 2.423 5.402 5.402 5.402 s 5.402 -2.424 5.402 -5.402 S 20.921 58.656 17.942 58.656 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 89 49.718 H 66.703 c -0.553 0 -1 -0.447 -1 -1 V 35.68 c 0 -0.552 0.447 -1 1 -1 h 13.795 c 0.553 0 1 0.448 1 1 s -0.447 1 -1 1 H 67.703 v 11.038 H 89 c 0.553 0 1 0.447 1 1 S 89.553 49.718 89 49.718 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 89 57.815 h -5.288 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 H 89 c 0.553 0 1 0.447 1 1 S 89.553 57.815 89 57.815 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 71.564 71.46 c -4.082 0 -7.402 -3.32 -7.402 -7.402 c 0 -4.081 3.32 -7.401 7.402 -7.401 c 4.081 0 7.401 3.32 7.401 7.401 C 78.966 68.14 75.646 71.46 71.564 71.46 z M 71.564 58.656 c -2.979 0 -5.402 2.423 -5.402 5.401 s 2.424 5.402 5.402 5.402 s 5.401 -2.424 5.401 -5.402 S 74.543 58.656 71.564 58.656 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<circle cx="17.948" cy="64.05799999999999" r="1.828" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<circle cx="71.568" cy="64.05799999999999" r="1.828" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
	<path d="M 59.531 57.815 H 29.358 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 30.173 c 0.553 0 1 0.447 1 1 S 60.084 57.815 59.531 57.815 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
	<path d="M 6.288 57.815 H 1 c -0.552 0 -1 -0.447 -1 -1 s 0.448 -1 1 -1 h 5.288 c 0.552 0 1 0.447 1 1 S 6.84 57.815 6.288 57.815 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(31,99,9); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>
`;

const encodedSvg = encodeURIComponent(svgMarkup);

const truckIcon = new L.Icon({
  iconUrl: `data:image/svg+xml;charset=UTF-8,${encodedSvg}`,
  iconSize: [50, 50],
  iconAnchor: [17.5, 35],
  popupAnchor: [1, -34]
});

export default truckIcon;