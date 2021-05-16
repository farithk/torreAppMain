import React from 'react';
import "../../Header/Header.css";

export default function Icons({ name }) {

	let icons = {
		Logo: (
      <svg viewBox="0 0 113 33" fill="#ffffff" className="logo__image"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" strokeWidth="1">
      <path d="M10.9635,32.423 C13.1255,32.423 14.6765,31.953 16.0865,31.154 L16.0865,26.501 C14.9585,27.065 13.8305,27.347 12.5615,27.347 C10.6345,27.347 9.5065,26.454 9.5065,24.245 L9.5065,12.072 L16.1805,12.072 L16.1805,7.184 L9.5065,7.184 L9.5065,0.369 L3.8195,0.369 L3.8195,7.184 L0.6705,7.184 L0.6705,12.072 L3.8195,12.072 L3.8195,25.138 C3.8195,30.59 6.7805,32.423 10.9635,32.423 Z M33.0535,32.564 C40.6050571,32.564 46.1929447,26.8556582 46.3510575,19.9404098 L46.3545,19.545 C46.3545,12.448 40.7615,6.667 33.1475,6.667 C25.6422714,6.667 20.0550457,12.3753418 19.8969424,19.3356046 L19.8935,19.733 C19.8935,26.783 25.4865,32.564 33.0535,32.564 Z M33.1475,27.582 C28.8144615,27.582 25.7020847,24.1008539 25.5839803,19.8876586 L25.5805,19.545 C25.5805,15.221 28.4945,11.649 33.0535,11.649 C37.4326346,11.649 40.5458979,15.1301461 40.6640193,19.3876816 L40.6675,19.733 C40.6675,24.01 37.7535,27.582 33.1475,27.582 Z M52.0885,32 L57.8225,32 L57.8225,22.553 C57.8225,15.973 61.3005,12.73 66.2825,12.73 L66.6115,12.73 L66.6115,6.714 C62.2405,6.526 59.3735,9.064 57.8225,12.777 L57.8225,7.184 L52.0885,7.184 L52.0885,32 Z M71.4995,32 L77.2335,32 L77.2335,22.553 C77.2335,15.973 80.7115,12.73 85.6935,12.73 L86.0225,12.73 L86.0225,6.714 C81.6515,6.526 78.7845,9.064 77.2335,12.777 L77.2335,7.184 L71.4995,7.184 L71.4995,32 Z M101.4855,32.564 C106.0445,32.564 109.2875,30.731 111.6375,27.911 L108.3005,24.95 C106.3265,26.877 104.3525,27.911 101.5795,27.911 C97.9135,27.911 95.0465,25.655 94.4355,21.613 L112.6715,21.613 C112.7185,21.049 112.7655,20.532 112.7655,20.015 C112.7655,12.871 108.7705,6.667 100.8745,6.667 C93.8818676,6.667 88.896859,12.3248486 88.7517533,19.2797349 L88.7485,19.686 C88.7485,27.347 94.2945,32.564 101.4855,32.564 Z M94.3885,17.853 C94.9055,13.999 97.3495,11.32 100.8275,11.32 C104.5875,11.32 106.7495,14.187 107.1255,17.853 L94.3885,17.853 Z"></path></g></svg>
		),
    Search: (
      <svg viewBox="0 0 24 25" fill="#ffffff" className="logo__left__side"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
    ),
    Jobs: (
      <svg viewBox="0 0 24 25" fill="#ffffff" className="logo__left__side__secondary"><path d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"></path></svg>
    ),
    Genome: (
      <svg viewBox="0 0 24 25" fill="#ffffff" className="logo__left__side__secondary"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"></path></svg>
    ),
		github: (
			<svg viewBox="0 0 24 25" fill="#ffffff" className="icon__social__media" ><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
		),
		linkedin : (
			<svg viewBox="0 0 24 25" fill="#ffffff" className="icon__social__media" ><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path></svg>
		),
		instagram: (
			<svg viewBox="0 0 24 25" fill="#ffffff" className="icon__social__media"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path></svg>
		),
	}

	if (icons[name] === undefined) {
		console.log(`icon: ${name} does not exists`)
		return null
	}

	return icons[name]
}
