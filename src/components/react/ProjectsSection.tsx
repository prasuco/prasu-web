import React from 'react'

const ProjectsSection = () => {
    return (
        <>
            <section
                className="text-gray-700 py-28 text-left"
                style={{
                    backgroundImage: 'url("/input.webp")',
                    backgroundSize: "cover",
                    backgroundPosition: "left left"
                }}
            >
                <div className="px-[24px] max-w-7xl mx-auto">
                    <h1 className=" text-white text-4xl font-extrabold text-pretty h1">
                        Our Projects
                    </h1>
                    <p className="text-white max-w-3xl text-pretty py-4">
                        prasuco emphasizes building collaborative partnerships rather than
                        merely executing projects. They approach clients' challenges as their own,
                        allowing clients to focus on their core business while prasuco handles the
                        technical requirements that arise.
                    </p>
                </div>
            </section>


            <section className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center m-4'>
                <h2 className='text-3xl font-bold'>
                    Coming Soon
                </h2>
            </section>


        </>
    )
}

export default ProjectsSection