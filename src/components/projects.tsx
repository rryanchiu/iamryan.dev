import {useEffect, useState} from 'react'
import {Dotmote} from 'dotmote'

const Projects = () => {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const root = document.documentElement
        const sync = () => setIsDark(root.classList.contains('dark'))
        sync()
        const observer = new MutationObserver(sync)
        observer.observe(root, {attributes: true, attributeFilter: ['class']})
        return () => observer.disconnect()
    }, [])

    const projects = [{
        name: 'dotmote',
        url: 'https://dotmote.imryan.dev/',
        preview: true,
    }, {
        name: 'Paperdesk',
        url: 'https://paperdesk.cn/',
    }, {
        name: 'Radiobear',
        url: 'https://radiobear.imryan.dev/',
        // }, {
        //     name: 'Smart Dalton',
        //     url: 'https://chatgpt.imryan.dev/',
    }, {
        name: 'TinyURL',
        url: 'https://tinyurl.imryan.dev/',
    }]

    return (
        <div className='pt-5'>
            <div className="grid grid-cols-1 sm:grid-cols-1">
                <div className="flex px-3 py-2 justify-between">
                    <span className="op-60 transition-opacity">PROJECTS</span>
                </div>
                {projects.map((item, index) => (
                    item.preview ? (
                        <div
                            key={index}
                            className="relative h-10 overflow-hidden cursor-pointer"
                            onClick={() => {
                                window.open(item.url)
                            }}
                        >
                            <Dotmote
                                className={'h-10 rd-2 min-w-40 max-w-80 ml-3 '}
                                values="👋dotmote"
                                dotRadius={2}
                                motion="ticker-right"
                                glowStrength={4}
                                theme={isDark?"dark":{dotColor:"#e1e1e1",activeDotColor:"#222"}}
                                spacingScale={0.6}
                                fontSize={28}
                                charGap={2}
                            />

                            <div
                                className="absolute inset-0 z-1 flex items-center justify-between px-3 pointer-events-none">
                                <span className="font-700"></span>
                                <i className="ri-arrow-right-line text-xl"></i>
                            </div>
                        </div>
                    ) : (
                        <div key={index}
                             className={'justify-between rd-2 px-3 py-2 flex gap-4 cursor-pointer hover:bg-dark-2 hover:color-gray-1'}
                             onClick={() => {
                                 window.open(item.url)
                             }}>

                            <div className={' grid '}>
                                <span className={'font-700'}>  {item.name}</span>
                            </div>
                            <i className="ri-arrow-right-line text-xl"></i>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}

export default Projects