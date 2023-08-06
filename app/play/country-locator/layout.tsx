import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: "Country Locator - Find countries' capitals!  | CountryPedia",
    keywords: SEO_KEYWORDS,
    description:
        'CountryLocator is a geography game where you need to locate randomly generated countries on an interactive map by clicking on it! Ready to test your knowledge about geography',
}

export default function CountryLocatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <section>{children}</section>
}
