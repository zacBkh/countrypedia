import { getAllCountries } from '@/services/fetchers'
import Countries from '@/components/countries'
import CountryCardSkeleton from '@/components/ui/skeletons/country-card-skeleton'
const HomePage = async () => {
    const allCountries = await getAllCountries()

    return (
        <>
            <Countries allCountries={allCountries} />
        </>
    )
}

export default HomePage
