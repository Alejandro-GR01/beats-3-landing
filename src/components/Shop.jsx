
import { shopItems } from "../constants"

const Shop = () => {
    return (
        <section id="shop">
            <div className="container">
                <div className="flex flex-col gap-13 md:gap-21 items-center">
                    <h2 className="max-w-88 md:max-w-90 text-center shop-heading"> <span>Choose</span><span>Your Style</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-9 md:gap-11  mx-auto">
                        {shopItems.map(item => (
                            <div key={item.label} className="  flex flex-col justify-between items-center gap-4 relative hover:scale-105 hover:-translate-x-2 hover:-translate-y-2 transition-transform duration-300 " role="button" tabIndex={0}>
                                <img src={item.image} alt={`beats-${item.label.toLowerCase()}`} height={127} width={95} className="-mb-20 relative z-10" />
                                <div className="bg-gray-120 pt-20! p-3.5 flex gap-1.5 justify-between items-end rounded-xl w-41 h-38 ">
                                    <div className="flex flex-col gap-1 text-sm font-semibold  ">
                                        <p className="text-white-120">{item.label}</p>
                                        <p className="text-gray-paragraph font-medium">{item.model}</p>
                                    </div>
                                    <div className="h-9 w-9 p-2 bg-black-120 rounded-lg flex items-center justify-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M3.97738 9.84C4.0176 9.33881 4.24513 8.87115 4.61465 8.53017C4.98417 8.18918 5.46857 7.9999 5.97138 8H18.0294C18.5322 7.9999 19.0166 8.18918 19.3861 8.53017C19.7556 8.87115 19.9832 9.33881 20.0234 9.84L20.8264 19.84C20.8485 20.1152 20.8133 20.392 20.7232 20.6529C20.6331 20.9139 20.4899 21.1533 20.3027 21.3562C20.1155 21.5592 19.8883 21.7211 19.6354 21.8319C19.3825 21.9427 19.1095 21.9999 18.8334 22H5.16738C4.8913 21.9999 4.61823 21.9427 4.36536 21.8319C4.11249 21.7211 3.88529 21.5592 3.69808 21.3562C3.51086 21.1533 3.36768 20.9139 3.27755 20.6529C3.18742 20.392 3.15229 20.1152 3.17438 19.84L3.97738 9.84V9.84Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        ))}
                       
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop