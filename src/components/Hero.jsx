import React from 'react'

const Hero = ({title = 'Become a React Dev', subtitle='Find a react job that fits your skillset'}) => {
// const Hero = ({title, subtitle})
// const Hero = (props)  -> another way of adding props 
    return (
        <section className="bg-indigo-700 py-20 mb-4">
            <div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
            >
                <div className="text-center">
                    <h1
                        className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
                    >
                        {title}
                {/* {props.title}  another way of adding props  */}
                    </h1>
                    <p className="my-4 text-xl text-white">
                        {subtitle}
                       {/* {props.subtitle} another way of adding props */}
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Hero