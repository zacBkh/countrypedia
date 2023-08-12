export const whichEnv = () => {
    if (process.env.NODE_ENV === 'production') {
        console.log('current domain is [PROD] ', process.env.NEXT_PUBLIC_VERCEL_ENV)
        return process.env.NEXT_PUBLIC_VERCEL_ENV
    } else {
        // if dev
        console.log('current domain is [DEV] ', 'http://localhost:3008/')
        return 'http://localhost:3008/'
    }
}
