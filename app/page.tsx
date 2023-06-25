import { getAllCountries } from '@/services/fetchers'
import Countries from '@/components/countries'
// import CountryCard from '@/components/country-card'
const HomePage = async () => {
    const allCountries = await getAllCountries()

    return (
        <>
            <Countries allCountries={allCountries} />
        </>
    )
}

export default HomePage
