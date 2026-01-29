self.__uv$config = {
    prefix: '/service/',
    // The Bare server (engine for basic sites)
    bare: 'https://uv.student-portal.workers.dev/', 
    // The Wisp server (engine for YouTube/Twitch/WebSockets)
    wisp: 'wss://wisp.mercurywork.shop/', 
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
