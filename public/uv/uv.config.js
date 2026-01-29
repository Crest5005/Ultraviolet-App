self.__uv$config = {
    prefix: '/service/',
    bare: 'https://uv.student-portal.workers.dev/', 
    wisp: 'wss://wisp.mercurywork.shop/', // This is the most stable 2026 link
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
