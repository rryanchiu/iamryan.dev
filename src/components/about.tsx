const About = () => {

    const about = "I’m a full stack engineer focused on building practical software, with growing interests in AI and deep learning. I enjoy turning ideas into working products, whether that means writing backend services, designing interfaces, or experimenting with ML models.";
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