const About = () => {

    const about = "I'm a Full Stack Engineer who loves diving into new challenges. While I enjoy crafting code and exploring design, my latest obsession is Deep Learning. From building small, fun apps to experimenting with AI models, I’m always learning and playing with ideas that push the boundaries of what technology can do.";
    return (
        <div className='xl:min-w-lg mt-5'>
            <div className="flex px-3 py-2 justify-between">
                <span className="op-60 transition-opacity">ABOUT</span>
            </div>
            <div className="flex px-3 py-2 justify-between">
                <span className="text-sm leading-relaxed">{about}</span>
            </div>

        </div>
    )
}
export default About