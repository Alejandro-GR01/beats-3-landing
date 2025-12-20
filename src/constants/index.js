import bluetooth from '../assets/bluetooth.svg'
import battery from '../assets/batery.svg' 
import load from '../assets/plug.svg'
import micro from '../assets/micro.svg'


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