import big from '../assets/big.jpg';
import small from '../assets/small.jpg';

import '../styles/image_viewer.css';//if its non js, should include the extension

const image = document.createElement('img');;
image.src = small;

document.body.appendChild(image);

const bigImage = document.createElement('img');;
bigImage.src = big;// the path may be wrong, will use another way to fix the path problem -> add public path in webpack.config

document.body.appendChild(bigImage);