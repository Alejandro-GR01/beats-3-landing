import bluetooth from '../assets/bluetooth.svg'
import battery from '../assets/batery.svg' 
import load from '../assets/plug.svg'
import micro from '../assets/micro.svg'


import black from '../assets/black.png'
import red from '../assets/red.png'
import yellow from '../assets/yellow.png'
import blue from '../assets/blue.png'
import gray from '../assets/gray.png'
import collection from '../assets/nba.png'
import blackAvif from '../assets/black.avif'
import redAvif from '../assets/red.avif'
import yellowAvif from '../assets/yellow.avif'
import blueAvif from '../assets/blue.avif'
import grayAvif from '../assets/gray.avif'
import collectionAvif from '../assets/nba.avif'


export const navLinks = [
    {
        label: 'Home',
        url: '#hero'
    },
    {
        label: 'Specs',
        url: '#specs'
    },
    {
        label: 'Case',
        url: '#case-section'
    },
    {
        label: 'Products',
        url: '#shop'
    }

]

export const specsItems = [
    {
        svg: bluetooth ,
        title: 'Connection',
        description: 'Bluetooth v5.2'
    },
    {
        svg:  battery,
        title: 'Battery',
        description: 'Duration 40h'
    },
    {
        svg:  load ,
        title: 'Load',
        description: 'Fast charge 4.2-AAC'
    },
    {
        svg: micro,
        title: 'Microphone',
        description: 'Suport Apple Siri and Google'
    }
]


export const shopItems = [
    {
        image: black, 
        imageAvif: blackAvif,
        label: 'Black',
        model: 'N299K'
    },
    {   
        image: red,
        imageAvif : redAvif,
        label: 'Red Black',
        model: 'N299K'     
    },
    {  
        image: yellow,
        imageAvif: yellowAvif,
        label: 'Night Black',    
        model: 'N299K'
    },
    {   image: blue,
        imageAvif: blueAvif,
        label: 'Blue',
        model: 'N299K'     
    },
    {
        image:gray,
        imageAvif: grayAvif,   
        label: 'Twilight Gray',
        model: 'N299K'  
    },
    {
        image: collection,
        imageAvif: collectionAvif,
        label:'NBA Collection',
        model: 'N399K'
    }
]