const About = () => {

    const about = "I’m a full-stack engineer with 10 years of experience building B2B systems across hospitality, travel, finance, education, and retail.Strong background in Java, Spring Boot, React, Vue, and database-driven business applications. Recently focused on AI-enabled internal tools, including AI agents, RAG knowledge retrieval, tool calling, and LLM-assisted development.";
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