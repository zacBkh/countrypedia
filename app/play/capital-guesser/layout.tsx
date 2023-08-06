import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: "Capital Guesser - Find countries' capitals!  | CountryPedia",
    keywords: SEO_KEYWORDS,
    description:
        'Capital Guesser is a game where you need to guess countries capitals. Challenge your countries and capitals knowledge with this interactive quiz! Put your geography skills to the test as you guess the capitals of diverse and randomly generated countries. Unveil your mastery of geography and conquer the capitals challenge today!',
}

export default function CapitalGuesserLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}
