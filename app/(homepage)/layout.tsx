import SEO_KEYWORDS from '@/constants/seo-keywords'

export const metadata = {
    title: "CountryPedia | Learn about the World's Countries 🌏",
    description:
        'Know more about all the world countries with CountryPedia. Discover fascinating information, position on an interactive map, and detailed insights about countries worldwide. Test your knowledge and challenge yourself with interactive quiz games. Explore, learn, and become a global geography expert with CountryPedia!',
    keywords: SEO_KEYWORDS,
}

export default function ShowCountryLayout({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
}
