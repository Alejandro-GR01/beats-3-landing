import apple from '../assets/apple icon.svg'
import spotify from '../assets/spotify icon.svg'
import amazon from '../assets/amazon icon.svg'
import youtube from '../assets/youtube.svg'

const Sponsors = () => {
    return (
        <section id='sponsors' >
            <div className='container'>
                <div className=' flex flex-wrap justify-evenly md:justify-between items-center max-w-3xl mx-auto gap-4'>

                    <div>
                        <img src={apple} alt="apple icon" />
                    </div>
                    <div>
                        <img src={spotify} alt="spotify icon" />
                    </div>
                    <div>
                        <img src={amazon} alt="amazon icon" />
                    </div>
                    <div>
                        <img src={youtube} alt="youtube icon" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sponsors