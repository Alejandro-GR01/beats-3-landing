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


export const navLinks = [
    {
        label: 'Home',
        url: '#home'
    },
    {
        label: 'Specs',
        url: '#'
    },
    {
        label: 'Case',
        url: '#'
    },
    {
        label: 'Products',
        url: '#'
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
        label: 'Black',
        model: 'N299K'
    },
    {   
        image: red,
        label: 'Red Black',
        model: 'N299K'     
    },
    {  
        image: yellow,
        label: 'Night Black',    
        model: 'N299K'
    },
    {   image: blue,
        label: 'Blue',
        model: 'N299K'     
    },
    {
        image:gray,   
        label: 'Twilight Gray',
        model: 'N299K'  
    },
    {
        image: collection,
        label:'NBA Collection',
        model: 'N399K'
    }
]