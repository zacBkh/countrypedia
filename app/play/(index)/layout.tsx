export const metadata = {
    title: 'CountryPedia | Test your knowledge!',
    description: 'CountryPedia',
}

import { TITLE_FONT_SIZE } from '@/constants/responsive-fonts'

export default function PlayLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-y-10 py-4 sm:py-6">
            <h1 className={`${TITLE_FONT_SIZE} text-center font-bold w-[60%] mx-auto`}>
                Pick one of the game and test yourself!
            </h1>
            {children}
        </div>
    )
}
